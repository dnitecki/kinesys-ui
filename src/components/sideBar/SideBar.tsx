import React from "react";
import "./SideBar.scss";
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
        <ul className="sidebar-list">
          {menuItems.map((item, index) => (
            <li className="sidebar-item" key={index}>
              <Link className="sidebar-button" to={item.url}>
                <div className="sidebar-item-icon">
                  {<item.icon sx={{ fontSize: 30 }} />}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
