import RankingTable from "../../components/RankingTable";
import { User, Group } from "../../interfaces/dbData";
import BackgroundContainer from "../../components/BackgroundContainer/styles";
import { Header, Text } from "../../components/Typography/styles";
import { useParams } from "react-router-dom";
import { groups, users } from "../UsersGroups/mockedData";
import groupRankingService from "../../services/groupRankingService";
import { useEffect, useState } from "react";

const GroupRanking = (): JSX.Element => {
  const { groupId } = useParams();
  const [groupMembersInfo, setGroupMembersInfo] = useState<User[]>([]);
  const [group, setGroup] = useState<Group>({});

  useEffect(() => {
    if (groupId) {
      groupRankingService.getGroupMembersInfo(groupId).then((data) => {
        setGroupMembersInfo(data);
        console.log("membersInfo", data);
      });
    }
  });

  const groupInfo: Group | undefined = groups.find(
    (groupI) => groupI.uid === groupId,
  );

  // const groupUsers: User[] = users.filter((user) => {
  //   if (groupInfo && groupInfo.members.includes(user.uid)) {
  //     return user;
  //   }
  // });

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
      <RankingTable groupUsers={groupMembersInfo} />
    </BackgroundContainer>
  );
};

export default GroupRanking;
