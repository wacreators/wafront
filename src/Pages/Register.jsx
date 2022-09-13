import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import '../@styles/Register.css';
import "react-phone-number-input/style.css"
import PhoneInput from 'react-phone-number-input';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import flags from 'react-phone-number-input';

const Register = () => {

	const [value, setValue] = useState()
  const navigate = useNavigate();

  const handleHome = () =>{
    navigate("/");

  }
	return (
		<div className='sign'>
			<div className='sign-container'>
        <div className='arrow'>
          <BsArrowLeft color={"#128c7e"} size={20} onClick={handleHome}/></div>
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
										<PhoneInputWithCountrySelect defaultCountry='' className='phoneInput' flags={flags} value={value} onChange={setValue}/>
									</div>
									<div className='tel-2'>
									<input value={value} onChange={setValue}/>
									</div>
								</div>
							</div>
							<div className='input-group'>
								<label>Email</label>
								<input type='email' />
							</div>
							<div className='input-group'>
								<label>Password</label>
								<input type='password' />
							</div>

							<div className='input-btn'>
								<button className='submit'>Login</button>
							</div>

							<div className='footer'>
								<p>
									Already have an account?
									<Link to='/signin' className='link'>
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
