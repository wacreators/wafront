import React from 'react'
import '../@styles/Group.css'
import Sidebar from '../@components/Sidebar'
import {useNavigate} from 'react-router-dom'

function Group() {
  const navigate = useNavigate();

  function alert(){
    navigate("/alert")
  }
  return (
    <div className='combine'>
    <Sidebar/>
    <div className='group'>
      
      <div className="sub-group">
        <div className="grid">
            <div className="g-title">
                <div className="img-div">
                    {/* <img src={img} alt="" /> */}
                    <p>Add image</p>
                </div>
                <input type="text" placeholder='Type group subject here...' />
            </div>
            <div className="g-disc">
              <input type="text" placeholder='Group descrition' />
              <small>Provide a discription about the group to enable user know more about the group.</small>
            </div>
        </div>
        <form onSubmit={alert}>
          <div className="card">
            <div className="text-div">
              <h2>Currency</h2>
            </div>
            <select id="" required>
              <option value="Naira">Naira</option>
              <option value="Dolar">Dolar</option>
              <option value="Pounce">Pounce</option>
              <option value="Yarn">Yarn</option>
              <option value="Cedis">Cedis</option>
            </select>
          </div>

          <div className="card">
            <div className="text-div">
              <h2>Amount</h2>
            </div>
            <input type="number" placeholder='0.00' required />
          </div>

          <div className="card">
            <div className="text-div">
              <h2>Period</h2>
            </div>
            <select id="" required>
              <option value="Naira">Weekly</option>
              <option value="Dolar">2Weeks</option>
              <option value="Pounce">Monthly</option>
              <option value="Yarn">2Month</option>
              <option value="Cedis">Half a year</option>
              <option value="Cedis">Yearly</option>
            </select>
          </div>

          <div className="card">
            <div className="text-div">
              <h2>Plan</h2>
            </div>
            <div className="one-time">
              <h2>1 time</h2>
              <input type="checkbox" />
            </div>
          </div>
          <input type="submit" value="Create" />
        </form>
      </div>
    </div>
    </div>

  )
}

export default Group
