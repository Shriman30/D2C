import React from 'react'
// import { Link } from 'react-router-dom'
import './Home.css'
const ActivityNearMe = () => {
  return (
    <div className='container page'>
      <div className="info">
        <h1 className='banner'>Are You Looking for an Activity?</h1>
        <p>Join our community to find an activity that best suits your interest.</p>
        <input className='location' placeholder='Enter your location here'></input>
      </div>
      <img src={require("./Screenshot 2022-10-29 235307.png")} alt="homepage1" className='main-img' />
    </div>
  )
}

export default ActivityNearMe