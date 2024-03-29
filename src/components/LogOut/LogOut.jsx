import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './LogOut.css'
import { AuthContext } from '../../provider/AuthProvider';
const LogOut = () => {

    const [error, setError] = useState("")
    const {createUser} = useContext(AuthContext)
    // console.log(createUser)
    const handelLogOut =(event) =>{
        event.preventDefault()
        const form = event.target  
        const email = form.email.value 
        const password = form.password.value 
        const conform = form.confirm.value
        setError('')
        console.log(email, password,conform)
        if(password !== conform){
            setError("Your password not match")
            return
        }
      else if(password.length < 6){
            setError("Your password 6 number need")
            return
        }

        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error =>{
            setError(error.message)
        })

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
                <label htmlFor="confirm">confirm Password</label>
                <input placeholder='Your password' type="password" name="confirm" id="confirm" />
            </div>
            <input className='btn-submit' type="submit" value="Register" />
        </form>
        <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
        <p className='text-error'>{error}</p>
    </div>
    );
};

export default LogOut;