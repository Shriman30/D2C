import React, { useEffect } from "react";
import "./SpecificEventInfoPage.css";

const SpecificEventInfoPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="specificEvent-container">
      <div className="event">
        {/* <div className="title">
          <h2>{props.title}</h2>
        </div> */}
        <div className="img-description">
          <img src={require("./" + props.title + ".jpeg")} alt="Not found" />
          <div className="date">
            <img src={require("./calendar.png")} alt="" width={"100px"} />
            <p>
              9:00 a.m. {props.date}
            </p>
          </div>
          <div className="location">
            <img src={require("./location.png")} alt="" width={"100px"} />
            <p>
              {props.exactLocation} {props.location}
            </p>
          </div>
        </div>
        <div className="event-details">
          <div className="title">
            <h2>{props.title}</h2>
          </div>
          <div className="event-summary">
            <p>Event Description: {props.description}</p>
            <p>Event Price: {props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificEventInfoPage;
