import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Auth from "./components/Auth";

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
      </Route>
    </Routes>
  );
}

export default App;
