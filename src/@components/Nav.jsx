import React, {useState} from 'react'
import '../@styles/Nav.css'

import { NavLink, Link, useNavigate } from 'react-router-dom';
import { navData } from './navData';
import Profile from '../Pages/Profile';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


function Nav() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
      <>
      <div className='navbar'>
        <NavLink to="#" className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </NavLink>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
<ul claxxssName='nav-menu-item' onClick={showSidebar}>
<li className='navbar-toggle'>
  <Link to="#" >  <AiIcons.AiOutlineClose/>
</Link>
</li>
{navData.map((item, index) =>{
  return(
    <li key={index}>
      <NavLink to={item.to} className='nav-text'>{item.icon}
      <span>{item.text}</span>
      </NavLink>

    </li>
  )
})}
</ul>
        </nav>

      </div>
      </>
    );
  };

export default Nav
