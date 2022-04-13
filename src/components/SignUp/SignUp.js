import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    
    return (
        <div className='form-container'>
            <div>
                <form action="">

                    <h2 className='form-title'>Sign Up</h2>
                    <div className="input-grope">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Write Your Email'required />
                    </div>
                    <div className="input-grope">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" placeholder='Enter Your password'required />
                    </div>
                    <div className="input-grope">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password" id="" placeholder='Enter Your password' required />
                    </div>
                    <input className="form-submit" type="submit" value="Sign Up" />
                </form>
                <p>Already have an account?<Link className='form-link' to='/login'>Login</Link></p>
                
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

export default SignUp;