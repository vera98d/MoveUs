import { ActivityTile, Container, GroupsTile, H3, RankTile, Tiles, WorkoutTile, Wrapper } from "./style";

function Home() {
  return (
    <Container>
      <Wrapper>
        <Tiles>
          <RankTile>
            <H3>
              Overall ranking
            </H3>
          </RankTile>
          <GroupsTile>
            <H3>
              Groups
            </H3>
          </GroupsTile>
          <ActivityTile>
            <H3>
              Activity
            </H3>
          </ActivityTile>
        </Tiles>
        <Tiles>
          <WorkoutTile>
            <H3>
              Workout
            </H3>
          </WorkoutTile>
        </Tiles>
      </Wrapper>
    </Container>
  );
}

export default Home;
