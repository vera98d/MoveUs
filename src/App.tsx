import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
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
          path="user-exercises"
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
