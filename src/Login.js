import React, { useState } from 'react'
import './CSS/Login.css';
import amazon_logo from "./Images/amazon-logo.jpeg";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
  }

  const register = e => {
    e.preventDefault();
  }
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src={amazon_logo} alt='amazon-logo'></img>
      </Link>

      <div className='login__container'>
        <h1>Sign in</h1>

        <form>
          <h5>E-email</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>
          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
          <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
        </form>
        <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use and Sale. 
            Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        
      </div>
      <div className='new__to__amazon'>
        <hr></hr>
        <h5>New to Amazon?</h5>
        <hr></hr>
      </div>
      <button className='login__registerButton' onClick={register}>Create Your Amazon Account</button>
    </div>
  )
}

export default Login