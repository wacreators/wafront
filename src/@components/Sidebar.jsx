import React, {useState} from 'react'
import '../@styles/Nav.css'
import {NavData} from "./navData.js"

import { NavLink, Link, useNavigate } from 'react-router-dom';

import {IoMdChatbubbles, IoMdNotificationsOutline} from "react-icons/io"
import {MdOutlineAttachMoney} from "react-icons/md"
import { HiOutlineMenuAlt4,HiX, HiOutlineLogout} from "react-icons/hi"
 
function Sidebar() {
const [isOpen, setOpen] = useState(false);
const toggle = () => setOpen(!isOpen)

    return (
    <div className='sidebar-container'>
      <div style={{width: isOpen ? "180px" :"50px"}} className="sidebar">
        <div className="top-section">
          <Link style={{display: isOpen ? "block" :"none"}} to="#" className="sidebar-logo">Payklas</Link>
          <div style={{marginLeft: isOpen ? "50px" :"0", display: isOpen ? "none" :"block"}} className="menu">
            <HiOutlineMenuAlt4 onClick={toggle}/>
          </div>
          <div style={{marginLeft: isOpen ? "50px" :"0",display: isOpen ? "block" :"none" }} className="menu">
            <HiX onClick={toggle}/>
          </div>
        </div>
          {NavData.map((list, index)=>(
                <div  key={index}  className="icon-link">
                  <Link to={list.to} >
                    <p  className="nav-icon">{list.icon}</p>
                    <p style={{display: isOpen ? "block" :"none"}} className="link-text">{list.text}</p>
                  </Link>
                </div>
              )
            )
          }
          <div className='logout-menu'>
            <HiOutlineLogout/>
            <p style={{display: isOpen ? "block" :"none"}} >Logout</p>
          </div>
      </div>
    </div>
    );
  };

export default Sidebar;
