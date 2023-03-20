import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import OverviewDashboard from "./pages/overviewDashboard/OverviewDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OverviewDashboard />} />
      </Routes>
    </>
  );
}

export default App;
