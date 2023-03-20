import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import OverviewDashboard from "./pages/overviewDashboard/OverviewDashboard";
import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-container">
          <TopBar />
          <div className="app-content">
            <SideBar />
            <div className="app-content-main">
              <Routes>
                <Route path="/" element={<OverviewDashboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
