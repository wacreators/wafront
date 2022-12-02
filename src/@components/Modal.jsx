import React,{useState} from 'react'
import "./Modal.css"

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Faq from './Faq';
import Accordion from './Accordion';
import { FaWhatsapp } from 'react-icons/fa';
import prof from '../@assests/istockphoto-1191817260-170667a.jpg'

const Modal = () => {
  const [clicked, setClicked] = useState(false);

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null);
		}
		setClicked(index);
  }
 
  return (
   <div className='modal'>
    <div className="modal-container">
      <div className="head">
        <div className="modal-overlay">
          <div className="background-image">
            <img src={prof} alt="" />
          </div>
          <div className='modal-heading'>
            <h5>Modern Website Design</h5> 
            <div className="details">
              {/* <p className='chat-para'><FaWhatsapp size={18}/><span>Chat with Instructor</span> </p> */}
              <p>13.6k <span>Participants</span></p>      
              <p> Group created by Daniel</p>   
            </div> 
            <section className="modal-body">
              <h6>About this course</h6>
              <p> 
                As a frontend developer, learning about website design will help you stand out.
                you will be taught the latest design trend system in building nice and amazing website. 
                As a frontend developer, learning about website design will help you stand out.
                you will be taught the latest design trend system in building nice and amazing website.
              </p>
            </section>
          </div>
        </div>  
      </div> 
      <section className="accordion">
        <h2 className='title'>Course Details</h2>
        {Faq.map(({title, content}) => (
          <Accordion 
            title={title} 
            content={content}
          />
        ))}
      </section>
      <div className="modal-btn">
        <h4>Still have any question?</h4>
        <button>  Enrol now $50</button> 
      </div>
    </div>
  </div>
  )
}

export default Modal