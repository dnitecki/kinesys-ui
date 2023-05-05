import React from "react";
import "./SideBar.scss";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";

export default function SideBar() {
  return (
    <div className="sidebar-container">
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
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                }}
              >
                {<item.icon />}
              </ListItemIcon>
              {/* <ListItemText primary={item.text} /> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
