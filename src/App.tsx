import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/themes/theme";
import AppContainer from "./components/appContainer/AppContainer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="app">
          <div className="app-container">
            <Routes>
              <Route path="/*" element={<AppContainer />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
