import React from 'react';
import './style.css';
// import { FontAwesome } fro
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-wrapper">
          <span className="logo">Platform Launch</span>
        </div>
        <div className="add-task-wrapper">
          <p className="add-task">+ Add New Task</p>
          <FontAwesomeIcon className="add-task-icon" icon={faEllipsisV}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar