import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import Login from "./index";

jest.mock("firebase/auth", () => ({
  getAuth: () => {}
}));

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: () => ([])
}));

describe("Login", () => {
    test("matches snapshot", async () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Router>
            <Login />
          </Router>
        </ThemeProvider>
      );
      expect(container).toMatchSnapshot();
    });

    test('render email input', () => {
      render(
      <ThemeProvider theme={theme}>
        <Router>
          <Login />
        </Router>
      </ThemeProvider>
      );
     
      const inputEl = screen.getByTestId("email-input");
      expect(inputEl).toBeInTheDocument();
      expect(inputEl).toHaveAttribute("type", "email");
    });

    test('render password input', () => {
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <Login />
          </Router>
        </ThemeProvider>
      );
       
      const inputEl = screen.getByTestId("password-input");
      expect(inputEl).toBeInTheDocument();
      expect(inputEl).toHaveAttribute("type", "password");
    });
});