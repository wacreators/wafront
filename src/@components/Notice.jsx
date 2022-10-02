import React from 'react'
import icon from '../@assests/Settings Information Icons (2).png'

import { Link } from 'react-router-dom'

function Notice(props) {
  return (
    <div className='notice'>
        <div className="content">
            {/* <Link to="Notification"> */}
                <div className="img-div">
                    <img src={icon} alt="" />
                </div>
            {/* </Link> */}
            <div className="text-div">
                <h2>{props.message}</h2>
            </div>
        </div>
        <div className="time">
            <span>{props.time}</span>
        </div>
    </div>
  )
}

export default Notice
