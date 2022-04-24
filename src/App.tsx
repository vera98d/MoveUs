import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GroupRanking from "./pages/GroupRanking";
import UsersGroups from "./pages/UsersGroups";
import HomePage from "./pages/HomePage";
import Auth from "./components/Auth";
import MyUserExercises from "./pages/MyUserExercises";
import UsersHistory from "./pages/UsersExercises";

function App() {
  return (
    <Routes>
      <Route path="/team-jo-project-4">
        <Route
          index
          element={(
            <Auth>
              <Login />
            </Auth>
          )}
        />
        <Route
          path="register"
          element={(
            <Auth>
              <Register />
            </Auth>
          )}
        />
        <Route
          path="home"
          element={(
            <Auth restricted>
              <HomePage />
            </Auth>
          )}
        />
        <Route
          path="groups"
          element={(
            <Auth restricted>
              <UsersGroups />
            </Auth>
          )}
        />
        <Route
          path="groups/:groupId"
          element={(
            <Auth restricted>
              <GroupRanking />
            </Auth>
          )}
        />
        <Route
          path="myUserExercises"
          element={(
            <Auth restricted>
              <MyUserExercises />
            </Auth>
          )}
        />
        <Route
          path="usersExercises"
          element={(
            <Auth restricted>
              <UsersHistory />
            </Auth>
          )}
        />
      </Route>
    </Routes>
  );
}

export default App;
