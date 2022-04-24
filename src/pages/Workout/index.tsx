import { Container, Exercise, H3, Tiles } from "./style";
import exerciseService from "../../services/exerciseService";

function Workout() {
  exerciseService.getRandomExercises(0);
  return (
    <Container>
      <Tiles>
        <Exercise>
          <H3>
            List of all exercises
          </H3>
        </Exercise>
        <Exercise>
          <H3>
            Draw exercises
          </H3>
        </Exercise>
      </Tiles>
    </Container>
  );
}

export default Workout;