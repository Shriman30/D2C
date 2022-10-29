import React from 'react'
import './LandingPage.css'
import ActivitiesNearMe from '../../components/ActivityNearMe/ActivityNearMe'
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents'
import AboutUs from '../../components/AboutUs/AboutUs'
import Footer from '../../components/Footer/Footer'

const Landing = () => {
  return (
    <div>
      <ActivitiesNearMe/>
      <UpcomingEvents/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default Landing