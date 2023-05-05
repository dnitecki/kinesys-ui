import React from "react";
import "./SideBar.scss";
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";
import KinesysIcon from "../../icons/KinesysIcon.svg";

export default function SideBar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-icon-container">
          <img className="sidebar-icon" src={KinesysIcon} alt="Kinesys Icon" />
        </div>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                component={Link}
                to={item.url}
                sx={{
                  width: "auto",
                  alignContent: "center",
                  justifyContent: "center",
                  color: "#4D4D4D",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    color: "#4D4D4D",
                  }}
                >
                  {<item.icon />}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}
