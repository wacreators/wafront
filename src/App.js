import './App.css';
import {Routes, Route, BrowserRouter,HashRouter} from "react-router-dom"
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
import Chat from "./Pages/Chat";
import Verify from './@components/Verify';
import Dashboard from './Pages/Dashboard';
import Analytics from "./Pages/Analytics";
import { Suspense } from 'react';
import SideBar from './@components/Sidebar';
import Modal from './@components/Modal';
import NotFound from './Pages/NotFound';

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
  setTimeout(() =>{
    setLoading(false);
  }, 4000);
  }, []);
  
  return (
    <div className="app">
    <HashRouter>
          <Routes>
              <Route path="/" index element={<Landing/>}/>
              <Route path="register" element={<Register/>}></Route>
              <Route path="/signin" element={<Signin/>}></Route>
              <Route path="/verify" element={<Verify/>}></Route>

              <Route path="dashboard"  element={<Dashboard/>}/>
              <Route path="profile" element={<Profile/>}></Route>
              <Route path="/setting" element={<Setting />}></Route>
              <Route path="/notification" element={<Notification />}></Route>
              <Route path="/message" element={<Message />}></Route>
              <Route path="/group" element={<Group />}></Route>
              <Route path="/alert" element={<GroupAlert />} />
              <Route path="/wallet" element={<Wallet />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/analytics" element={<Analytics />}></Route>              
              <Route path="/home" element={<Home />}></Route>
              <Route path="/chat" element={<Chat/>}></Route>
              <Route path="/modal" element={<Modal/>}></Route>

              <Route path='*' element={<NotFound />} />


          </Routes>


    </HashRouter>
    </div>
  );
}

export default App;
