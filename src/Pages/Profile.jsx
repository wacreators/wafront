import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import '../@styles/Register.css';
import '../@styles/Profile.css';
import img from '../@assests/Settings Information Icons (1).png'
// import Notice from '../@components/Notice'
import SettingOpt from '../@components/SettingOpt';
import arrow from '../@assests/Next icon.png'
import notice from '../@assests/Settings Information Icons.png'

const Profile = () => {










    
	const navigate = useNavigate();

	const handleHome = () => {
		navigate('/signin');
	};


    const content = {
        group: {
          title: "Create Groups"
        },
        wallet:{
            title: "Your Wallet"
        },
        friend:{
            title: "Invite Friends"
        },
        notification:{
            title: "Notification"
        },
        details:{
            title: "Your Details"
        }
      }
	return (
		<div className='profile-layout'>
			<div className="profile-container">
                <div className='arrow'>
                <BsArrowLeft size={25} color={"#075e54"}/>
                </div>
                <div className='profile'>
                    <h6>Profile</h6>
                    <div className="profile-pic">
                        <img src={img} alt="" />
                    </div>
                    {/* <p>Change profile picture</p> */}
                </div>
                <div className="profile-component">

                < SettingOpt 
                    icon={notice}
                    title={content.details.title}
                    arrow={arrow}
                />
                
                <Link to="/group">
                    < SettingOpt 
                        icon={notice}
                        title={content.group.title}
                        arrow={arrow}
                    />
                </Link>

                <Link to="/wallet">
                    < SettingOpt 
                        icon={notice}
                        title={content.wallet.title}
                        arrow={arrow}
                    />
                </Link>

                <Link to="/notification">
                    < SettingOpt 
                        icon={notice}
                        title={content.notification.title}
                        arrow={arrow}
                    />
                </Link>

                < SettingOpt 
                    icon={notice}
                    title={content.friend.title}
                    arrow={arrow}
                />
                </div>
            </div>
		</div>
	);
};

export default Profile;
