import ExercisesTable from "../../components/ActivityTable";
import EditableProfilePicture from "../../components/EditableProfilePicture";
import { Activity } from "../../interfaces/dbData";
import { BackgroundContainer, Wrapper, LineWrapper } from "./styles";

function MyUserExercises() {
  const activities: Activity[] = [
    {
      id: "1",
      exercise: "pajacyki",
      duration: "1000",
      score: 7000,
      date: new Date(2018, 6, 22),
    },
    {
      id: "2",
      exercise: "brzuszki",
      duration: "2000",
      score: 4000,
      date: new Date(2019, 11, 14),
    },
    {
      id: "3",
      exercise: "pajacyki",
      duration: "3000",
      score: 5000,
      date: new Date(2020, 11, 12),
    },
    {
      id: "4",
      exercise: "sklony",
      duration: "5000",
      score: 7000,
      date: new Date(2019, 11, 17),
    },
    {
      id: "5",
      exercise: "sklony",
      duration: "5000",
      score: 7000,
      date: new Date(2019, 11, 17),
    },
    {
      id: "6",
      exercise: "sklony",
      duration: "5000",
      score: 7000,
      date: new Date(2019, 11, 17),
    },
    {
      id: "7",
      exercise: "sklony",
      duration: "5000",
      score: 7000,
      date: new Date(2019, 11, 17),
    },
    {
      id: "8",
      exercise: "druga strona",
      duration: "5000",
      score: 7000,
      date: new Date(2019, 11, 17),
    },
    {
      id: "9",
      exercise: "druga strona",
      duration: "5000",
      score: 7000,
      date: new Date(2019, 11, 17),
    },
    {
      id: "10",
      exercise: "druga strona",
      duration: "5000",
      score: 7000,
      date: new Date(2019, 11, 17),
    },
    {
      id: "11",
      exercise: "druga strona",
      duration: "5000",
      score: 7000,
      date: new Date(2019, 11, 17),
    },
    {
      id: "12",
      exercise: "druga strona",
      duration: "5000",
      score: 7000,
      date: new Date(2019, 11, 17),
    },
    {
      id: "13",
      exercise: "druga strona",
      duration: "5000",
      score: 7000,
      date: new Date(2019, 11, 17),
    },
    {
      id: "14",
      exercise: "druga strona",
      duration: "5000",
      score: 7000,
      date: new Date(2019, 11, 17),
    },
    {
      id: "15",
      exercise: "trzecia",
      duration: "5000",
      score: 7000,
      date: new Date(2019, 11, 17),
    },
  ];
  return (
    <BackgroundContainer>
      <Wrapper>
        <div className="UserInformationContainer">
          <EditableProfilePicture />
          <span>Jurek Jurkowy (nick)</span>
        </div>
        <LineWrapper>
          <ExercisesTable activities={activities} isButtonVisible />
        </LineWrapper>
      </Wrapper>
    </BackgroundContainer>
  );
}

export default MyUserExercises;
