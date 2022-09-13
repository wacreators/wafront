import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import '../@styles/Register.css';
import '../@styles/Profile.css';

const Profile = () => {
	const navigate = useNavigate();

	const handleHome = () => {
		navigate('/signin');
	};
	return (
		<div className='profile-layout'>
			<div className="profile-container">
                <div className='arrow'>
                <BsArrowLeft size={25} color={"#075e54"}/>
                </div>
                <div className='profile'>
<h6>Profile</h6>
<div className="profile-pic">Dp</div>
<p>Change profile picture</p>
                </div>
                <div className="profile-component">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    
                </div>
            </div>
		</div>
	);
};

export default Profile;
