import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import AddActivity from ".";

jest.mock("../../services/activityService", () => ({
  getFirestore: () => {},
}));

jest.mock("../../services/userService", () => ({
  getFirestore: () => {},
}));

jest.mock("firebase/auth", () => ({
  getAuth: () => {},
}));

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: () => ([]),
}));

test("is rendering expected elements", () => {
  act(() => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <AddActivity />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});

it("Renders all elements", () => {
  act(() => {
    render(
      <ThemeProvider theme={theme}>
        <AddActivity />
      </ThemeProvider>,
    );
  });

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

afterAll(() => setTimeout(() => process.exit(), 1000));