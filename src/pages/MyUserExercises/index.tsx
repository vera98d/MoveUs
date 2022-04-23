import ExercisesTable from "../../components/ActivityTable";
import { Img, BackgroundContainer, Header, Wrapper, LineWrapper } from "./styles";
import image from "./testimg.png";
import { useAuthState } from "react-firebase-hooks/auth";
import authService from "../../services/authService";

function MyUserExercises() {
  const [user, loading] = useAuthState(authService.getAuth());
  if (loading || !user) {
    return null;
  }
  return (
    <BackgroundContainer>
      <Header />
      <Wrapper>
        <div className="UserInformationContainer">
          <Img src={image} alt="" />
          <span>Mój USER</span>
        </div>
        <LineWrapper>
          <ExercisesTable userId={user.uid} isButtonVisible />
        </LineWrapper>
      </Wrapper>
    </BackgroundContainer>
  );
}

export default MyUserExercises;
