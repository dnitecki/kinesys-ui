import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Market from "../../pages/market/Market";
import Teams from "../../pages/teams/Teams";
import Catalog from "../../pages/catalog/Catalog";
import Tasks from "../../pages/tasks/Tasks";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="market" element={<Market />} />
        <Route path="teams" element={<Teams />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="/" element={<Navigate to="dashboard" replace={true} />} />
      </Routes>
    </>
  );
}
