import React from 'react'
// import { BsPeople, BsPerson } from 'react-icons/bs';
// import { FaChartBar, FaHome } from 'react-icons/fa';
import { IoMdSettings, IoIosPerson } from "react-icons/io"
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

        icon:<MdAttachMoney/>,
        text:"Payment",
        path:"/wallet"
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

