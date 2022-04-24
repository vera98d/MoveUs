import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundContainer from "../../components/BackgroundContainer/styles";
import { Header } from "../../components/Typography/styles";
import { Tile, TileContainer, TileContent } from "./styles";
import groupRankingService from "../../services/groupRankingService";
import { Group, User } from "../../interfaces/dbData";
import { useAuthState } from "react-firebase-hooks/auth";
import authService from "../../services/authService";
import userService from "../../services/userService";

const UsersGroups = (): JSX.Element => {
  const [usersOwnedGroups, setUsersOwnedGroups] = useState<Group[]>([]);
  const [groupsUserBelongsTo, setGroupsUserBelongsTo] = useState<Group[]>([]);
  const [currentUserInfo, setCurrentUserInfo] = useState<User>({});
  const [currentUser] = useAuthState(authService.getAuth());
  console.log(usersOwnedGroups)
  useEffect(() => {
    userService.getUser(currentUser!.uid)
      .then((data) => {
        setCurrentUserInfo(data);
        groupRankingService.getUsersOwnedGroups(data)
          .then((usersGroups) => setUsersOwnedGroups(usersGroups));
      });



    groupRankingService.getGroupsUserBelongsTo()
      .then((data) => setGroupsUserBelongsTo(data));

    // console.log("belongs", groupsUserBelongsTo, "owns", usersOwnedGroups);
    // console.log("uid", currentUser!.uid)
  }, []);

  const usersGroupsTiles: JSX.Element[] = usersOwnedGroups.map((group: Group) => {
    return (
      <Link to={`/team-jo-project-4/groups/${group.uid}`} key={group.uid}>
        <Tile img={group.imageUrl}>
          <TileContent>
            {group.name}
          </TileContent>
        </Tile>
      </Link>
    );
  });

  const groupsUserBelongsToTiles: JSX.Element[] = groupsUserBelongsTo.map((group: Group) => {
    return (
      <Link to={`/team-jo-project-4/groups/${group.uid}`} key={group.uid}>
        <Tile img={group.imageUrl}>
          <TileContent>
            {group.name}
          </TileContent>
        </Tile>
      </Link>
    );
  });

  return (
    <BackgroundContainer>
      <Header>My groups</Header>
      <TileContainer>
        <Tile>
          <TileContent>
            Create new group
          </TileContent>
        </Tile>
        {usersGroupsTiles}
      </TileContainer>
      <Header>The groups I belong to</Header>
      <TileContainer>
        {groupsUserBelongsToTiles}
      </TileContainer>
    </BackgroundContainer>

  );
};

export default UsersGroups;
