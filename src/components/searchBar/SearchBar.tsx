import React from "react";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <>
      <div className="search-container">
        <SearchIcon />
        <input placeholder="Search..." type="text" />
      </div>
    </>
  );
}
