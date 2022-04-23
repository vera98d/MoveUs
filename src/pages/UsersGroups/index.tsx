import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackgroundContainer from "../../components/BackgroundContainer/styles";
import { Header } from "../../components/Typography/styles";
import { Tile, TileContainer, TileContent } from "./styles";
import { groups, user } from "./mockedData";
import { ModalContext } from "../../context/ModalContextProvider";
import GroupForm from "../../components/GroupForm";

const UsersGroups = (): JSX.Element => {
  const usersGroups: (JSX.Element | undefined)[] = groups.map((group) => {
    if (group.owner === user.uid) {
      return (
        <Link to={`/team-jo-project-4/groups/${group.uid}`} key={group.uid}>
          <Tile img={group.imageUrl}>
            <TileContent>
              {group.name}
            </TileContent>
          </Tile>
        </Link>
      );
    }
  });

  const groupsUserBelongsTo: (JSX.Element | undefined)[] = groups.map((group) => {
    if (group.uid in user.groups && group.owner !== user.uid) {
      return (
        <Link to={`/team-jo-project-4/groups/${group.uid}`} key={group.uid}>
          <Tile img={group.imageUrl}>
            <TileContent>
              {group.name}
            </TileContent>
          </Tile>
        </Link>
      );
    }
  });

  const { setDisplayedComponent } = useContext(ModalContext);

  return (
    <BackgroundContainer>
      <Header>My groups</Header>
      <TileContainer>
        <Tile onClick={() => setDisplayedComponent(<GroupForm />)}>
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
    </BackgroundContainer>

  );
};

export default UsersGroups;
