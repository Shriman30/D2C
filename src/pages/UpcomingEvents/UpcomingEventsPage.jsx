import React from "react";
import { Link } from "react-router-dom";
import "./UpcomingEventsPage.css";
import data from "./data";
import { useEffect } from "react";

const UpcomingEventsPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="upcomingEvents-page-container">
      <h1>Upcoming Events</h1>
      <div className="list">
        {data.map((item, index) => {
          return (
            <div key={index} className="element-container">
              <div className="element">
                <img src={item.img} alt="img" />
                <p className="title">{item.title}</p>
                <p className="date"> {item.date}</p>
                {/* Must be able to link to specific event info page */}
                <Link className="links" to={item.link}>
                  Read more
                </Link>
              </div>
              <hr className="divider"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingEventsPage;
