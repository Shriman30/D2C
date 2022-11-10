import React from "react";
import { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
import "./Navbar.css";

const NavBar = () => {
  const [selected, setSelected] = useState(-1);

  return (
    <div className="navbar">
      <div className="nav-container">
        <header>
          <img src={require("./D2C Prototype[947].png")} alt="" />
        </header>
        <div className="menu-btn">
          {/* Implement css for menu button when window size is not wide enough */}
        </div>
        <div className="nav">
          <div className="nav-items">
            {/* Link1  for scrolling and Link2 for routing : Need to find a way to make the scroll happen directly. For now, double clicking (sort of) works*/}
            <Link1 to="home" spy={true} smooth={true} offset={-100} duration={700} onClick={() => setSelected(0)}>
              <Link2 className={selected === 0 ? "link active" : "link"} to="home" onClick={() => {setSelected(0)}}>Home</Link2>
            </Link1>
            <Link1 to="upcomingEvents" spy={true} smooth={true} offset={-80} duration={700} onScroll={() => {setSelected(1)}}>
              <Link2 className={selected === 1 ? "link active" : "link"} to="upcomingEvents" onClick={() => {setSelected(1)}}>Upcoming Events</Link2>
            </Link1>
            <Link1 to="aboutUs" spy={true} smooth={true} offset={-125} duration={700} onScroll={() => {setSelected(2)}}>
              <Link2 className={selected === 2 ? "link active" : "link"} to="aboutUs"  onClick={() => {setSelected(2)}}>About Us</Link2>
            </Link1>
            <Link1 to="contactUs" spy={true} smooth={true} offset={-120} duration={700} onScroll={() => {setSelected(3)}}>
              <Link2 className={selected === 3 ? "link active" : "link"} to="contactUs"  onClick={() => {setSelected(3)}}>Contact Us</Link2>
            </Link1>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
