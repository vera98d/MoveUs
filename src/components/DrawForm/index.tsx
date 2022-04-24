import { useContext } from "react";
import { Button, Form, FormFieldError } from "../Form/styles";
import { Header } from "../Modal/style";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../context/ModalContextProvider";
import { Container, NumberInput } from "./style";

type FormFields = {
  exercisesCount: number
};

function DrawForm() {
  const modalContextValue = useContext(ModalContext);
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    navigate(`/team-jo-project-4/draw-exercises/${data.exercisesCount}`);
    modalContextValue.setDisplayedComponent(null);
  };

  return (
    <Container>
      <Header>Enter the number of exercises</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <NumberInput
          type="number"
          {...register("exercisesCount", {
            required: true,
            min: 1,
            max: 20,
          })}
        />
        <FormFieldError>
          {errors.exercisesCount?.type === "required" && "Let's do some exercises! Enter the number"}
          {errors.exercisesCount?.type === "min" && "Do at least one exercise"}
          {errors.exercisesCount?.type === "max" && "Hold on buddy! Don't strain yourself so much."}
        </FormFieldError>
        <Button>Draw</Button>
      </Form>
    </Container>
  );
}

export default DrawForm;