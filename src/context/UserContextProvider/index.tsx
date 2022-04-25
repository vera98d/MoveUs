import React, { useEffect, useMemo, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { User } from "../../interfaces/dbData";
import authService from "../../services/authService";
import userService from "../../services/userService";

interface UserContextValue {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
}

export const UserContext = React.createContext<UserContextValue>({
  user: null, setUser: () => undefined, isLoading: true,
});

interface Props {
  children: React.ReactNode
}

export function UserContextProvider({ children }: Props) {
  const [user, setUser] = useState<null | User>(null);
  const [isLoadingUserData, setIsLoadingUserData] = useState(false);
  const [authUser, isLoadingAuthUser] = useAuthState(authService.getAuth());

  const contextValue = useMemo(() => ({
    user,
    setUser,
    isLoading: isLoadingAuthUser || isLoadingUserData,
  }), [user, isLoadingUserData, isLoadingAuthUser]);

  useEffect(() => {
    if (authUser) {
      setIsLoadingUserData(true);
      userService.getUserById(authUser.uid).then((data) => {
        if (data) {
          setUser(data);
        }
      }).finally(() => {
        setIsLoadingUserData(false);
      });
    } else {
      setUser(null);
    }
  }, [authUser]);

  return (
    <UserContext.Provider
      value={contextValue}
    >
      {children}
    </UserContext.Provider>
  );
}