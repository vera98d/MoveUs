import RankingTable from "../../components/RankingTable";
import { User } from "../../interfaces/dbData";
import { useEffect, useState } from "react";
import BackgroundContainer from "../../components/BackgroundContainer/styles";
import { Header } from "../../components/Typography/styles";
import userService from "../../services/userService";

const OverallRanking = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    userService.getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          alert(err.message);
        }
      });
  }, []);

  return (
    <BackgroundContainer>
      <Header>
        Overall Ranking
      </Header>
      <RankingTable groupUsers={users} />
    </BackgroundContainer>
  );
};

export default OverallRanking;