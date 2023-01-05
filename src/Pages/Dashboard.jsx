
import React from 'react'
import Sidebar from "../@components/Sidebar"
import dashboardStyles from  "./Dashboard.module.css"
import Chart from "react-apexcharts"
// import Notification from './Notification'
import {HiOutlineUsers} from "react-icons/hi";
import {BiGroup} from "react-icons/bi"
import {AiOutlineEye} from "react-icons/ai"
// import { RiWhatsappFill } from 'react-icons/ri'
import { IoMdSettings } from "react-icons/io"
import { MdAttachMoney, MdContentCopy, MdShare, MdCircleNotifications, MdDelete } from 'react-icons/md'
import Heading from "../@components/Heading"




const Dashboard = ({value}) => {
var user ="Sam Obanla"


  let timeDay;
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12){
    timeDay = "morning";
  }else if (hours >= 12 && hours < 17){
    timeDay = "afternoon";
  }else {
    timeDay = "evening";
  }

  // dashboard navigation
  const [change, changeFun] = React.useState(true)

  function chan(){
    changeFun(!change)
    change2Fun(false)
    change3Fun(false)
    change4Fun(false)
  }

  // dashboard navigation
  const [change2, change2Fun] = React.useState(false)

  function chan2(){
    change2Fun(!change2)
    changeFun(change2)
    change3Fun(change2)
    change4Fun(change2)
  }

  // dashboard navigation
  const [change3, change3Fun] = React.useState(false)

  function chan3(){
    change3Fun(!change3)
    changeFun(change3)
    change2Fun(change3)
    change4Fun(change3)
  }

  // dashboard navigation
  const [change4, change4Fun] = React.useState(false)

  function chan4(){
    change4Fun(!change4)
    changeFun(change4)
    change2Fun(change4)
    change3Fun(change4)
  }

