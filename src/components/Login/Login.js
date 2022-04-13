import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handelEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handelPasswordBlur = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handelUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handelUserSignIn}>

                    <h2 className='form-title'>Login</h2>
                    <div className="input-grope">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="email" id="" placeholder='Write Your Email' required />
                    </div>
                    <div className="input-grope">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handelPasswordBlur} type="password" name="password" id="" placeholder='Enter Your password' required />
                        <p style={{ color: 'red' }}>{error?.message}</p>
                        {
                            loading && <p>Loading...</p>
                        }
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