import ExercisesTable from "../../components/ExercisesTable";
import { BackgroundContainer, Wrapper, LineWrapper } from "./styles";
import EditableProfilePicture from "../../components/EditableProfilePicture";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import authService from "../../services/authService";
import activityService from "../../services/activityService";

function MyWorkout() {
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
          <ExercisesTable exerciseCount={2} />
        </LineWrapper>
      </Wrapper>
    </BackgroundContainer>
  );
}

export default MyWorkout;
