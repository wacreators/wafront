import React, {useState} from 'react'
import "./Dashboard.css"
import {IoMdNotificationsOutline} from "react-icons/io"
import {BsPerson} from "react-icons/bs"

import Sidebar from "../@components/Sidebar"
import Modal from '../@components/Modal'

const Dashboard = () => {
var user ="Sam Obanla"


  let timeDay;
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12){
    timeDay = "morning";
  }else if (hours >= 12 && hours < 17){
    timeDay = "afternoon";
  }else {
    timeDay = "evening";
  }


  return (
    <div className='dashboard'>
 <Sidebar/>
 <div className='dashboard-container'>
  <div className='dashboard-nav'>
    <p>{user.charAt(0)}</p>
 </div>
 <div className='greeting'>

 <h6 >Good {timeDay}, Sam </h6>
<p>Here is where you monitor your users and rate your progress</p>
 </div>
 <div className='overview'>
  <h6>Trending community </h6>
<div className="trending"></div>
 </div>
 </div>
 </div>
  )
}

export default Dashboard;