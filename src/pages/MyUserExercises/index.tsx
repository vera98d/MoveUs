import ExercisesTable from "../../components/ActivityTable";
import { BackgroundContainer, Wrapper, LineWrapper } from "./styles";
import { useAuthState } from "react-firebase-hooks/auth";
import authService from "../../services/authService";
import activityService from "../../services/activityService";
import { useEffect, useState } from "react";
import EditableProfilePicture from "../../components/EditableProfilePicture";

function MyUserExercises() {
  const [user, loading] = useAuthState(authService.getAuth());
  const [userTitle, setUserTitle] = useState("");
  useEffect(() => {
    if (!user) {
      return;
    }
    activityService.getMyUser(user.uid).then((data) => {
      const username = `${data.name} ${data.surname}`;
      setUserTitle(username);
    });
  }, [user]);

  if (loading || !user) {
    return null;
  }

  return (
    <BackgroundContainer>
      <Wrapper>
        <div className="UserInformationContainer">
          <EditableProfilePicture />
          <span>{userTitle}</span>
        </div>
        <LineWrapper>
          <ExercisesTable userId={user.uid} isButtonVisible />
        </LineWrapper>
      </Wrapper>
    </BackgroundContainer>
  );
}

export default MyUserExercises;
