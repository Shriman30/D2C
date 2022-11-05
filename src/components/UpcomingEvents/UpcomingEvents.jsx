import React from 'react'
import './UpcomingEvents.css'
import {IoIosArrowForward} from 'react-icons/io'
import { useState } from 'react'
const UpcomingEvents = () => {

  const upcomingEventsImages = [
    {
      id:0,
      src:'./EVENTS 1.1.png',
      alt:'Event 1',
    },
    {
      id:0,
      src:'./EVENTS 1.2.png',
      alt:' Event 2',
    },
    {
      id:0,
      src:'./EVENTS 1.3.png',
      alt:'Event 3',
    },
  ]

  return (
    <div className='upcomingEvents-container' id='upcomingEvents'>
      <div className='content'>
        <h1>Upcoming Events</h1>
        <p>Interested in finding out what awaits you? Quickly join us! Find out about our most awaited upcoming events and join our community as early as today!</p>
        <div className='label-container'>
        <a href="">Read more</a>
        </div>
      </div>
      {/* Need to implement this part as a card slider */}
      {/* <img src={require("./EVENTS 1.4.png")} alt="" className='eventImg'/>
      <IoIosArrowForward className='arrow-right'/> */}
    </div>
  )
}

export default UpcomingEvents