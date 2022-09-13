import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import '../@styles/Register.css';

const Register = () => {

	const navigate = useNavigate()
	const handleProfile = () =>{
		navigate("/profile")
	}
	return (
		<div className='sign'>
			<div className='sign-container'>
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
										<input type='tel' placeholder='+234' />
									</div>
									<div className='tel-2'>
										<input type='tel' />
									</div>
								</div>
							</div>
							<div className='input-group'>
								<label>Password</label>
								<input type='password' />
							</div>

							<div className='input-btn'>
								<button className='submit' onClick={handleProfile}>Login</button>
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

export default Register;
