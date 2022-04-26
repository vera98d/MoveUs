import RankingTable from "../../components/RankingTable";
import { User } from "../../interfaces/dbData";
import BackgroundContainer from "../../components/BackgroundContainer/styles";
import { Header, Text } from "../../components/Typography/styles";
import { useParams } from "react-router-dom";
import groupRankingService from "../../services/groupRankingService";
import { useEffect, useState } from "react";
import Spinner from "../../components/Auth/style";

const GroupRanking = (): JSX.Element => {
  const { groupId } = useParams();
  const [groupMembersInfo, setGroupMembersInfo] = useState<User[]>([]);
  const [group, setGroup] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (groupId) {
      setLoading(true);
      groupRankingService
        .getGroupInfoById(groupId)
        .then((data) => setGroup(data));
      groupRankingService
        .getGroupMembersInfo(groupId)
        .then((data) => {
          setGroupMembersInfo(data);
        })
        .then(() => setLoading(false));
    }
  }, []);

  if (!group) {
    return <div>Group not found</div>;
  }
  if (loading) {
    return (
      <Spinner>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </Spinner>
    );
  }
  return (
    <BackgroundContainer>
      <Header>{group.name}</Header>
      <Text>{group.description}</Text>
      <RankingTable groupUsers={groupMembersInfo} />
    </BackgroundContainer>
  );
};

export default GroupRanking;
