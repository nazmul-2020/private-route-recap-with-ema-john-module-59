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
                            <input type="email" name="email" id="" placeholder='Write Your Email' />
                        </div>
                        <div className="input-grope">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="" placeholder='Enter Your password' />
                        </div>
                        <input className="form-submit" type="submit" value="Login" />
                    
                    <p>New to Ema-john? <Link className='form-link' to='/signup'>Create New Account</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;