/* eslint-disable no-self-assign */
import { SubmitHandler, useForm } from "react-hook-form";
import {
  AccountText,
  Button, Container, Form, FormField, FormFieldError, Label, Img, Input, StyledLink, Wrapper,
} from "../Form/styles";
import { Activity, Exercise } from "../../interfaces/dbData";
import authService from "../../services/authService";
import { useAuthState } from "react-firebase-hooks/auth";
import activityService from "../../services/activityService";
import exerciseService from "../../services/exerciseService";
import { useEffect, useState } from "react";

type ActivityField = Omit<Activity, "score">;

function AddActivity() {
  const [user] = useAuthState(authService.getAuth());
  const { register, handleSubmit, formState: { errors } } = useForm<ActivityField>();
  const onSubmit: SubmitHandler<ActivityField> = (data) => activityService
    .insert(data, user!.uid);
  const onSubmitError: SubmitHandler<any> = (data) => console.log(data, errors);
  const [exercisesState, setExercisesState] = useState<any>([]);

  useEffect(() => {
    exerciseService.getAll().then((data) => setExercisesState(data));
  }, []);

  console.log("state", exercisesState);

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
        <Button>Login</Button>
      </Form>
    </Wrapper>
  );
}

export default AddActivity;
