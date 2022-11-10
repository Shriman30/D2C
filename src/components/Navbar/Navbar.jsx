import React from "react";
import { useState } from "react";
import {Link} from 'react-scroll'
import "./Navbar.css";

const NavBar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="navbar">
      <div className="nav-container">
        <header><img src={require("./D2C Prototype[947].png")} alt="" /></header>
        <div className="menu-btn">
        {/* Implement css for menu button when window size is not wide enough */}
        </div>
        <div className="nav">
          <div className="nav-items">
              {/* Need to find a way to redirect user back to the pages when they click on the nav links. Probably have to modify the path according to what is being clicked */}
            <Link className={ selected===0 ? "link active" : "link"} to="home" spy={true} smooth={true} offset={10} duration={700} onClick={()=>{setSelected(0);}}>Home</Link>
            <Link className={ selected===1 ? "link active" : "link"} to="upcomingEvents" spy={true} smooth={true} offset={1} duration={700} onClick={()=>{setSelected(1);}}>Upcoming Events</Link>
            <Link className={ selected===2 ? "link active" : "link"} to="aboutUs" spy={true} smooth={true} offset={5} duration={700} onClick={()=>{setSelected(2);}}>About Us</Link>
            <Link className={ selected===3 ? "link active" : "link"} to="contactUs" spy={true} smooth={true} offset={5} duration={700} onClick={()=>{setSelected(3);}}>Contact Us</Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
