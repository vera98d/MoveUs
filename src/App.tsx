import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Auth from "./components/Auth";
import MyUserExercises from "./pages/MyUserExercises";
import UsersHistory from "./pages/UsersExercises";
import OverallRanking from "./pages/OverallRanking";
import Workout from "./pages/Workout";
import UsersGroups from "./pages/UsersGroups";
import GroupRanking from "./pages/GroupRanking";
import MyWorkout from "./pages/MyWorkout";

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
          path="overall-ranking"
          element={(
            <Auth restricted>
              <OverallRanking />
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
          path="my-exercises"
          element={(
            <Auth restricted>
              <MyUserExercises />
            </Auth>
          )}
        />
        <Route
          path="user-exercises/:uid"
          element={(
            <Auth restricted>
              <UsersHistory />
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
            <Auth restricted><GroupRanking /></Auth>)}
        />
        <Route
          path="draw-exercises/:exerciseCount"
          element={(
            <Auth restricted><MyWorkout /></Auth>)}
        />
      </Route>
    </Routes>
  );
}

export default App;
