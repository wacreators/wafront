import React from 'react'
import '../@styles/Setting.css'
import Nav from '../@components/Sidebar'


const Setting = () => {
  return (
    <div className='setting'>
      <Nav 
        heading="Settings"
      />
      <div className="sub-setting">
        <div className="group">
          <div className="inp">
            <label>Change group subject</label>
            <input type="text" placeholder='input group new subject' />
          </div>
          <div className="inp">
            <label>Change group description </label>
            <textarea type="text" placeholder='input group new description' ></textarea>
          </div>
          <div className="inp">
            <label>Set auto remove un-active members after</label>
            <select>
              <option value="">default</option>
              <option value="">2weeks</option>
              <option value="">3weeks</option>
              <option value="">1month</option>
              <option value="">2month</option>
            </select>
          </div>
        </div>
        <div className="group">
          <div className="inp">
            <label>Set time for only admin can text</label>
            <input type="time" placeholder='input group new title' />
          </div>
          <div className="inp">
            <label>Change profile image</label>
            <input type="file" placeholder='input group new title' />
          </div>
          <div className="inp">
            <label>Change price</label>
            <input type="number" placeholder='input group new title' />
          </div>
        </div>
        <div className="group">
          <div className="inp">
            <label>Change group title</label>
            <input type="text" placeholder='input group new title' />
          </div>
          <div className="inp">
            <label>Change group title</label>
            <input type="text" placeholder='input group new title' />
          </div>
          <div className="inp">
            <label>Change group title</label>
            <input type="text" placeholder='input group new title' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting