import React from 'react'
import Alert from '../@components/Alert'
import '../@styles/GroupAlert.css'
import NavBar from './NavBar'

function GroupAlert() {

    let content ={
        title: "Group created successful",
        body: "You have successfully created your group, you can access it on your Dashboard.",
        button: "Continue"
    }

  return (
    <div className='alert'>
      <NavBar 
        title="Successsful"
      />
      <div className="sub-alert">
        <Alert 
            title={content.title}
            body={content.body}
            button={content.button}
        />
      </div>
    </div>
  )
}

export default GroupAlert
