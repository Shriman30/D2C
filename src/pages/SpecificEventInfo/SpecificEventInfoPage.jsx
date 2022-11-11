import React from "react";
import "./SpecificEventInfoPage.css";

const SpecificEventInfoPage = (props) => {
  return (
    <div className="specificEvent-container">
      <div className="event">
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="event-details">
          <div className="event-summary">
            <p>{props.description}</p>
            <p>{props.price}</p>
            <p>{props.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificEventInfoPage;
