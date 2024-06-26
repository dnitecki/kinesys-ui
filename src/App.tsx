import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import AppContainer from "./components/appContainer/AppContainer";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-container">
          <Routes>
            <Route path="sign-in" element={<Login />} />
            <Route
              path="/"
              element={<Navigate to="sign-in" replace={true} />}
            />
            <Route path="/*" element={<AppContainer />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
