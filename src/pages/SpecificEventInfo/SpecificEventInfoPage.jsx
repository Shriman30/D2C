import React, {useEffect} from "react";
import "./SpecificEventInfoPage.css";

const SpecificEventInfoPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
