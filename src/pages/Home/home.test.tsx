import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import HomePage from "./index";
import { theme } from "../../styles";
import { waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

jest.mock("firebase/auth", () => ({
  getAuth: () => {}
}));

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: () => ([])
}));

describe("HomePage", () => {
    test("matches snapshot", async () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Router>
            <HomePage />
          </Router>
        </ThemeProvider>
      );
      expect(container).toMatchSnapshot();
    });

    test('First tile should show "Overall ranking"', () => {
      act(() => {
        render(
          <ThemeProvider theme={theme}>
            <Router>
              <HomePage />
            </Router>
          </ThemeProvider>
        );
      });
  
      const tileOne = screen.queryByText("Overall ranking");
      waitFor(() => expect(expect(tileOne).toBeInTheDocument()));
    });

    test('Second tile should show "Groups"', () => {
      act(() => {
        render(
          <ThemeProvider theme={theme}>
            <Router>
              <HomePage />
            </Router>
          </ThemeProvider>
        );
      });
  
      const tileTwo = screen.queryByText("Groups");
      waitFor(() => expect(expect(tileTwo).toBeInTheDocument()));
    });

    test('Third tile should show "Activity"', () => {
      act(() => {
        render(
          <ThemeProvider theme={theme}>
            <Router>
              <HomePage />
            </Router>
          </ThemeProvider>
        );
      });
  
      const tileThree = screen.queryByText("Activity");
      waitFor(() => expect(expect(tileThree).toBeInTheDocument()));
    });

    test('Fourth tile should show "Workout"', () => {
      act(() => {
        render(
          <ThemeProvider theme={theme}>
            <Router>
              <HomePage />
            </Router>
          </ThemeProvider>
        );
      });
  
      const tileFour = screen.queryByText("Workout");
      waitFor(() => expect(expect(tileFour).toBeInTheDocument()));
    });

    test("includes images", () => {
      act(() => {
        render(
          <ThemeProvider theme={theme}>
            <Router>
              <HomePage />
            </Router>
          </ThemeProvider>
        );
      });
  
      const image = screen.findAllByRole("img");
      waitFor(() => expect(image).toBeInTheDocument());
    });
});