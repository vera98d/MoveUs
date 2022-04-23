import ExercisesTable from "../../components/ActivityTable";
import { Activity } from "../../interfaces/dbData";
import { Img, BackgroundContainer, Header, Wrapper, LineWrapper } from "./styles";
import image from "./testimg.png";
import { useAuthState } from "react-firebase-hooks/auth";
import authService from "../../services/authService";

function MyUserExercises() {
  const [user, loading] = useAuthState(authService.getAuth());
  if (loading || !user) {
    return null;
  }
  const activities: Activity[] = [
    {
      id: "1",
      exercise: "pajacyki",
      duration: "1000",
      score: 7000,
      date: new Date(2018, 6, 22),
    },
  ];
  return (
    <BackgroundContainer>
      <Header />
      <Wrapper>
        <div className="UserInformationContainer">
          <Img src={image} alt="" />
          <span>Mój USER</span>
        </div>
        <LineWrapper>
          <ExercisesTable activities={activities} isButtonVisible />
        </LineWrapper>
      </Wrapper>
    </BackgroundContainer>
  );
}

export default MyUserExercises;
