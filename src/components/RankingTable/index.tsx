import { FC } from "react";
import { GridContainer, GridLine, GridChild, GridHeader } from "./styles";
import { User } from "../../interfaces/dbData";

interface Props {
  groupUsers: User[]
}

const RankingTable: FC<Props> = ({ groupUsers }) => {

  const sortedUsers: User[] = groupUsers.sort((a, b) => b.score - a.score);

  const rankingTable: JSX.Element[] = sortedUsers.map((groupUser, index) => {
    return (
      <GridLine key={groupUser.id}>
        <GridChild>
          {index + 1}
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
    <GridContainer>
      <GridLine>
        <GridHeader>Rank position</GridHeader>
        <GridHeader>Full name</GridHeader>
        <GridHeader>Score</GridHeader>
        <GridHeader>Last activity</GridHeader>
      </GridLine>
      {rankingTable}
    </GridContainer>
  );
};

export default RankingTable;
