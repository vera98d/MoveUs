import RankingTable from "../../components/RankingTable";
import { User, Group } from "../../interfaces/dbData";
import BackgroundContainer from "../../components/BackgroundContainer/styles";
import { Header, Text } from "../../components/Typography/styles";
import { useParams } from "react-router-dom";
import { groups, users } from "../UsersGroups/mockedData";

const GroupRanking = (): JSX.Element => {
  const { groupId } = useParams();

  const groupInfo: Group | undefined = groups.find(
    (group) => group.uid === groupId,
  );

  const groupUsers: User[] = users.filter((user) => {
    if (groupInfo && groupInfo.members.includes(user.uid)) {
      return user;
    }
  });

  if (!groupInfo) {
    return <div>Group not found</div>;
  }
  return (
    <BackgroundContainer>
      <Header>
        {groupInfo.name}
      </Header>
      <Text>
        {groupInfo.description}
      </Text>
      <RankingTable groupUsers={groupUsers} />
    </BackgroundContainer>
  );
};

export default GroupRanking;
