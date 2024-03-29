import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login Please</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input placeholder='Your email' type="email" name="email" id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input placeholder='Your password' type="password" name="password" id="password" />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-john? <Link to='/logout'>Create New Account</Link></small> </p>
        </div>
    );
};

export default Login;