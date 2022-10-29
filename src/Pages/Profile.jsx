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
                        <div className='det'>
                            <h3>Obanla Samuel</h3>
                            <p>Hello there this is all about me to the public am a software engineer and i create software for companies.</p>
                        </div>
                    </div>
                    <div className="profile-component">
                        <div className='profile-group'>
                            <h1>DETAILS</h1>
                            <form action="">
                                <div className="details">
                                    <label>First Name</label>
                                    <input type="text" value="Samuel" />
                                </div>
                                <div className="details">
                                    <label>Last Name</label>
                                    <input type="text" value="Obanla" />
                                </div>
                                <div className="details">
                                    <label>User Name</label>
                                    <input type="text" value="Samcode" />
                                </div>
                                <div className="details">
                                    <label>Email</label>
                                    <input type="email" value="Obanlasamuelolakunle@gmail.com" />
                                </div>
                                <div className="details">
                                    <label>Tel</label>
                                    <input type="tel" value="+234 906 792 5333" />
                                </div>
                                <div className="details">
                                    <label>Group Created</label>
                                    <input type="text" value="6 Group Created" />
                                </div>
                                <div className="sub">
                                    <input type="submit" value="Save Changes" />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
		</div>
	);
};

export default Profile;
