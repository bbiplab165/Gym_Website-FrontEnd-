import React, { useState } from 'react';
import Style from './Login.module.css';
import { Link } from 'react-router-dom';




function LoginPage() {
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  function handleEmailChange(event) {
    setUserEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLogin(event) {
    event.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = storedUsers.find(user => user.email === email && user.password === password);

    if (existingUser) {
      const confirmation = window.confirm('Login successfully! Click OK to go to Home page.');
      if (confirmation) {
        localStorage.setItem('logged', true)
        window.location.href = '/';
      }
    } else {
      setLoginError('Email or Password is incorrect');
    }
  } 

  return (
    <div className={Style.container}>
<div className={Style.leftDiv}>
        <img src="https://wallpaper.dog/large/20502651.jpg" alt='wallpaper'/>
      </div>
      <div className={Style.form}>
        <h1>Login </h1>
        <form onSubmit={handleLogin} className={Style.data}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required="true" /><br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required="true" /><br />

          {loginError && <span>{loginError}</span>}
          
          <button type="submit">Login</button>
          
          < p>Don't have an account? <Link to="/registation">Register here</Link>.</p>
        </form>
        
      </div>
    </div>
  );
}

export default LoginPage;
