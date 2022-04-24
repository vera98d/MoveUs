import ExercisesTable from "../../components/ActivityTable";
import { Img, BackgroundContainer, Header, Wrapper, LineWrapper } from "./styles";
import image from "./testimg.png";
import { useAuthState } from "react-firebase-hooks/auth";
import authService from "../../services/authService";
import ActivityService from "../../services/activityService";
import { useState } from "react";

function MyUserExercises() {
  const [user, loading] = useAuthState(authService.getAuth());
  const [userTittle, setUserTittle] = useState("");
  if (loading || !user) {
    return null;
  }
  ActivityService.getMyUser(user.uid).then((data) => {
    const username = `${data.name} ${data.surname}`;
    setUserTittle(username);
  });
  return (
    <BackgroundContainer>
      <Header />
      <Wrapper>
        <div className="UserInformationContainer">
          <Img src={image} alt="" />
          <span>{userTittle}</span>
        </div>
        <LineWrapper>
          <ExercisesTable userId={user.uid} isButtonVisible />
        </LineWrapper>
      </Wrapper>
    </BackgroundContainer>
  );
}

export default MyUserExercises;
