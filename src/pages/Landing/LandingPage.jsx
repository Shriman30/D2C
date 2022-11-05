import React from 'react'
import './LandingPage.css'
import Home from '../../components/Home/Home'
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents'
import AboutUs from '../../components/AboutUs/AboutUs'
import ContactUs from '../../components/ContactUs/ContactUs'

const Landing = () => {
  return (
    <div className='landing'>
      <Home/>
      <br />
      <hr className='home-split'/>
      <UpcomingEvents/>
      <hr />
      <AboutUs/>
      <hr />
      <ContactUs/>
    </div>
  )
}

export default Landing