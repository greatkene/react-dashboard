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
        <Link to="/">Link 1</Link>
        <Link to="/">Link 2</Link>
        <Link className="active" to="/">
          Link 3
        </Link>
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
