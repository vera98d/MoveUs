import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundContainer from "../../components/BackgroundContainer/styles";
import { Header } from "../../components/Typography/styles";
import { Tile, TileContainer, TileContent } from "./styles";
import groupRankingService from "../../services/groupRankingService";
import { Group } from "../../interfaces/dbData";
import { useAuthState } from "react-firebase-hooks/auth";
import authService from "../../services/authService";
import userService from "../../services/userService";
import Spinner from "../../components/Auth/style";
import { ModalContext } from "../../context/ModalContextProvider";
import GroupForm from "../../components/GroupForm";

const UsersGroups = (): JSX.Element => {
  const { setDisplayedComponent } = useContext(ModalContext);
  const [usersOwnedGroups, setUsersOwnedGroups] = useState<Group[]>([]);
  const [groupsUserBelongsTo, setGroupsUserBelongsTo] = useState<Group[]>([]);
  const [currentUser] = useAuthState(authService.getAuth());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    userService.getUser(currentUser!.uid)
      .then((data) => {
        groupRankingService.getUsersOwnedGroups(data)
          .then((groups) => setUsersOwnedGroups(groups));

        groupRankingService.getGroupsUserBelongsTo(data)
          .then((groups) => setGroupsUserBelongsTo(groups)).then(() => setLoading(false));
      });
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
      <Header>My groups</Header>
      <TileContainer>
        <Tile onClick={() => setDisplayedComponent(<GroupForm />)}>
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
