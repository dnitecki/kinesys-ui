import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import OverviewDashboard from "../../pages/overviewDashboard/OverviewDashboard";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<OverviewDashboard />} />
      </Routes>
    </>
  );
}
