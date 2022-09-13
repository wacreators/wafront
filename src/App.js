import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Landing from './Pages/Landing';
import Register from './Pages/Register';
import Loader from "./Pages/Loader"
import Signin from "./Pages/Signin"
import { useState,useEffect } from 'react';
import Profile from './Pages/Profile';

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
      <Route path="/" element={<Landing/>}></Route>
    <Route path="register" element={<Register/>}></Route>
    <Route path="signin" element={<Signin/>}></Route>
    <Route path="profile" element={<Profile/>}></Route>



  </Routes>
}
    </div>
    </BrowserRouter>
  );
}

export default App;
