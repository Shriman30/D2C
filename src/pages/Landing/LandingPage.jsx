import React from 'react'
import './LandingPage.css'
import Home from '../../components/Home/Home'
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents'
import AboutUs from '../../components/AboutUs/AboutUs'

const Landing = () => {
  return (
    <div className='landing'>
      <Home/>
      <hr />
      <UpcomingEvents/>
    </div>
  )
}

export default Landing