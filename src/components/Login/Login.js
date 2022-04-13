import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <form action="">

                    <h2 className='form-title'>Login</h2>
                    <div className="input-grope">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Write Your Email' required />
                    </div>
                    <div className="input-grope">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" placeholder='Enter Your password' required/>
                    </div>
                    <input className="form-submit" type="submit" value="Login" />
                </form>
                <p>New to Ema-john? <Link className='form-link' to='/signup'>Create New Account</Link></p>
                
                <div className='ddd'>
                    <hr className='ss' />
                    <p>or</p>
                    <hr className='ss' />
                </div>

                <div>
                    <input className='form-submit-google' type="submit" value="Continue with Google" />
                </div>
            </div>
        </div>
    );
};

export default Login;