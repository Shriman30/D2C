import React from "react";
// import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
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
      alt: "Homepage 1",
    },
    {
      id: 2,
      src: "./HOMEPAGE 1.3.png",
      alt: "Homepage 1",
    },
    {
      id: 3,
      src: "./HOMEPAGE 1.4.png",
      alt: "Homepage 1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // automated navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === homeImages.length - 1) {
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
      <img className="homepageImages"
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
        <input
          type="text"
          className="location-input"
          placeholder="enter your location here"
        />
      </div>
    </div>
  );
};

export default Home;
