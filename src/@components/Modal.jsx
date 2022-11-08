import React,{useState} from 'react'
import "./Modal.css"

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Faq from './Faq';
import Accordion from './Accordion';
import { FaWhatsapp } from 'react-icons/fa';

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
      <div className="modal-overlay">
      <div className="background-image">
        <img src={require("../@assests/courses.png").default} alt="" />
      </div>
      <div className='modal-heading'>
      <h5>Modern Website Design</h5>     

      </div>
      <p className='chat-para'> <span><FaWhatsapp size={18}/></span>Chat with Instructor</p>

      <div className="rating">
        <p>13.6k <span>Learners </span></p>      
          <p> 47 <span> Online</span></p>
          


      </div>
      </div>
<section className="modal-body">
  <h6>About this course</h6>
  <p> As a frontend developer, learning about website design will help you stand out.
    you will be taught the latest design trend system in building nice and amazing website.
  </p>
  </section> 
  <section className="accordion">
  {Faq.map(({title, content}) => (
    <Accordion title={title} content={content}/>
  ))}
  </section>
  <div className="modal-btn">
  <button>  Enrol now</button> </div>  </div>

   </div>
  )
}

export default Modal