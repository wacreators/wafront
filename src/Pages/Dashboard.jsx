import React from 'react'
import "./Dashboard.css"
import {IoMdNotificationsOutline} from "react-icons/io"
import {BsPerson} from "react-icons/bs"
import ApexCharts from 'apexcharts'

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
    text: 'Students Analyst',
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
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();








  var options = {
    series: [{
      name: "Desktops",
      data: [5, 6, 1, 20, 78, 100, 45, 90, 148]
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
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
  };
  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();

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

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;