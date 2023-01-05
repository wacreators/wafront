import React, {useState} from 'react'
import sidebarStyles from '../@styles/Nav.module.css'
import {NavData} from "./navData.js"

import { NavLink } from 'react-router-dom';

import { HiOutlineMenuAlt4,HiX, HiOutlineLogout} from "react-icons/hi"
 
function Sidebar() {
const [isOpen, setOpen] = useState(false);
const toggle = () => setOpen(!isOpen)

    return (
    <div className={sidebarStyles.sidebarContainer}>
      <HiOutlineMenuAlt4 size={40} className={sidebarStyles.Mnav} />
      <div style={{width: isOpen ? "200px" :"60px"}} className={sidebarStyles.sidebar}>
        <div className={sidebarStyles.topSection}>
          <h2 style={{display: isOpen ? "block" :"none"}}  className={sidebarStyles.sidebarLogo}>Payklas</h2>
          <div style={{marginLeft: isOpen ? "60px" :"0", display: isOpen ? "none" :"block"}} className={sidebarStyles.menu}>
            <h3 className={sidebarStyles.icon}  onClick={toggle}>P</h3>
          </div>
          <div style={{marginLeft: isOpen ? "60px" :"0",display: isOpen ? "block" :"none" }} className={sidebarStyles.menu}>
            <HiX className={sidebarStyles.icon} size={18} onClick={toggle}/>
          </div>
        </div> 
        {NavData.map((list, index)=>(
          <div  key={index}  className={sidebarStyles.iconLink}>
            <NavLink  className={({isActive}) => isActive ? "active-class" : "null"} to={list.path}>
              <h4  className={sidebarStyles.navIcon}>{list.icon}</h4>
              <h4 style={{display: isOpen ? "block" :"none"}} className={sidebarStyles.iconText}>{list.text}</h4>
                </NavLink>
          </div>
          )
          )
        }
        <div className={sidebarStyles.logoutMenu}>
          <HiOutlineLogout className={sidebarStyles.icon} size={25} />
          <p style={{display: isOpen ? "block" :"none"}}  >Logout</p>
        </div>
      </div>
    </div>
    );
  };

export default Sidebar;
