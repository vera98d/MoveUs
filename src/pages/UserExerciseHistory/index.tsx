import ActivityTable, { Activity } from "../../components/ActivityTable";
import { Img, Test, Header, Wrapper, LineWrapper } from "./styles";
import image from "./testimg.png";

function UserExerciseHistory() {
  const activities: Activity[] = [
    {
      id: "1",
      exercise: "pompki",
      duration: "1000",
      score: 5000,
      date: new Date(2016, 11, 17),
    },
    {
      id: "2",
      exercise: "brzuszki",
      duration: "2000",
      score: 4000,
      date: new Date(2016, 11, 17),
    },
    {
      id: "3",
      exercise: "pajacyki",
      duration: "3000",
      score: 5000,
      date: new Date(2016, 11, 17),
    },
  ];
  return (
    <Test>
      <Header />
      <Wrapper>
        <div className="UserInformationContainer">
          <Img src={image} alt="" />
          <span>Jurek Jurkowy (nick)</span>
        </div>
        <LineWrapper>
          <ActivityTable activities={activities} />
        </LineWrapper>
        {/* <div className="groupWrapper"> */}
        {/*   <h3>Group Invitations</h3> */}
        {/*   <GroupContainer> */}
        {/*     <span className="groupName">Group Name</span> */}
        {/*     <div className="buttonWrapper"> */}
        {/*       <button type="button">Accept</button> */}
        {/*       <span className="verticalLine">|</span> */}
        {/*       <button type="button">Reject</button> */}
        {/*     </div> */}
        {/*   </GroupContainer> */}
        {/* </div> */}
      </Wrapper>
    </Test>
  );
}

export default UserExerciseHistory;
