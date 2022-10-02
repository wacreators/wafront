import React from 'react'
import '../@styles/SettingOpt.css'

function SettingOpt(props) {
  return (
    <div className='SettingOpt'>
      <div className="content">
        <div className="img-div">
            <img src={props.icon} alt="" />
        </div>
        <div className="text-div">
            <h2>{props.title}</h2>
            <span>{props.sub}</span>
        </div>
      </div>
      <div className="icon">
        <div className="icon-div">
            <img src={props.arrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SettingOpt
