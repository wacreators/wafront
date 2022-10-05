import React from 'react'
import img from '../@assests/Course Image.png'
import '../@styles/ComGroup.css'

function Group(props) {
  return (
    <div className='group'>
      <div className="img-div">
        <img src={img} alt="" />
      </div>
      <div className="text-div">
        <span>Members {props.members}+</span>
        <h2>{props.title}</h2>
        <p>{props.describe}</p>
      </div>
    </div>
  )
}

export default Group
