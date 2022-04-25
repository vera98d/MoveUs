/* eslint-disable react/destructuring-assignment */
import ExercisesTable from "../../components/ExercisesTable";
import { BackgroundContainer, Wrapper, LineWrapper } from "./styles";
import EditableProfilePicture from "../../components/EditableProfilePicture";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import authService from "../../services/authService";
import userService from "../../services/userService";
import { useParams } from "react-router-dom";

function MyWorkout() {
  const [user, loading] = useAuthState(authService.getAuth());
  const [userTitle, setUserTitle] = useState("");
  useEffect(() => {
    if (!user) {
      return;
    }
    userService.getUser(user.uid).then((data) => {
      const username = `${data.name} ${data.surname}`;
      setUserTitle(username);
    });
  }, [user]);
  let { exerciseCount } = useParams();

  if (exerciseCount === undefined) {
    exerciseCount = "0";
  }

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
          <ExercisesTable exerciseCount={parseInt(exerciseCount, 10)} />
        </LineWrapper>
      </Wrapper>
    </BackgroundContainer>
  );
}

export default MyWorkout;
