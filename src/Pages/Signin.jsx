import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import '../@styles/Register.css';
import '../@styles/Register.css';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';



const Signin = () => {

	const [valuePhone, setValuePhone] = useState("");

	const navigate = useNavigate()
	const handleVerify = () =>{
		navigate("/verify")
		
		
	}
	
	const handleHome = () => {
		navigate('/');
	};
	return (
		<div className='sign'>
			<div className='sign-container'>
			<div className='arrow-icon'>
					<BsArrowLeft color={'#128c7e'} size={20} onClick={handleHome} />
				</div>
				<div className='sign-app'>
					<h1>Payklas</h1>
				</div>
				<div className='sign-layout'>
					<h3>Welcome back</h3>
					<form>
						<div className='form-heading'>
							<div className='link-title'>
								<p className='active'>Sign in to your account</p>
							</div>
						</div>

						<div className='input-groups'>
							<div className='input-group'>
								<label>Phone</label>
								<div className='input-phone-number'>
									<div className='tel-1'>
									<PhoneInput
											country={'ng'}
											value={valuePhone}
											onChange={setValuePhone}
											inputProp={{
												required: true,
												autoFocus:true,

											}}
											containerStyle={{
												width:"300px",

											}}
											inputStyle={{
												border:"none",
												borderBottom:"2px solid #128c7e",
												borderRadius:1,
												margin:"1rem 0" ,
												outline:"none",
												


											}}
										dropdownStyle={{
											width:"300px",

										}}
											
											buttonStyle={{
												width:"300px",
												outline:"none",
												border:"none",
												backgroundColor:"transparent",
												borderRadius:1,
												borderBottom:"2px solid #128c7e",

											}}
											
								
											
										/>
										</div>
								</div>
							</div>
							

							<div className='input-btn'>A
								<button className='submit' onClick={handleVerify}>Login</button>
							</div>
							<div className='footer'>
								<Link to="/forgotPassword"  className='forgot'>Forgot Password</Link>
							</div>
							<div className='footer'>
								<p>Don't you have an account?  <Link to='/register' className='link'>
										 Sign up
									</Link>
									.
									
								</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signin;
