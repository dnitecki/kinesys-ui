import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import OverviewDashboard from "../../pages/overviewDashboard/OverviewDashboard";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="dashboard" element={<OverviewDashboard />} />
        <Route path="market" element={<Home />} />
        <Route path="*" element={<Navigate to="dashboard" replace={true} />} />
      </Routes>
    </>
  );
}
