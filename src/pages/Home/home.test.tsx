import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import HomePage from ".";
import { theme } from "../../styles";
import { waitFor } from "@testing-library/react";

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
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <HomePage />
          </Router>
        </ThemeProvider>
      );
  
      const tileOne = screen.queryByText("Overall ranking");
      waitFor(() => expect(expect(tileOne).toBeInTheDocument()));
    });

    test('Second tile should show "Groups"', () => {
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <HomePage />
          </Router>
        </ThemeProvider>
      );
  
      const tileTwo = screen.queryByText("Groups");
      waitFor(() => expect(expect(tileTwo).toBeInTheDocument()));
    });

    test('Third tile should show "Activity"', () => {
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <HomePage />
          </Router>
        </ThemeProvider>
      );
  
      const tileThree = screen.queryByText("Activity");
      waitFor(() => expect(expect(tileThree).toBeInTheDocument()));
    });

    test('Fourth tile should show "Workout"', () => {
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <HomePage />
          </Router>
        </ThemeProvider>
      );
  
      const tileFour = screen.queryByText("Workout");
      waitFor(() => expect(expect(tileFour).toBeInTheDocument()));
    });

    test("includes images", () => {
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <HomePage />
          </Router>
        </ThemeProvider>
      );
  
      const image = screen.findAllByRole("img");
      waitFor(() => expect(image).toBeInTheDocument());
    });
});