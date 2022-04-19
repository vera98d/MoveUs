import { SubmitHandler, useForm } from "react-hook-form";
import {
  AccountText,
  Button, Container, Form, FormField, FormFieldError, Label, Img, Input, StyledLink, Wrapper,
} from "../Form/styles";
import { Activity } from "../../interfaces/dbData";

function AddActivity() {
  const { register, handleSubmit, formState: { errors } } = useForm<Activity>();
  const onSubmit: SubmitHandler<Activity> = (data) => console.log(data, errors);
  const onSubmitError: SubmitHandler<any> = (data) => console.log(data, errors);

  const exercises: string[] = ["running", "cycling", "walking"];
  // TODO get these from DB

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
        <FormField>
          <Label>Select exercise.</Label>
          <select {...register("exercise", { required: true, minLength: 3, maxLength: 20 })}>
            { exercises.map((e) => {
              return <option value={e}>{e}</option>;
            })}
          </select>
          <FormFieldError>
            {errors.exercise?.type === "required" && "Please select  the activity type"}
          </FormFieldError>
        </FormField>
        <FormField>
        <Label>Enter date of the activity.</Label>
          <input
            type="date"
            {...register("date", { required: true })}
          />
          <FormFieldError>
            {errors.date?.type === "required" && "Please select date"}
          </FormFieldError>
        </FormField>
        <FormField>
          <Label>Select duration of the exercise..</Label>
          <input
            type="time"
            {...register("duration", { required: true })}
          />
          <FormFieldError>
            {errors.exercise?.type === "required" && "Please select  the activity type"}
          </FormFieldError>
        </FormField>
      </Form>
    </Wrapper>
  );
}

export default AddActivity;
