import { FC, useState } from "react";
import { GridContainer, GridLine, GridChild, GridHeader, EmptyGridLine } from "./styles";
import { User } from "../../interfaces/dbData";
import RankingTablePagination from "../RankingTablePagination";

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
  const [usersPerPage] = useState(4);

  const lastUserIndex = currentPage * usersPerPage;
  const firstUsernIndex = lastUserIndex - usersPerPage;

  const currentRankPositions: UsersWithRankPosition[] = sortedUsersWithRankPosition.slice(
    firstUsernIndex,
    lastUserIndex,
  );

  const rankingTable: JSX.Element[] = currentRankPositions.map((groupUser) => {
    return (
      <GridLine key={groupUser.uid}>
        <GridChild>
          {groupUser.rankPosition}
        </GridChild>

        <GridChild>
          {groupUser.name} {groupUser.surname}
        </GridChild>

        <GridChild>
          {groupUser.score}
        </GridChild>

        <GridChild>
          {groupUser.lastActivity.toLocaleDateString()}
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
