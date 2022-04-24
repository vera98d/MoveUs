import ExercisesTable from "../../components/ActivityTable";
import { Img, BackgroundContainer, Header, Wrapper, LineWrapper } from "./styles";
import image from "./testimg.png";
import { Fragment, useEffect, useState } from "react";
import ActivityService from "../../services/activityService";
import { User } from "../../interfaces/dbData";
import { Link } from "react-router-dom";

function UsersExercises() {
  const [usersData, setUsersData] = useState<User[]>([]);
  useEffect(() => {
    ActivityService.getUsers()
      .then((data) => {
        setUsersData(data);
      });
  }, []);
  const ExceptedUserDataTable = () => {
    if (usersData !== null) {
      return usersData.map((selectedUser) => {
        if (selectedUser.email === "anna@tresko.com") {
          return (
            <Fragment key={selectedUser.uid}>
              <Header />
              <Wrapper>
                <div className="UserInformationContainer">
                  <Img src={image} alt="" />
                  <span className="usernameStyle">{selectedUser.name} {selectedUser.surname}</span>
                </div>
                <LineWrapper>
                  <ExercisesTable userId={selectedUser.uid} />
                </LineWrapper>
              </Wrapper>
            </Fragment>
          );
        }
      });
    }
  };
  return (
    <BackgroundContainer>
      {ExceptedUserDataTable()}
    </BackgroundContainer>
  );
}

export default UsersExercises;
