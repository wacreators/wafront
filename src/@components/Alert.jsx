import React from 'react'
import '../@styles/Alert.css'

function Alert(props) {
  return (
    <div className='alerts'>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <button>{props.button}</button>
    </div>
  )
}

export default Alert
