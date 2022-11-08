import React from 'react'
import { BsPeople, BsPerson } from 'react-icons/bs';
import { FaChartBar, FaHome } from 'react-icons/fa';
import {IoMdChatbubbles, IoMdNotifications,IoMdAnalytics, IoMdSettings, IoIosPeople, IoIosPerson } from "react-icons/io"
import {MdDashboard, MdAttachMoney} from "react-icons/md"
export const  NavData = [
    {
        icon:<MdDashboard/>,
        text:"Home",
        path:"/dashboard"
    },
     {
        icon:<IoIosPerson/>,
        text:"Profile",
        path:"/profile"
    },
    {
        icon:<IoIosPeople/>,
        text:"Community",
    path:"/home"
    },

    {

        icon:<MdAttachMoney/>,
        text:"Payment",
        path:"/wallet"
    },
    {

        icon:<IoMdAnalytics/>,
        text:"Analytics",
        path:"/analytics"
    },
    {

        icon:<IoMdSettings/>,
        text:"Setting",
        path: "/setting"
    },
    {

        icon:<IoMdSettings/>,
        text:"Modal",
        path: "/modal"
    }
]

