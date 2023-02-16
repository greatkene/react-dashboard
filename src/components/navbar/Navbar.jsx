import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaClock, FaSearch } from "react-icons/fa";

import "./Navbar.css";
import avatar from "../../assets/img/avatar.png";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar}>
        <FaBars className="icon" />
      </div>
      <div className="navbar_left">
        <h3>Hello Admin</h3>
      </div>
      <div className="navbar_right">
        <Link to="/">
          <FaSearch className="icon" />
        </Link>
        <Link to="/">
          <FaClock className="icon" />
        </Link>
        <Link to="/">
          <img width="30px" src={avatar} alt="avatar" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
