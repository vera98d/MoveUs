import ExercisesTable from "../../components/ActivityTable";
import { BackgroundContainer, Header, Wrapper, LineWrapper } from "./styles";
import { Fragment, useEffect, useState } from "react";
import { User } from "../../interfaces/dbData";
import userService from "../../services/userService";
import { useParams } from "react-router-dom";
import { OtherUserPhotoProfile } from "../../components/ProfilePicture/style";

function UsersExercises() {
  const { uid } = useParams();
  const [usersData, setUsersData] = useState<User[]>([]);
  useEffect(() => {
    userService.getUsers().then((data) => {
      setUsersData(data);
    });
  }, []);
  const ExceptedUserDataTable = () => {
    if (usersData !== null) {
      return usersData.map((selectedUser) => {
        if (selectedUser.uid === uid) {
          return (
            <Fragment key={selectedUser.uid}>
              <Header />
              <Wrapper>
                <div className="UserInformationContainer">
                  <OtherUserPhotoProfile avatarUrl={selectedUser.avatarUrl} />
                  <span className="usernameStyle">
                    {selectedUser.name} {selectedUser.surname}
                  </span>
                </div>
                <LineWrapper>
                  <ExercisesTable
                    userId={selectedUser.uid}
                    userScore={selectedUser.score}
                  />
                </LineWrapper>
              </Wrapper>
            </Fragment>
          );
        }
      });
    }
  };
  return <BackgroundContainer>{ExceptedUserDataTable()}</BackgroundContainer>;
}

export default UsersExercises;
