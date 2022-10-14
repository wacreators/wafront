import React from 'react'
import Nav from '../@components/Nav'
import { NavLink, Link, useNavigate } from 'react-router-dom';


import Profile from './Profile'

const Dashboard = () => {
  let timeDay;
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12){
    timeDay = "morning";
  }else if (hours >= 12 && hours < 17){
    timeDay = "afternoon";
  }else {
    timeDay = "evening"
  }



  return (
    <div className='dashboard'>
''        <div>
          <h4>Good Afternoon Sam+</h4>
        </div>
    </div>
  )
}

export default Dashboard