import React from 'react';
import './Css/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>
          Sign up
        </h1>
        <div className="login-signup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" name="user-email" id="" placeholder='Email Address' />
          <input type="password" name="user-password" id="" placeholder='Password'/>
          <input type="password" name="confirm-password" id="" placeholder='Confirm Password'/>
        </div>
        <button>Continue</button>
        <p className="login-signup-login">Already have an account? <span> Login</span></p>
        <div className="login-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing , I agree to the terms of use & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup