import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import OverallRanking from ".";
import { User } from "../../interfaces/dbData";
import userService from "../../services/userService";
import { theme } from "../../styles";
import { users } from "./mock";

jest.mock("firebase/auth", () => ({
  getAuth: () => {}
}));

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: () => ([])
}));

let orginalGetAll: () => Promise<User[]>;
beforeEach(() => {
  orginalGetAll = userService.getAllUsers;
  userService.getAllUsers = () => Promise.resolve(users);
});

afterEach(() => {
  userService.getAllUsers = orginalGetAll;
});

describe("OverallRanking", () => {
    test("matches snapshot", async () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Router>
            <OverallRanking />
          </Router>
        </ThemeProvider>
      );
      expect(container).toMatchSnapshot();
    });

    test("is rendering all 6 users", async () => {
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <OverallRanking />
          </Router>
        </ThemeProvider>
      );
      expect(users.length).toBe(6);
    });

    test('Header should show "Overall Ranking"', () => {
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <OverallRanking />
          </Router>
        </ThemeProvider>
      );    
      const header = screen.queryByText("Overall Ranking");
      expect(header).toBeInTheDocument();
    });
});
  