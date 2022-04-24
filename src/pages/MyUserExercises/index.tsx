import ExercisesTable from "../../components/ActivityTable";
import { BackgroundContainer, Wrapper, LineWrapper } from "./styles";
import { useContext } from "react";
import EditableProfilePicture from "../../components/EditableProfilePicture";
import { UserContext } from "../../context/UserContextProvider";

function MyUserExercises() {
  const { user, isLoading } = useContext(UserContext);

  if (isLoading || !user) {
    return null;
  }

  return (
    <BackgroundContainer>
      <Wrapper>
        <div className="UserInformationContainer">
          <EditableProfilePicture />
          <span>{user.name} {user.surname}</span>
        </div>
        <LineWrapper>
          <ExercisesTable userId={user.uid} isButtonVisible userScore={user.score} />
        </LineWrapper>
      </Wrapper>
    </BackgroundContainer>
  );
}

export default MyUserExercises;
