import React from 'react';
import logo from '../Image/logo.png';
import './Login.css';

function Login()  {
    return (
        <div className="login_page">
            <div className='login_container'>
                <div className='login_logo'>
                    <img src={logo} />
                </div>
                <div className='login_form'>
                    <h1>Sign-in</h1>
                    <form>
                        <label>E-mail</label>
                        <input type='text' />
                        <label>Password</label>
                        <input type='password' />
                        <button className='login'>Sign in</button>
                    </form>
                    <p>By signing-in you agree to Amazon's Conditions of
                            Use & Sale. Please see our Privacy Noctice, our 
                            Cookies Noctice and our Interest-Based Ads Noctice.
                    </p>
                    <button className='register'>Create your Amazon Account</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
