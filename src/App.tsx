import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GroupRanking from "./pages/GroupRanking";
import UsersGroups from "./pages/UsersGroups";
import Home from "./pages/Home";
import Auth from "./components/Auth";
import MyUserExercises from "./pages/MyUserExercises";
import UsersHistory from "./pages/UsersExercises";
import Workout from "./pages/Workout";

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
              <Home />
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
          path="workout"
          element={(
            <Auth restricted>
              <Workout />
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
          path="MyUserExercises"
          element={
            <MyUserExercises />
          }
        />
        <Route
          path="UsersExercises"
          element={
            <UsersHistory />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
