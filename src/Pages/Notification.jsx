import React from 'react'
import Nav from '../@components/Sidebar'
import Notice from '../@components/Notice'
import NoticeData from '../Data/NoticeData.json'
import '../@styles/Notification.css'
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../@components/Sidebar'

function Notification() {

    const note = NoticeData.map((data) =>{
        return(
            <Link to="/message">
                <Notice 
                    message={data.message}
                    time={data.time}
                    content={data.content}
                />
            </Link>
        )
    })

  return (
    <div className='notification'>
      <Sidebar/>
        <div className="sub-notification">
            {note}
        </div>
    </div>
  )
}

export default Notification
