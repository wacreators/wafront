import React from 'react'
import '../@styles/Home.css'
import Group from '../@components/Group'
import NavBar from './NavBar';
import Sidebar from '../@components/Sidebar';
import {MdAddCircle} from 'react-icons/md'
import { Link } from 'react-router-dom'

function Home() {

    const data = [
        {
            members: 300,
            title: "Web Design",
            describe: "Advanced mobile interface design"
    
        },
        {
            members: 650,
            title: "Web Design",
            describe: "Advanced mobile interface design"
    
        },
        {
            members: 432,
            title: "Web Design",
            describe: "Advanced mobile interface design"
    
        },
        {
            members: 821,
            title: "Web Design",
            describe: "Advanced mobile interface design"
    
        },    {
            members: 821,
            title: "Web Design",
            describe: "Advanced mobile interface design"
    
        }
    ]

    const card = data.map((item) =>{
        return(
            <Group 
                members={item.members}
                title={item.title}
                describe={item.describe}
            />
        )
    })

  return (
    <div className='home-layout'>
        <Sidebar/>
        <div className='cont'>
            <div className='home'>
                <div className="sub-home">
                    <div className="create">
                        <Link to="/group">
                            <MdAddCircle fontSize="5rem" color='#ffffff' />
                        </Link>
                    </div>
                    {card}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
