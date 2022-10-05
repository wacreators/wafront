import React from 'react'
import '../@styles/Home.css'
import notice from '../@assests/Settings Information Icons.png'
import Group from '../@components/Group'

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
        <div className="nav-bar">
            <header>
                <div className="content">
                    <span>Hello</span>
                    <h1>Obanla Samuel</h1>
                </div>
                <img src={notice} alt="" />
            </header>
            <div className="search">
                <input type="search" placeholder='Search Group' />
            </div>
        </div>
        <div className="sub-home">
            {card}
        </div>
    </div>
  )
}

export default Home
