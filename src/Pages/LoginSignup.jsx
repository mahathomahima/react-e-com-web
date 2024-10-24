import { Component } from 'react'
import React from 'react'
import './CSS/LoginSignup.css'

class LoginSignup extends Component {

  state = {
    isLogin: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}));
  }

  render(){
    const {isLogin} = this.state
    return (
      <div className='loginsignup'>
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" className="login-image" alt="website login"/>
        <div className="form-container">
          <div className='form-toggle'>
            <button className={isLogin? "active" : ""} onClick={this.onClickButton}>Login</button>
            <button className={!isLogin? "active" : ""} onClick={this.onClickButton}>SignUp</button>
          </div>
          {isLogin ? 
          <>
          <div className="loginsignup-fields">
            <h2>Login Form</h2>
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
            <a href='/login'>Forgot Password?</a>
            <button className="button">Login</button>
          </div>
          </>:
          <>
          <div className="loginsignup-fields">
            <h2>SignUp Form</h2>
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
            <button className='button'>Login</button>
            <p className="loginsignup-login">
            Already have an account? <span>Login Here</span>
            <div className='loginsignup-agree'>
              <input type="checkbox" name="" id='' />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
          </p>
          </div>
          </>
          }
        </div>
      </div>
    )
  }

}

export default LoginSignup