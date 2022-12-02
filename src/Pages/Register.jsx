import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import '../@styles/Register.css';
import 'react-phone-input-2/lib/style.css';

// import PhoneInput from 'react-phone-input-2';

const Register = () => {
	const [phone, setValuePhone] = useState("");
	const [password, setValuePassword] = useState("");


	const handleLogin = async (e) =>{
		e.preventDefault();
		let result = await fetch("http://139.162.181.111/api/v1/account/register/",
		{
			method: "post",
			credencials: "include",
			body: JSON.stringify({ password, phone }),
			headers: {
				
			"content-Type": "application/json",
			}
		}
		);
		result = await result.json();
		console.warn(result);
		console.log(result);
	}
	const navigate = useNavigate();

	const handleHome = () => {
		navigate('/');
	};
	const handleVerify = () =>{
		// navigate("/verify")
	}
	return (
		<div className='sign'>
			<div className='sign-container'>
				<div className='arrow-icon'>
					<BsArrowLeft color={'#128c7e'} size={20} onClick={handleHome} />
				</div>
				<div className='sign-app'>
					<h1>Welcome</h1>
				</div>
				<div className='sign-layout'>
					{/* <h3>Welcome</h3> */}
					<form onSubmit={handleLogin}>
						<div className='form-heading'>
							<div className='link-title'>
								<p className='active'>Create a new account</p>
							</div>
						</div>

						<div className='input-groups'>
							<div className='input-group'>
								<label>Phone</label>
								<div className='input-phone-number'>
									<div className='tel-1'>
										<input
											onChange={(e) => setValuePhone(e.target.value)}
										/>
									</div>
									
								</div>
							</div>
							<div className='input-group'>
								<label>Password</label>
								<input type='password'
									value={password}
									onChange={(e) => setValuePassword(e.target.value)}
									 />
							</div>
						

							<div className='input-btn'>
								<button onClick={handleVerify} className='submit'>Register</button>
							</div>

							<div className='footer'>
								<p>Already have an account?</p>
									 <Link to='/signin' className='link'>
										  Sign in
									</Link>{' '}
								
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
