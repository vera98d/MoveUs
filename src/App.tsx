import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route
        index
        element={(
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit
                {" "}
                <code>src/App.tsx</code>
                {" "}
                and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
      )}
      />
      <Route
        path="register"
        element={
          <Register />
      }
      />
      <Route
        path="login"
        element={
          <Login />
        }
      />

    </Routes>
  );
}

export default App;
