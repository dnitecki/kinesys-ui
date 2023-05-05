import React from "react";
import "./TopBar.scss";
import Avatar from "@mui/material/Avatar";
import { stringAvatar } from "../../utils/helpers/helperFunctions";

const user = {
  name: "Dominick Nitecki",
  role: "CEO",
};

export default function TopBar() {
  return (
    <>
      <header className="topbar-container">
        <div className="topbar-cluster-container">
          <div className="topbar-search"></div>
          <div className="topbar-role"></div>
          <div className="topbar-notifications"></div>
          <div className="topbar-user">
            <Avatar {...stringAvatar(user.name)} />
            <div className="topbar-user-text">
              <p>{user.name}</p>
              <p>{user.role}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
