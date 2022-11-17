import React from "react";
import { Link } from "react-router-dom";
import "./FilteredUpcomingEventsPage.css";
// import data from "../../upcomingEventsData";
import { useEffect } from "react";

const FilteredUpcomingEventsPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="upcomingEvents-page-container">
      <h1>Upcoming Events</h1>
      <div className="list">
        {props.data.map((item, index) => {
          return (
            <div key={index} className="element-container">
              <div className="element">
                  <img src={require(`${item.img}`)} alt="img"/>
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
      <div>
        <h3>Stay Up to Date for more Upcoming Events !</h3>
        </div>
    </div>
  );
};

export default FilteredUpcomingEventsPage;
