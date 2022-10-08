import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Landing from './Pages/Landing';
import Register from './Pages/Register';
import Loader from "./Pages/Loader"
import Signin from "./Pages/Signin"
import { useState,useEffect } from 'react';
import Profile from './Pages/Profile';
// import Layout from './Layout';
import Setting from './Pages/Setting';
import Notification from './Pages/Notification';
import Message from './Pages/Message';
import Group from './Pages/Group';
import GroupAlert from './Pages/GroupAlert';
import Wallet from './Pages/Wallet';
import Home from './Pages/Home';

import Verify from './@components/Verify';

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
  setTimeout(() =>{
    setLoading(false);
  }, 4000);
  }, []);
  
  return (
    <BrowserRouter>
      <div className="app">
        {
          loading ? (<Loader/>):
        
          <Routes>
            {/* <Route element={<Layout />}> */}
              <Route path="/" element={<Landing/>}></Route>
              <Route path="register" element={<Register/>}></Route>
              <Route path="signin" element={<Signin/>}></Route>
              <Route path="profile" element={<Profile/>}></Route>
              <Route path="setting" element={<Setting />}></Route>
              <Route path="notification" element={<Notification />}></Route>
              <Route path="message" element={<Message />}></Route>
              <Route path="group" element={<Group />}></Route>
              <Route path="alert" element={<GroupAlert />}></Route>
              <Route path="wallet" element={<Wallet />}></Route>
              <Route path="home" element={<Home />}></Route>
              <Route path="verify" element={<Verify/>}></Route>

    
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
