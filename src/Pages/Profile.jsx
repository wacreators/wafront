import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { BsArrowLeft, BsList } from 'react-icons/bs';
import '../@styles/Register.css';
import '../@styles/Profile.css';
// import Notice from '../@components/Notice'
import { BsArrowLeft, BsPerson } from 'react-icons/bs';
import img from "../@assests/ProfileIcon.png"
import Nav from '../@components/Nav';





const Profile = () => {

    
	const navigate = useNavigate();

 const handleHome = () => {
		navigate('/Home');

 }
    
      
	return (
		<div className='profile-layout'>
             <Nav/>
          
			<div className="profile-container">
            <div className='arrow-icon'>
					<BsArrowLeft color={'#128c7e'} size={20} onClick={handleHome} />
				</div>
                <div className="component">
                    <div className='profile'>
                        <h3>Personal Data</h3>
                        <div className="profile-pic">
                        <BsPerson size={20}/>
                        </div>
                        <h3>Obanla samuel</h3>
                        <span>+234 906 792 5333</span>
                        <h5>Hello there this is all about me to the public am a software engineer and i create software for companies.</h5>
                    </div>
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
