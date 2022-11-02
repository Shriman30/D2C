import React from "react";
// import { Link } from 'react-router-dom'
import "./Home.css";

const Home = () => {
  const homeImages = [
    {
      id:0,
      src:'./HOMEPAGE 1.1.png',
      alt:'Homepage 1',
    },
    {
      id:1,
      src:'./HOMEPAGE 1.1.png',
      alt:'Homepage 1',
    },
    {
      id:2,
      src:'./HOMEPAGE 1.1.png',
      alt:'Homepage 1',
    },
    {
      id:3,
      src:'./HOMEPAGE 1.1.png',
      alt:'Homepage 1',
    },
  ]
  return (
    <section className="home-container" id="home">
      <div className="content">
        <h1>Are you looking for an Activity?</h1>
        <p>Join our community to find an activity that best suits your interests.</p>
        <input type="text" className="location-input" placeholder="enter your location here" />
      </div>
    </section>
  );
};

export default Home;
