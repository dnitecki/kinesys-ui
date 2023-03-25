import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import OverviewDashboard from "./pages/overviewDashboard/OverviewDashboard";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/themes/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="app">
          <div className="app-container">
            <Routes>
              <Route path="/" element={<OverviewDashboard />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
