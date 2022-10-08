import React from 'react'
import '../@styles/Home.css'
import Group from '../@components/Group'
import NavBar from './NavBar';

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
    <div className='home'>
        <NavBar 
            def="Hello"
            name="Obanla Samuel"
        />
        <div className="sub-home">
            {card}
        </div>
    </div>
  )
}

export default Home
