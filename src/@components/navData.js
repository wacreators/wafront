import React from 'react'
import { BsPeople, BsPerson } from 'react-icons/bs';
import {IoMdChatbubbles, IoMdNotificationsOutline} from "react-icons/io"
import {MdOutlineAttachMoney} from "react-icons/md"
export const navData = [
    {
        id:0,
        icon:<BsPerson/>,
        text:"User",
        to:"/profile"
    },
    {
        id:2,
        icon:<BsPeople/>,
        text:"Community",
        to:"/home"
    },
    {
        id:3,
        icon:<IoMdNotificationsOutline/>,
        text:"Notification",
        to:"/notification"
    },
    {
        id:4,
        icon:<MdOutlineAttachMoney/>,
        text:"Billing",
        to:"/payment"
    },
    {
        id:5,
        icon:<IoMdChatbubbles/>,
        text:"Chat",
        to:"/chat"
    }
]

