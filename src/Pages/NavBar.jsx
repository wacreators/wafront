import React from 'react'
import '../@styles/NavBar.css'
import { BsList, BsArrowLeft } from 'react-icons/bs';
import { useNavigate, Link } from 'react-router-dom';

export default function NavBar(props) {
  const navigate = useNavigate();

  function handlenav(){
    navigate(-1)
  }
  return (
    <div className="nav-bar">
        <header>
            <div className="content">
                <span>{props.def}</span>
                <h1>{props.name}</h1>
                <BsArrowLeft size={30} color={"#075e54"} onClick={handlenav}/>
            </div>
            {/* <h1>Profile</h1> */}
        </header>
        <h2>{props.title}</h2>
        <div className="search">
            <input type="search" placeholder='Search Group' />
            <div className="dd">
              <BsList size={40} color={"#075e54"}/>
              <ul className='ul'>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/notification">Notification</Link></li>
              </ul>
            </div>
        </div>
    </div>
  )
}
