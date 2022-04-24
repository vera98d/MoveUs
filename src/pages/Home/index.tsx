import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";
import { ActivityTile, Container, GroupsTile, H3, RankTile, Tiles, WorkoutTile, Wrapper } from "./style";

function HomePage() {
  const navigate = useNavigate();
  const { user, isLoading } = useContext(UserContext);

  if (isLoading || !user) {
    return null;
  }

  return (
    <Container>
      <Wrapper>
        <Tiles>
          <RankTile onClick={() => navigate("/team-jo-project-4/overall-ranking")}>
            <H3>
              Overall ranking
            </H3>
          </RankTile>
          <GroupsTile onClick={() => navigate("/team-jo-project-4/groups")}>
            <H3>
              Groups
            </H3>
          </GroupsTile>
          <ActivityTile onClick={() => navigate("/team-jo-project-4/my-exercises")}>
            <H3>
              Activity
            </H3>
          </ActivityTile>
        </Tiles>
        <Tiles>
          <WorkoutTile onClick={() => navigate("/team-jo-project-4/workout")}>
            <H3>
              Workout
            </H3>
          </WorkoutTile>
        </Tiles>
      </Wrapper>
    </Container>
  );
}

export default HomePage;
