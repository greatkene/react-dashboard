import React from "react";
import { FaLongArrowAltUp, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import { sidebarLink } from "../../utils/constants";
import "./Sidebar.css";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar_title">
        <div className="sidebar_img">
          <img src={logo} alt="logo" />
          <h1>Great</h1>
        </div>
        <FaTimes
          className="icon"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        />
      </div>

      <div className="sidebar_menu">
        {sidebarLink.map((item) => {
          return (
            <div className="sidebar_link">
              <div className="icon">{item.icon}</div>
              <Link to={item.link}>{item.name}</Link>
            </div>
          );
        })}
        <div>
          <div className="sidebar_logout" to="/">
            <Link to="/">
              <FaLongArrowAltUp size={22} className="icon" /> Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
