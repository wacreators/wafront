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
                        <div className='detail'>
                            <h3>Obanla Samuel</h3>
                           <p>Lagos, NG</p>
                        </div>
                    </div>
                    <div className="profile-component">
                        <div className='profile-group'>
                            <form action="">
                                <div className='form-group'>
                                    <div>
                                <div className="details">
                                    <label>First Name</label>
                                    <input type="text" value="Samuel" />
                                </div>
                                <div className="details">
                                    <label>Last Name</label>
                                    <input type="text" value="Obanla" />
                                </div>
                                </div>
                                <div>
                                <div className="details">
                                    <label>Username</label>
                                    <input type="text" value="Samcode" />
                                </div>
                                <div className="details">
                                    <label>Email</label>
                                    <input type="email" value="Obanlasamuelolakunle@gmail.com" />
                                </div></div>
                                <div>
                                <div className="details">
                                    <label>Tel</label>
                                    <input type="tel" value="+234 906 792 5333" />
                                </div>
                                <div className="details">
                                    <label>Location</label>
                                    <input type="tel" value="Nigeria" />
                                </div>
                            </div>
                            </div>
                                <div>
                                <div className="btn-profile">
                                   <button>Submit</button>
                                </div></div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
		</div>
	);
};

export default Profile;
