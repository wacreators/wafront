import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import '../@styles/Register.css';
import 'react-phone-input-2/lib/style.css';

import PhoneInput from 'react-phone-input-2';

const Register = () => {
	const [valuePhone, setValuePhone] = useState("");
	const navigate = useNavigate();

	const handleHome = () => {
		navigate('/');
	};
	const handleVerify = () =>{
		navigate("/verify")
		

	}
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
					<h3>Welcome</h3>
					<form>
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
												border:"2px solid #128c7e",
												backgroundColor:"red",
												borderRadius: 5,

												border:"none",
												backgroundColor:"transparent",
												borderRadius:1,
												borderBottom:"2px solid #128c7e",


											}}
											
											
											
										/>{' '}
									</div>
									
								</div>
							</div>
							<div className='input-group'>
								<label>Email</label>
								<input type='email' />
							</div>
						

							<div className='input-btn'>
								<button onClick={handleVerify} className='submit'>Register</button>
							</div>

							<div className='footer'>
								<p>Already have an account? <Link to='/signin' className='link'>
										  Sign in
									</Link>{' '}
									now.
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
