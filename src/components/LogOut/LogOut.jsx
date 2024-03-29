import React from 'react';
import { Link } from 'react-router-dom';

const LogOut = () => {

    

    const handelLogOut =(event) =>{
        event.preventDefault()
        const form = event.target  
        const email = form.email.value 
        const password = form.password.value 
        const conform = form.conform.value

        console.log(email, password, conform)
    }


    return (
        <div className='form-container'>
        <h2 className='form-title'>Register Please</h2>
        <form onSubmit={handelLogOut}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input placeholder='Your email' type="email" name="email" id="email" />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input placeholder='Your password' type="password" name="password" id="password" />
            </div>
            <div className="form-control">
                <label htmlFor="conform">Conform Password</label>
                <input placeholder='Your password' type="password" name="conform" id="password" />
            </div>
            <input className='btn-submit' type="submit" value="Register" />
        </form>
        <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
    </div>
    );
};

export default LogOut;