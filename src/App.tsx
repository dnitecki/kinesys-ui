import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import OverviewDashboard from "./pages/overviewDashboard/OverviewDashboard";
import TopBar from "./components/topBar/TopBar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/themes/theme";
import BottomBar from "./components/bottomBar/BottomBar";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="app">
          <div className="app-container">
            <TopBar />
            <BottomBar />
            <div className="app-content-main">
              <Routes>
                <Route path="/" element={<OverviewDashboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
