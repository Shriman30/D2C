import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import locations from "../locationsData";
import "./Home.css";

const Home = (props) => {
  // list of images
  const homeImages = [
    {
      id: 0,
      src: "./HOMEPAGE 1.1.png",
      alt: "Homepage 1",
    },
    {
      id: 1,
      src: "./HOMEPAGE 1.2.png",
      alt: "Homepage 2",
    },
    {
      id: 2,
      src: "./HOMEPAGE 1.3.png",
      alt: "Homepage 3",
    },
    {
      id: 3,
      src: "./HOMEPAGE 1.4.png",
      alt: "Homepage 4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState("none");

  // automated navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 3) {
        // hardcoded value for the length of the array
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // manual navigation
  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="home-container" id="home">
      <img
        className="homepageImages"
        src={require(`${homeImages[currentIndex].src}`)}
        alt=""
      />
      <div className="slider-nav">
        {homeImages.map((item, index) => {
          return (
            <span
              key={index}
              onClick={() => goToImage(index)}
              className={
                currentIndex === index ? "nav-button active" : "nav-button"
              }
            ></span>
          );
        })}
      </div>
      <div className="content">
        <h1>Are you looking for an Activity?</h1>
        <p>
          Join our community to find an activity that best suits your interests.
        </p>
        <h2>Choose your location of interest!</h2>
        <div className="user-input">
          <select
            className="user-selection"
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option id="default-option" value={""} disabled selected hidden>
              Choose your location!
            </option>
            {locations.map((location, index) => (
              <option key={index} value={location.location}>
                {location.location}
              </option>
            ))}
          </select>
          <button id="send-button">
            {props.parentCallback(selectedLocation)}
            <Link className="link" to="UpcomingEventsByLocation">
              Find Activities
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
