import React from 'react'
import { useEffect } from 'react'
import './LandingPage.css'
import Home from '../../components/Home/Home'
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents'
import AboutUs from '../../components/AboutUs/AboutUs'
import ContactUs from '../../components/ContactUs/ContactUs'

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className='landing'>
      <Home/>
      <hr className='home-split'/>
      <UpcomingEvents/>
      <hr className='home-split'/>
      <AboutUs/>
      <hr className='home-split' />
      <ContactUs/>
    </div>
  )
}

export default Landing