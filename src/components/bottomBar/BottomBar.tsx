import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { menuItems } from "../navContainer/menuItems";
import { Link } from "react-router-dom";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { sm: "none", xs: "flex" },
        justifyContent: "center",
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {menuItems.map((item, index) => (
          <BottomNavigationAction
            component={Link}
            to={item.url}
            key={index}
            label={item.text}
            icon={<item.icon />}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
