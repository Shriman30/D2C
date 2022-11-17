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
        <div>
          <div className="SpecificImg"><img src={require("./"+props.title+".jpeg")} alt="Not found"/></div>
         
        </div>
        <div className="event-details">
          <div className="event-summary">
            <p>Event Description: {props.description}</p>
            <p>Event Price: {props.price}</p>
            <p>Event Location: {props.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificEventInfoPage;
