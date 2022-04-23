import ExercisesTable from "../../components/ActivityTable";
import { Activity } from "../../interfaces/dbData";
import { Img, BackgroundContainer, Header, Wrapper, LineWrapper } from "./styles";
import image from "./testimg.png";

function UsersExercises() {
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
          <span className="usernameStyle">Jurek Jurkowy (nick)</span>
        </div>
        <LineWrapper>
          <ExercisesTable activities={activities} />
        </LineWrapper>
      </Wrapper>
    </BackgroundContainer>
  );
}

export default UsersExercises;
