import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-wrapper">
          <span className="logo">Platform Launch</span>
        </div>
        <div className="add-task-wrapper">
          <button className="add-task">+ Add New Task</button>
          <FontAwesomeIcon
            className="add-task-icon"
            icon={faEllipsisVertical}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
