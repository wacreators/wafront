import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// import { BsArrowLeft, BsList } from 'react-icons/bs';
import '../@styles/Register.css';
import '../@styles/Profile.css';
// import Notice from '../@components/Notice'
import { BsArrowLeft, BsPerson } from 'react-icons/bs';
import img from "../@assests/ProfileIcon.png"
import Sidebar from '../@components/Sidebar';





const Profile = () => {

    
	const navigate = useNavigate();

 const handleHome = () => {
		navigate('/Home');

 }
    
      
	return (
		<div className='profile-layout'>

<Sidebar/>


			<div className="profile-container">
            
                <div className="component">
                    <div className='profile'>
                        <div className="profile-pic">
                        <BsPerson size={20}/>
                        </div>
                        <div>
                        <h3>Obanla Samuel</h3>
                        <p>Hello there this is all about me to the public am a software engineer and i create software for companies.</p>
                    
                        </div></div>
                    <div className="profile-component">
            <div className='profile-group'>
<div className='profile_component'>
</div>
</div>
</div>

                </div>
            </div>
		</div>
	);
};

export default Profile;
