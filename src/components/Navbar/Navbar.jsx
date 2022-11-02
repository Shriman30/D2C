import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <header><img src="./favicon.ico" alt="" /></header>
        <div className="menu-btn">
        {/* Implement css for menu button when window size is not wide enough */}
        </div>
        <div className="nav">
          <div className="nav-items">
            {/* Need to refactor this using Link to and react-scroll */}
            <a href="#home">Home</a>
            <a href="#upcomingEvents">Upcoming Events</a>
            <a href="#aboutUs">About Us</a>
            <a href="#contactUs">Contact Us</a>
          </div>
        </div>
      </div>
      <hr />
      <p>disconnect to connect</p>
    </div>
  );
};

export default NavBar;
