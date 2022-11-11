import React from "react";
import { Link } from "react-router-dom";
import "./UpcomingEventsPage.css";
import data from "../../upcomingEventsData";
import { useEffect } from "react";

const UpcomingEventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="upcomingEvents-page-container">
      <h1>Upcoming Events</h1>
      <div className="list">
        {data.map((item, index) => {
          return (
            <div key={index} className="element-container">
              <div className="element">
                  <img src={require(`${item.img}`)} alt="img" width={"500px"} height={"300px"}/>
                <div className="event-title">
                  <p className="title">{item.title}</p>
                </div>
                <div className="event-date">
                  <p className="date"> {item.date}</p>
                </div>
                <div className="event-link">
                  {/* Must be able to link to specific event info page */}
                  <Link className="links" to={item.link}>
                    Read more
                  </Link>
                </div>
              </div>
              <hr className="divider" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingEventsPage;
