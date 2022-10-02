import React from 'react'
import back from '../@assests/48px.png'
import '../@styles/Nav.css'
import { Link, useNavigate } from 'react-router-dom';

function Nav(props) {
  return (
    <div className="nav">
        <div className="img-div">
          <Link to={props.link}><img src={back} alt="" /></Link>
        </div>
        <div className="title">
          <h1>{props.heading}</h1>
        </div>
    </div>
  )
}

export default Nav
