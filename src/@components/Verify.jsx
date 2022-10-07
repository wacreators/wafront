import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VerificationInput from 'react-verification-input';
import "../@styles/Verify.css"

const Verify = () => {
const [code, setCode]= useState();
const [timer,  setTimer] = useState(50);
useEffect(() => {
const timing = timer > 0 && setInterval(() => setTimer(timer - 1), 1000)

  return () => clearInterval(timing)
}, [timer])


  const navigate = useNavigate()
   const handlePofile = () =>{
    navigate("/profile")
   }
   


  return (
    <div className='verify'>
      
    <div className='verify-container'>
    <h6>Enter verification code</h6>
    <p>We have sent you a verification code, kindly enter the code below.</p>
      <div className='verification'>
     <input type="tel"maxLength={1} />
     <input type="tel" maxLength={1}/>
     <input type="tel" maxLength={1}/>
     <input type="tel" maxLength={1}/>
     <input type="tel"maxLength={1} />
     <input type="tel" maxLength={1}/>

        </div>
        <div className='verify-block'>
        <p>The code expires in <span>10:{timer}</span>  </p>
        <button onClick={handlePofile} className='submit'> Submit</button>
        </div>
    </div>
    </div>
  )
}

export default Verify