import React from 'react'
import "./Dashboard.css"
import {IoMdNotificationsOutline} from "react-icons/io"
import {MdOutlineContentCopy, MdPerson, MdSettings} from 'react-icons/md'
import {BsPerson} from "react-icons/bs"
import ApexCharts from 'apexcharts'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Sidebar from "../@components/Sidebar"

const Dashboard = () => {
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

  return (
    <div className='dashboard'>
      <Sidebar/>
      <div className='dashboard-container'>
        <div className='dashboard-nav'>
          <IoMdNotificationsOutline className='dashboard-icon'/>
          <BsPerson className='dashboard-icon'/>
          <p>Sam</p>
        </div>
        <div className='greeting'>
          <h6 >Good {timeDay}, Sam </h6>
          <p>Here is where you monitor your users and your progress rate.</p>
        </div>
        <h5>Introduction to UI/UX</h5>
        <div className='overview'>
          <div id='chart'>

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
        
      </div>
    </div>
  )
}

export default Dashboard;