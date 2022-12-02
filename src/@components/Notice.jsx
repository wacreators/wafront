import React from 'react'
import {MdMessage} from "react-icons/md"
// import { Link } from 'react-router-dom'

function Notice(props) {
  return (
    <div className='notice'>
        <div className="content">
            {/* <Link to="Notification"> */}
                <div className="img-div">
                    <MdMessage/>
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
