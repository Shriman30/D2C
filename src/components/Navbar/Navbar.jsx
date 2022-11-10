import React from "react";
import {Link} from 'react-scroll'
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <header><img src={require("./D2C Prototype[947].png")} alt="" /></header>
        <div className="menu-btn">
        {/* Implement css for menu button when window size is not wide enough */}
        </div>
        <div className="nav">
          <div className="nav-items">
            {/* Need to refactor this using Link to and react-scroll */}
              {/* <Route path="Home" index element={<Home/>}>Home</Route> */}
            <Link className="link" to="home" spy={true} smooth={true} offset={10} duration={700}>Home</Link>
            <Link className="link" to="upcomingEvents" spy={true} smooth={true} offset={1} duration={700}>Upcoming Events</Link>
            <Link className="link" to="aboutUs" spy={true} smooth={true} offset={5} duration={700}>About Us</Link>
            <Link className="link"  to="contactUs" spy={true} smooth={true} offset={5} duration={700}>Contact Us</Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
