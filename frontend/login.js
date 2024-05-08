// Login.js (frontend component)

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './app.css'; 

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data); 
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <div className="title">
        <ul>
          <li><b><i>Positivity</i></b></li>
          <li><b><i>Focus</i></b></li>
          <li><b><i>Consistency</i></b></li>
          <li><b><i>Determination</i></b></li>
          <li><b><i>Confidence</i></b></li>
          <li><b><i>Persistence</i></b></li>
        </ul>
      </div>
      <div className="main">
        <div className="wrapper"> 
          <form method="post" action="{{ route('login.process') }}">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" name="username" placeholder="username" required />
            </div>
            <div className="input-box">
              <input type="password" name="password" placeholder="password" required />
            </div>
            <div className="remember-forget">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#">Forgot Password ?</a>
            </div>
            <br />
            <button type="submit" className="btn">Login</button>
            <br />
            <br />
            <div className="register-link">
              <p>Don't have an account ? <a href="#">Register Here</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
