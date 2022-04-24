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
import userService from "../../services/userService";

function AddActivity() {
  const [user] = useAuthState(authService.getAuth());
  const { register, handleSubmit,
    setValue, getValues, formState: { errors } } = useForm<Activity>();
  const onSubmit: SubmitHandler<Activity> = (data) => {
    const activityID : Promise<string | undefined> = activityService.insert(data);
    activityID.then((d) => {
      userService.updateUser(user!.uid, getValues("score"), getValues("date"), undefined, undefined, d);
    });
    userService.updateUser(user!.uid, getValues("score"), getValues("date"), undefined, undefined, data.id);
  };

  const onSubmitError: SubmitHandler<any> = (data) => console.log(data, errors);
  const [exercisesState, setExercisesState] = useState<any>([]);
  let selectedExercise: Exercise;

  useEffect(() => {
    exerciseService.getAll().then((data) => setExercisesState(data));
  }, []);

  function convertToSeconds(time: string): number {
    const t = time.split(":");
    const hours = t[0] as unknown;
    const minutes = t[1] as unknown;
    const convertedSeconds = (hours as number) * 60 * 60 + (minutes as number) * 60;
    return convertedSeconds;
  }

  function handleExerciseChange(event: any) {
    exercisesState.forEach((element: Exercise) => {
      if (element.name === event.target.value) {
        selectedExercise = element;
      }
    });
    const durationSeconds: number = convertToSeconds(getValues("duration"));
    if (selectedExercise.weight && getValues("duration")) {
      setValue("score", selectedExercise.weight * durationSeconds);
    }
  }

  function handleDurationChange(event: any) {
    const durationSeconds: number = convertToSeconds(event.target.value);
    if (selectedExercise && event.target.value) {
      setValue("score", selectedExercise.weight * durationSeconds);
    }
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
        <FormField>
          <Label>Select exercise.</Label>
          <select
            {...register("exercise", { required: true })}
            onChange={handleExerciseChange}
          >
            <option value=""> </option>
            { exercisesState.map((e: any) => {
              return <option value={e.name}>{e.name}, weight: {e.weight}</option>;
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
            onChange={handleDurationChange}
          />
          <FormFieldError>
            {errors.exercise?.type === "required" && "Please enter duration of your activity."}
          </FormFieldError>
        </FormField>
        <FormField>
          <input readOnly {...register("score", { required: true })} />
        </FormField>
        <Button>Submit activity</Button>
      </Form>
    </Wrapper>
  );
}

export default AddActivity;
