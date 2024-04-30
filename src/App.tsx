import "./App.scss";
import { Route, Routes } from "react-router-dom";
import AppContainer from "./components/appContainer/AppContainer";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-container">
          <Routes>
            <Route path="/*" element={<AppContainer />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
