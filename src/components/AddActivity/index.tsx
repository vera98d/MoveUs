import { SubmitHandler, useForm } from "react-hook-form";
import { Header, ModalLabel } from "../Modal/style";
import { ModalContext } from "../../context/ModalContextProvider";
import { Button, Form, FormField, FormFieldError } from "../Form/styles";

import { Activity, Exercise } from "../../interfaces/dbData";
import activityService from "../../services/activityService";
import exerciseService from "../../services/exerciseService";
import { useEffect, useState, useContext } from "react";
import userService from "../../services/userService";
import { DocumentData } from "firebase/firestore";
import { UserContext } from "../../context/UserContextProvider";

function AddActivity() {
  const modalContextValue = useContext(ModalContext);
  const closeModalOnSuccess = () => {
    modalContextValue.setDisplayedComponent(null);
    alert("You've added a new activity!");
  };
  const { user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Activity>();
  const onSubmit: SubmitHandler<Activity> = (data) => {
    const activityID: Promise<string | undefined> = activityService.insert(
      data,
      user!.uid
    );
    activityID.then((d) => {
      userService.updateUser(
        user!.uid,
        getValues("score"),
        getValues("date"),
        undefined,
        undefined,
        d
      );
    });
    userService.updateUser(
      user!.uid,
      getValues("score"),
      getValues("date"),
      undefined,
      undefined,
      data.uid
    );
    closeModalOnSuccess();
  };

  const [exercisesState, setExercisesState] = useState<DocumentData>([]);
  let selectedExercise: Exercise;

  useEffect(() => {
    exerciseService.getAll().then((data) => setExercisesState(data));
  }, []);

  function convertToSeconds(time: string): number {
    const t = time.split(":");
    const hours = t[0] as unknown;
    const minutes = t[1] as unknown;
    const convertedSeconds =
      (hours as number) * 60 * 60 + (minutes as number) * 60;
    return convertedSeconds;
  }

  function handleExerciseChange(event: React.ChangeEvent<HTMLSelectElement>) {
    exercisesState.forEach((element: Exercise) => {
      if (element.name === event.currentTarget.value) {
        selectedExercise = element;
      }
    });
    const durationSeconds: number = convertToSeconds(getValues("duration"));
    if (selectedExercise.weight && getValues("duration")) {
      setValue("score", selectedExercise.weight * durationSeconds);
    }
  }

  function handleDurationChange(event: React.ChangeEvent<HTMLInputElement>) {
    const durationSeconds: number = convertToSeconds(event.target.value);
    if (selectedExercise && event.target.value) {
      setValue("score", selectedExercise.weight * durationSeconds);
    }
  }

  return (
    <>
      <Header>Add activity</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <ModalLabel>Select exercise</ModalLabel>
          <select
            {...register("exercise", { required: true })}
            onChange={handleExerciseChange}
          >
            <option value=""> </option>
            {exercisesState.map((e: Exercise) => {
              return (
                <option key={e.name} value={e.name}>
                  {e.name}, weight: {e.weight}
                </option>
              );
            })}
          </select>
          <FormFieldError>

            {errors.exercise?.type === "required" && "Please select the activity type."}
          </FormFieldError>
        </FormField>
        <FormField>
          <ModalLabel>Enter date of the activity</ModalLabel>
          <input
            data-testid="date"
            type="date"
            {...register("date", { required: true })}
          />
          <FormFieldError>
            {errors.date?.type === "required" && "Please select date."}
          </FormFieldError>
        </FormField>
        <FormField>
          <ModalLabel>Select duration of the exercise</ModalLabel>
          <input
            data-testid="time"
            type="time"
            {...register("duration", { required: true })}
            onChange={handleDurationChange}
          />
          <FormFieldError>
            {errors.duration?.type === "required" && "Please enter duration of your activity."}
          </FormFieldError>
        </FormField>
        <ModalLabel>Points gained:</ModalLabel>
        <FormField>
          <input
            readOnly
            {...register("score", { required: true })}
            data-testid="score"
          />
        </FormField>
        <Button>Submit activity</Button>
      </Form>
    </>
  );
}

export default AddActivity;
