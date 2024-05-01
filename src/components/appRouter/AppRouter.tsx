import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Market from "../../pages/market/Market";
import Teams from "../../pages/teams/Teams";
import Catalog from "../../pages/catalog/Catalog";
import Tasks from "../../pages/tasks/Tasks";
import Profile from "../../pages/profile/Profile";
import Settings from "../../pages/settings/Settings";
import Login from "../../pages/login/Login";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="market" element={<Market />} />
        <Route path="teams" element={<Teams />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="/" element={<Navigate to="dashboard" replace={true} />} />
      </Routes>
    </>
  );
}
