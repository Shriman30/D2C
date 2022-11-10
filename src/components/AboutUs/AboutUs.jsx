import React from "react";
import data from "./data";
import { useState } from "react";

import "./AboutUs.css";
const AboutUs = () => {
  const [cardSelected, setCardSelected] = useState(-1);

  return (
    <div className="aboutUs-container" id="aboutUs">
      <h1 className="header">About Us</h1>
      <div className="about-us-box-container">
        {data.map((item, index) => {
          return (
            <div key={index} className="card">
              <div
                className={
                  cardSelected === index ? "card-inner flip" : "card-inner"
                }
              >
                <div
                  className="card-front"
                  onClick={() => setCardSelected(index)}
                >
                  <div className="card-title">
                    <p>{item.title}</p>
                  </div>
                </div>
                <div className="card-back">
                  <p className="text">
                    {
                    item.description
                    }
                    
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
