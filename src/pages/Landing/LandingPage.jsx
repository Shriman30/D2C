import React from 'react'
import { useEffect,useState } from 'react'
import './LandingPage.css'
import Home from '../../components/Home/Home'
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents'
import AboutUs from '../../components/AboutUs/AboutUs'
import ContactUs from '../../components/ContactUs/ContactUs'
import upcomingEventsList from '../../upcomingEventsData'

const Landing = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const [userInput, setUserInput] = useState('');
  
  const callbackFunction = (homeInput)=>{
    setUserInput(homeInput);
  }
  return (
    <div className='landing'>
      <Home UpcomingeventsList = {upcomingEventsList} parentCallback = {callbackFunction}>
        {
          props.parentCallback(userInput)
        }
      </Home>
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