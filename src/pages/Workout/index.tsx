import { useContext } from "react";
import DrawForm from "../../components/DrawForm";
import { ModalContext } from "../../context/ModalContextProvider";
import { Container, Exercise, H3, Tiles } from "./style";

function Workout() {
  const modalContextValue = useContext(ModalContext);

  return (
    <Container>
      <Tiles>
        <Exercise>
          <H3>List of all exercises</H3>
        </Exercise>
        <Exercise
          onClick={() => modalContextValue.setDisplayedComponent(<DrawForm />)}
        >
          <H3>Draw exercises</H3>
        </Exercise>
      </Tiles>
    </Container>
  );
}

export default Workout;
