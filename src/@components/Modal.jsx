import React from 'react'
import "./Modal.css"
import { Link, useNavigate } from 'react-router-dom';

import NoticeData from '../Data/NoticeData.json'

import Notice from '../@components/Notice'
import { FaWhatsapp } from 'react-icons/fa';

const Modal = () => {

 
  return (
   <div className='modal'>
    <div className="modal-container">
      <div className="modal-overlay">
      <div className="background-image"></div>
      <h5>Modern Website Design</h5>
      <FaWhatsapp  className='modal-icon'/>
      <div className="rating">
        <p>30+ learners </p>      
          <p> 10+ enrolled</p>
          <p> 10+ enrolled</p>


      </div>
      </div>
<section className="modal-body">
  <h6>About this course</h6>
  <p> As a frontend developer, learning about website design will help you stand out.
    you will be taught the latest design trend system in building nice and amazing website.
  </p>
  </section> 
  <section className="accordion">
    
  </section>
  <div className="modal-btn">
  <button>  Enrol now</button> </div>  </div>

   </div>
  )
}

export default Modal