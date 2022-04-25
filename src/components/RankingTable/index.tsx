import { FC, useState } from "react";
import { GridContainer, GridLine, GridChild, GridHeader, EmptyGridLine, UserGridChild } from "./styles";
import { User } from "../../interfaces/dbData";
import RankingTablePagination from "../RankingTablePagination";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import authService from "../../services/authService";

interface Props {
  groupUsers: User[];
}

interface UsersWithRankPosition extends User {
  rankPosition: number;
}

const RankingTable: FC<Props> = ({ groupUsers }) => {
  const sortedUsersWithRankPosition: UsersWithRankPosition[] = groupUsers.sort(
    (a, b) => b.score - a.score,
  ).map((user, index) => {
    return { ...user, rankPosition: index + 1 };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);

  const lastUserIndex = currentPage * usersPerPage;
  const firstUsernIndex = lastUserIndex - usersPerPage;

  const currentRankPositions: UsersWithRankPosition[] = sortedUsersWithRankPosition.slice(
    firstUsernIndex,
    lastUserIndex,
  );
  const [user] = useAuthState(authService.getAuth());
  const navigate = useNavigate();
  const redirectToProfile = (groupUser: UsersWithRankPosition) => {
    if (user?.email === groupUser.email) {
      navigate("/team-jo-project-4/my-exercises");
    } else {
      navigate(`/team-jo-project-4/user-exercises/${groupUser.uid}`);
    }
  };

  const rankingTable: JSX.Element[] = currentRankPositions.map((groupUser) => {
    return (
      <GridLine key={groupUser.uid}>
        <GridChild>
          {groupUser.rankPosition}
        </GridChild>

        <UserGridChild onClick={() => { redirectToProfile(groupUser); }}>
          {groupUser.name} {groupUser.surname}
        </UserGridChild>

        <GridChild>
          {groupUser.score}
        </GridChild>

        <GridChild>
          {new Date(groupUser.lastActivity).toLocaleDateString()}
        </GridChild>
      </GridLine>
    );
  });

  return (
    <>
      <GridContainer>
        <GridLine>
          <GridHeader>Rank position</GridHeader>
          <GridHeader>Full name</GridHeader>
          <GridHeader>Score</GridHeader>
          <GridHeader>Last activity</GridHeader>
        </GridLine>
        {rankingTable}
        {
          usersPerPage > currentRankPositions.length
          && (
            <EmptyGridLine lines={usersPerPage - currentRankPositions.length}>
              <GridChild />
              <GridChild />
              <GridChild />
              <GridChild />
            </EmptyGridLine>
          )
        }
      </GridContainer>
      {
        usersPerPage <= sortedUsersWithRankPosition.length
        && (
          <RankingTablePagination
            usersPerPage={usersPerPage}
            numberOfAllUsers={sortedUsersWithRankPosition.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )
      }

    </>
  );
};

export default RankingTable;
