import React from 'react'
import { BsPeople, BsPerson } from 'react-icons/bs';
import { FaChartBar, FaHome } from 'react-icons/fa';
import {IoMdChatbubbles, IoMdNotificationsOutline,IoMdAnalytics } from "react-icons/io"
import {MdOutlineAttachMoney} from "react-icons/md"
import {GrAnalytics} from "react-icons/gr"
export const  NavData = [
    {
        icon:<FaHome/>,
        text:"Home",
        to:"/dashboard"
    }, {
        icon:<BsPerson/>,
        text:"Profile",
        to:"/profile"
    },
    {
        icon:<BsPeople/>,
        text:"Community",
    to:"/home"
    },
    {

        icon:<IoMdNotificationsOutline/>,
        text:"Notification",
        to:"/notification"
    },
    {

        icon:<MdOutlineAttachMoney/>,
        text:"Payment",
        to:"/payment"
    },
    {

        icon:<IoMdAnalytics/>,
        text:"Analytics",
        to:"/analytics"
    },
    {

        icon:<IoMdChatbubbles/>,
        text:"Chat",
        to: "/chat"
    },
]