const series = [
  {
    name:"Users",
    data : [19, 20, 20, 26, 28,30, 36]
  },
  {
    name:"views",
    data : [20, 35, 48, 56, 68,72, 84]

  }

]
const options = {

  xaxis: {
    type: "category",
    categories: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
   labels:{
    style:{
      fontSize:"2px",
      fontWeight:"100"
    }
   },
   axisTicks:{
color:"#000"
   },
   axisBorder:{
    show:true,
    color:"#075e54"
  },
    title:{
    text: "Days",
    fontSize:"20px",
    color:"#000",
    align:"left",
   }
  },
  yaxis:{
    axisBorder:{
      show:true,
      color:"#075e54",
      width:2,
      height:"auto"
    },
    title:{
      text: "Performance",
      fontSize: "10px"
    }
  },

  chart:{
    width:"100%",
    style:{
      fontSize:"5px"
    },
    zoom:{
      enabled:false
    },
    toolbar:{
      show:false,
    },



  
  },
  options:{
  legend:{
    fontSize:"3px"
  }
  },
title:{
  text:"Recent activity",
    fontSize:"1px",
    color:"black"
}, 
 stroke:{
    width:2,
    curve:"smooth"

  },
  grid:{
    padding:{
left:20,
right:0
    },
  
    borderColor:"rgba(0,0,0,0.1)",
    show:true,
    row:{
      color:"#128c7e",
      opacity:0.5
    }
  }
}
  return (
    <div className={dashboardStyles.dashboard}>
      <Sidebar/>
      <div className={dashboardStyles.dashboardWrapper}>
        <Heading value={Dashboard}/>
        <div className={dashboardStyles.dashboardNav}>
          <p>{user.charAt(0)} <span className={dashboardStyles.name}>Samuel</span> </p>
        </div>
        <div className={dashboardStyles.dashboardView}>
            <div className={dashboardStyles.greeting}>
              <h3 >Good {timeDay}, Sam </h3>
              <p>Here is where you monitor your users and your progress rate.</p>
            </div>
            <div className={dashboardStyles.overview}>
              <div className={dashboardStyles.dash}>
                <div className={dashboardStyles.overviewer}>
                  <div className={dashboardStyles.view} onClick={chan2}>
                    <BiGroup size={25}  color='#0cdac2'/>
                    <div>
                      {/* <h6>10</h6> */}
                      <h5>Total group</h5>
                    </div>
                  </div> 
                  <div className={dashboardStyles.view} onClick={chan}>
                    <HiOutlineUsers size={25} color='#0cdac2'/>
                    <div>
                      {/* <h6>10.5k</h6> */}
                      <h5>Total member</h5>
                    </div>
                  </div> 
                  <div className={dashboardStyles.view} onClick={chan3}>
                    <AiOutlineEye  size={25} color='#0cdac2'/>
                    <div>
                      {/* <h6>15.8k</h6> */}
                      <h5>Total view</h5>
                    </div>
                  </div> 
                  <div className={dashboardStyles.view} onClick={chan4}>
                    <MdAttachMoney size={25} color='#0cdac2'/>
                    <div>
                      {/* <h6>$15.4</h6> */}
                      <h5>Total profit</h5>
                    </div>
                  </div>
                </div>
                <div className={dashboardStyles.chart}>
                  <Chart type="line" series={series} options={options}/>
                </div>
              </div>
              <div className={dashboardStyles.Container}>
                <div className={dashboardStyles.linkCont}>
                  <h6>Notifications</h6>
                  <MdCircleNotifications fontSize={25} />
                </div>
                <div className={dashboardStyles.Cont2} style={{display: change2 ? "block" :"none"}} >
                  <h6>Groups</h6>
                  <div className={dashboardStyles.user}>
                    <p>Figma class <span><IoMdSettings fontSize={23} /></span> </p>
                    <p>Javacript class <span><IoMdSettings fontSize={23} /></span> </p>
                    <p>React class <span><IoMdSettings fontSize={23} /></span> </p>
                    <p>Product design class <span><IoMdSettings fontSize={23} /></span> </p>
                  </div>
                </div>
                <div className={dashboardStyles.Cont} style={{display: change ? "block" :"none"}}  >
                  <h6>Members</h6>
                  <div className={dashboardStyles.list}>
                    <p>
                      +234 906 792 5333 
                      <span>
                        <h4> </h4>
                        <MdDelete fontSize={20} />
                      </span> 
                    </p>

                    <p>
                      +234 816 102 5436 
                      <span>
                        <h4> </h4>
                        <MdDelete fontSize={20} />
                      </span> 
                    </p>

                    <p>
                      +234 906 710 5899 
                      <span>
                        <h4> </h4>
                        <MdDelete fontSize={20} />
                      </span> 
                    </p>

                    <p>
                      +234 706 812 5107 
                      <span>
                        <h4> </h4>
                        <MdDelete fontSize={20} />
                      </span> 
                    </p>

                  </div>
                </div>
                <div className={dashboardStyles.Cont2} style={{display: change3 ? "block" :"none"}} >
                  <h6>Views</h6>
                  <div className={dashboardStyles.user}>
                    <p>Figma class <span>20 views</span> </p>
                    <p>Javacript class <span>5 views</span> </p>
                    <p>React class <span>90 views</span> </p>
                    <p>Product design class <span>50 views</span> </p>
                  </div>
                </div>
                <div className={dashboardStyles.Cont2} style={{display: change4 ? "block" :"none"}} >
                  <h6>Profit</h6>
                  <div className={dashboardStyles.user}>
                    <p>$23 <span>5th Sep</span> </p>
                    <p>$45 <span>12th Sep</span> </p>
                    <p>$5 <span>22nd Sep</span> </p>
                    <p>$7 <span>3rd Nov</span> </p>
                  </div>
                </div>
                <div className={dashboardStyles.copy}>
                  <input type="text" value="https://payklas/uiux/sd7ddgsds6dsd8" />
                  <button><MdContentCopy fontSize={20} /></button>
                  <button><MdShare fontSize={20} /></button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
    

export default Dashboard;