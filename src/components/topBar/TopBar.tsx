import React from "react";
import "./TopBar.scss";
import Avatar from "@mui/material/Avatar";
import { stringAvatar } from "../../utils/helpers/helperFunctions";

export default function TopBar() {
  return (
    <>
      <header className="topbar-container">
        <div className="topbar-cluster-container">
          <div className="topbar-search"></div>
          <div className="topbar-role"></div>
          <div className="topbar-notifications"></div>
          <div className="topbar-user">
            <Avatar {...stringAvatar("Dominick Nitecki")} />
          </div>
        </div>
      </header>
    </>
  );
}
