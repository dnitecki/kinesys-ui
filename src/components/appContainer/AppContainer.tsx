import React from "react";
import TopBar from "../topBar/TopBar";
import SideBar from "../sideBar/SideBar";
import AppRouter from "../appRouter/AppRouter";
import "./AppContainer.scss";

export default function AppContainer() {
  return (
    <>
      <SideBar />
      <div className="appcontainer-container">
        <TopBar />
        <div className="appcontainer-content">
          <AppRouter />
        </div>
      </div>
    </>
  );
}
