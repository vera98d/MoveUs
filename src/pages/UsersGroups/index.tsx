import BackgroundContainer from "../../components/BackgroundContainer/styles";
import { Header } from "../../components/Typography/styles";
import { Tile, TileContainer, TileContent } from "./styles";
import { Link } from "react-router-dom";
import { groups, user } from "./mockedData";

const UsersGroups = (): JSX.Element => {
  const usersGroups: (JSX.Element | undefined)[] = groups.map((group) => {
    if (group.owner === user.id) {
      return (
        <Link to={`/groups/${group.id}`} key={group.id}>
          <Tile img={group.img}>
            <TileContent>
              {group.name}
            </TileContent>
          </Tile>
        </Link>
      );
    }
  });

  const groupsUserBelongsTo: (JSX.Element | undefined)[] = groups.map((group) => {
    if (group.id in user.groups && group.owner !== user.id) {
      return (
        <Link to={`/groups/${group.id}`} key={group.id}>
          <Tile img={group.img}>
            <TileContent>
              {group.name}
            </TileContent>
          </Tile>
        </Link>
      );
    }
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
        {usersGroups}
      </TileContainer>
      <Header>The groups I belong to</Header>
      <TileContainer>
        {groupsUserBelongsTo}
      </TileContainer>
    </BackgroundContainer >

  );
};

export default UsersGroups;
