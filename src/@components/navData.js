import React from 'react'
import { BsPeople, BsPerson } from 'react-icons/bs';
import { FaChartBar, FaHome } from 'react-icons/fa';
import {IoMdChatbubbles, IoMdNotifications,IoMdAnalytics, IoMdSettings, IoIosPeople, IoIosPerson } from "react-icons/io"
import {MdDashboard, MdAttachMoney} from "react-icons/md"
import {GrAnalytics} from "react-icons/gr"
export const  NavData = [
    {
        icon:<MdDashboard/>,
        text:"Home",
        to:"/dashboard"
    }, {
        icon:<IoIosPerson/>,
        text:"Profile",
        to:"/profile"
    },
    {
        icon:<IoIosPeople/>,
        text:"Community",
    to:"/home"
    },
    {

        icon:<IoMdNotifications/>,
        text:"Notification",
        to:"/notification"
    },
    {

        icon:<MdAttachMoney/>,
        text:"Payment",
        to:"/payment"
    },
    {

        icon:<IoMdAnalytics/>,
        text:"Analytics",
        to:"/analytics"
    },
    {

        icon:<IoMdSettings/>,
        text:"Setting",
        to: "/setting"
    },
    {

        icon:<IoMdSettings/>,
        text:"Modal",
        to: "/modal"
    }
]

