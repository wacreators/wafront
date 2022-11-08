
import React from 'react'
import Sidebar from "../@components/Sidebar"
import dashboardStyles from  "./Dashboard.module.css"
import Chart from "react-apexcharts"
import Notification from './Notification'
import {MdAttachMoney} from "react-icons/md";
import {HiOutlineUsers} from "react-icons/hi";
import {BiGroup} from "react-icons/bi"
import {AiOutlineEye} from "react-icons/ai"




const Dashboard = () => {
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
    categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satursday", "Sunday"],
   labels:{
    style:{
      fontSize:"8px",
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
      fontSize:30.
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
  
  <div className={dashboardStyles.dashboardNav}>
    <p>{user.charAt(0)}</p>
 </div>
  <div className={dashboardStyles.dashboardView}>
  
  
      <div className={dashboardStyles.dashboardContainer}>
      
        <div className={dashboardStyles.greeting}>
          <h3 >Good {timeDay}, Sam </h3>
          <p>Here is where you monitor your users and your progress rate.</p>
        </div>
        <div className={dashboardStyles.overview}>
          <div>
        <div className={dashboardStyles.overviewer}>
<div className={dashboardStyles.view}><HiOutlineUsers size={25}/>
<div><h6>10.5k</h6>
<h5>Total users </h5>

</div></div> 
<div className={dashboardStyles.view}>
  <BiGroup size={25}/>
    <div><h6>10</h6><h5>Total groups</h5></div></div> 
    <div className={dashboardStyles.view}>
      <AiOutlineEye  size={25}/>
       <div><h6>15.8k</h6><h5>Total views </h5></div></div> 
        <div className={dashboardStyles.view}><MdAttachMoney size={25}/>
          <div><h6>$15.4</h6><h5>Total profit</h5></div></div>



        </div>
      

        
          <div className={dashboardStyles.chart}>
      <Chart type="line" 
     series={series} options={options}/>
        </div>
        </div>
        <div className={dashboardStyles.Container}>
        <div className={dashboardStyles.linkCont}>
<h6>Notifications</h6>
<div>
  <Notification/>
  </div>
  </div>
  <div className={dashboardStyles.Cont} >
    <h6>Today</h6>
<div>
  <p>Figma class <span>3:00pm</span> </p>
  <p>Javacript class <span>1:00pm</span> </p>
  <p>React class <span>3:00pm</span> </p>
  <p>Product design class <span>1:00pm</span> </p>

</div>
  </div>
  </div>
       </div>
        </div>
     
      </div>
   
      </div>
  
    </div>
  )
}
    

export default Dashboard;