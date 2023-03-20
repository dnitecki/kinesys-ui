import React from "react";
import "./TopBar.scss";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";

export default function TopBar() {
  return (
    <>
      <div className="topbar-container">
        <div className="topbar-content">
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              variant="standard"
            />
          </Box>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </div>
    </>
  );
}
