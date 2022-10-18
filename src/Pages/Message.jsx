import React from 'react'
import Nav from '../@components/Sidebar'
import '../@styles/Message.css'
// import img from '../@assests/istockphoto-1191817260-170667a.jpg'

function Message() {
  return (
    <div className='message'>
        <Nav  
          heading="Mesaage" 
          link="/notification"
        />
        <div className="sub-message">
          <div className="img-div">
            {/* <img src={img} alt="" /> */}
          </div>
          <h1>Welcome To Payklas</h1>
          <p>Welcome to payklas you can click on the link bellow to create a payed group with us and we would help you manage your group. The likely features you will enjoy for we handling your group are PAYMENT BEFORE BEEN ADDED, CREATE RENEWABLE GROUP AND SUBSCRIPTION also.</p>
        </div>
    </div>
  )
}

export default Message
