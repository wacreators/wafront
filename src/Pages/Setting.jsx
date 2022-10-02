import React from 'react'
import '../@styles/Setting.css'
import SettingOpt from '../@components/SettingOpt'

import notice from '../@assests/Settings Information Icons.png'
import prof from '../@assests/Settings Information Icons (1).png'
import mail from '../@assests/Settings Information Icons (2).png'
import pass from '../@assests/Settings Information Icons (3).png'
import arrow from '../@assests/Next icon.png'
import Nav from '../@components/Nav'

const content = {
  notification: {
    title: "Notifications"
  },
  prof:{
    title: "Details",
    sub: "Juana Antonieta"
  },
  mail:{
    title: "Email",
    sub: "juanita123@gmail.com"
  },
  pass:{
    title: "Password",
    sub: "changed 2 weeks ago"
  }
}

const Setting = () => {
  return (
    <div className='setting'>
      <Nav 
        heading="Settings"
      />
      <div className="sub-setting">
        < SettingOpt 
          icon={notice}
          title={content.notification.title}
          arrow={arrow}
        />
        <h1>Account Information</h1>
        < SettingOpt 
          icon={prof}
          title={content.prof.title}
          sub={content.prof.sub}
        />
        < SettingOpt 
          icon={mail}
          title={content.mail.title}
          sub={content.mail.sub}
        />
        < SettingOpt 
          icon={pass}
          title={content.pass.title}
          sub={content.pass.sub}
        />
      </div>
    </div>
  )
}

export default Setting