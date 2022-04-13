import React, { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handelEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handelPasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handelConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/')
    }

    const handelCreatUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError("your password is did not match")
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handelCreatUser}>

                    <h2 className='form-title'>Sign Up</h2>
                    <div className="input-grope">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="email" id="" placeholder='Write Your Email' required />
                    </div>
                    <div className="input-grope">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handelPasswordBlur} type="password" name="password" id="" placeholder='Enter Your password' required />
                    </div>
                    <div className="input-grope">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handelConfirmPassword} type="password" name="confirm-password" id="" placeholder='Enter Your password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
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