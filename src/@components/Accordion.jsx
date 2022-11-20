import React from 'react'
import { useState } from 'react'
import { MdTitle } from 'react-icons/md'
import "./Modal.css"

const Accordion = ({title,content}) => {

    const [isActive, setActive] = useState(false)
  return (
    <div className='accordion-item'>
<div className="accordion-title" onClick={()=> setActive(!isActive)}>
<div>{title}</div>
<div className='accordion-icon'>{isActive ? "-" : "+"}</div>
</div>
{isActive && <div className='accordion-content'>{content}</div>}
    </div>
  )
}

export default Accordion