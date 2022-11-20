<<<<<<< HEAD
import React from 'react'
import "./Dashboard.css"
import {IoMdNotificationsOutline} from "react-icons/io"
import {MdOutlineContentCopy, MdPerson, MdSettings} from 'react-icons/md'
import {BsPerson} from "react-icons/bs"
import ApexCharts from 'apexcharts'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
=======
>>>>>>> 01ae825f22af03157565baa86f38bc33b61aa3c2

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

<<<<<<< HEAD

  

  useEffect(() => {
    var options = {
      series: [{
        name: "Students",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
      chart: {
      height: 240,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Enrolment Analyst',
      align: 'left',
      fontSize: '20px'
    },
    grid: {
      row: {
        colors: ['#e2faf0', 'transparent'], // takes an array which will be repeated on columns
        // opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
    };
    var char = new ApexCharts(document.querySelector("#chart"), options);
    char.render();
  }, [])








  // useEffect(() => {
  //   var options = {
  //     series: [{
  //       name: "Amount",
  //       data: [5, 6, 1, 20, 78, 100, 45, 90, 148]
  //   }],
  //     chart: {
  //     height: 240,
  //     type: 'line',
  //     zoom: {
  //       enabled: false
  //     }
  //   },
  //   dataLabels: {
  //     enabled: false
  //   },
  //   stroke: {
  //     curve: 'straight'
  //   },
  //   title: {
  //     text: 'Payment Analyst',
  //     align: 'left',
  //     fontSize: '20px'
  //   },
  //   grid: {
  //     row: {
  //       colors: ['#e2faf0', 'transparent'], // takes an array which will be repeated on columns
  //       opacity: 0.5
  //     },
  //   },
  //   xaxis: {
  //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  //   }
  //   };
  //   var chart = new ApexCharts(document.querySelector("#chart2"), options); 
  //   chart.render();
  // }, [])

=======
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
>>>>>>> 01ae825f22af03157565baa86f38bc33b61aa3c2
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


<<<<<<< HEAD
          </div>
          <div id='chart2'>
            <h4>Course Details</h4>
            <p>kjfjds jgjd gdgkgkldgj gk dgjg fgf j j gggjklsg ggg k jk kjfjds hfghf jgjd gdgkgkldgj gk gk dgjg gffj j gggjklsg ggg k jkghg kjfjds jgjd gdg kldgj gk gk dgjg j j gggj ggf klsg ggg k jk </p>
            <div className="link">
              <input type="text" value="https://payklass/ui-ux/sfjsjfjssfjjdkgjksgjhjghsghhfkhfkhkdhgkhghhg" />
              <button><MdOutlineContentCopy /></button>
            </div>
            <div className="but">
              <Link to="">
                <div className="student">
                  <p>Members</p>
                  <MdPerson fontSize="15px" color='#373d3f'/>
                </div>
              </Link>
              <Link to="/setting">
                <div className="student">
                  <p>Settings</p>
                  <MdSettings fontSize="15px" color='#373d3f'/>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
=======

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
     
>>>>>>> 01ae825f22af03157565baa86f38bc33b61aa3c2
      </div>
   
      </div>
  
    </div>
  )
}
    

export default Dashboard;