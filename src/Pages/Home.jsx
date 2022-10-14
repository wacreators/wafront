import React from 'react'
import '../@styles/Home.css'
import Group from '../@components/Group'
import NavBar from './NavBar';
import Nav from '../@components/Nav';

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
    <div className='cont'>
        <Nav/>

    <div className='home'>


        <div className="sub-home">
            {card}
        </div>
    </div>
    </div>
  )
}

export default Home
