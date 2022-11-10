import React from 'react'
import './UpcomingEvents.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const UpcomingEvents = () => {

  const upcomingEventsImages = [
    {
      id:0,
      src:'./EVENTS 1.1.png',
      alt:'Event 1',
    },
    {
      id:1,
      src:'./EVENTS 1.2.png',
      alt:' Event 2',
    },
    {
      id:2,
      src:'./EVENTS 1.3.png',
      alt:'Event 3',
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  // automated navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 2) { // hardcoded value for the length of the array
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex]);
  return (
    <div className='upcomingEvents-container' id='upcomingEvents'>
      <div className='content'>
        <h1>Upcoming Events</h1>
        <p>Interested in finding out what awaits you? Quickly join us! Find out about our most awaited upcoming events and join our community as early as today!</p>
        <div className='label-container'>
        {/* <a href="">Read more</a> */}
        <Link className='link' to='AllUpcomingEvents'>Read more</Link>
        </div>
      </div>
      {/* Need to implement this part as a card slider */}
      <div className="upcomingEvents">
      <img className='upcomingEventsImg'
        src={require(`${upcomingEventsImages[currentIndex].src}`)}
        alt=""
      />
      </div>
 
      {/* <IoIosArrowForward className='arrow-right'/> */}
    </div>
  )
}

export default UpcomingEvents