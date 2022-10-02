import React from 'react'
import '../@styles/NavBar.css'
import group from '../@assests/courses.png'
import profile from '../@assests/Profile Icon.png'
import Frame from '../@assests/Frame 4.png'

export default function NavBar() {
  return (
    <div className='navbar'>
      <div className="box">
        <img src={group} alt="" />
        <span>Groups</span>
      </div>
      <div className="box">
        <img src={profile} alt="" />
        <span>Profile</span>
      </div>
      <div className="box">
        <img src={Frame} alt="" />
        <span>Settings</span>
      </div>
    </div>
  )
}
