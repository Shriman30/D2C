import React from 'react'
import './LandingPage.css'
import Home from '../../components/Home/Home'
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents'
import AboutUs from '../../components/AboutUs/AboutUs'
import Footer from '../../components/Footer/Footer'

const Landing = () => {
  return (
    <div>
      <Home/>
      <UpcomingEvents/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default Landing