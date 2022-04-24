import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import AddActivity from ".";

test("is rendering expected elements", async () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <AddActivity />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});

test("Renders all elements", () => {
  render(
    <ThemeProvider theme={theme}>
      <AddActivity />
    </ThemeProvider>,
  );
  const modalTitle = screen.getByText(/Add/i);
  const selectExerciseText = screen.getByText(/Select exercise/i);
  const selectExerciseInput = screen.getByRole("combobox");
  const enterDateText = screen.getByText(/Enter date of the activity/i);
  const selectDateInput = screen.getByTestId("date");
  const enterDurationText = screen.getByText(/Select duration of the exercise/i);
  const selectDurationInput = screen.getByTestId("time");
  const pointsText = screen.getByText(/Points gained:/i);
  const pointsEdit = screen.getByTestId("score");
  const submitButton = screen.getByText("Submit activity");

  expect(modalTitle).toBeInTheDocument();

  expect(selectExerciseInput).toBeInTheDocument();
  expect(selectExerciseText).toBeInTheDocument();

  expect(enterDateText).toBeInTheDocument();
  expect(selectDateInput).toBeInTheDocument();

  expect(enterDurationText).toBeInTheDocument();
  expect(selectDurationInput).toBeInTheDocument();

  expect(pointsText).toBeInTheDocument();
  expect(pointsEdit).toBeInTheDocument();

  expect(submitButton).toBeInTheDocument();
});

test("validates form properly", async () => {
  render(
    <ThemeProvider theme={theme}>
      <AddActivity />
    </ThemeProvider>,
  );
  const submitButton = screen.getByText("Submit activity");
  const selectDateInput = screen.getByTestId("date") as HTMLInputElement;
  const selectDurationInput = screen.getByTestId("time") as HTMLInputElement;

  userEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText("Please select the activity type.")).toBeInTheDocument();
    expect(screen.getByText("Please select date.")).toBeInTheDocument();
    expect(screen.getByText("Please enter duration of your activity.")).toBeInTheDocument();
  });
  userEvent.type(selectDateInput, "2005-04-02");
  userEvent.type(selectDurationInput, "21:37");

  userEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.queryByText("Please select date.")).not.toBeInTheDocument();
    expect(screen.queryByText("Please enter duration of your activity.")).not.toBeInTheDocument();
  });
});