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
      const confirmation = window.confirm('User Login successfully! Click OK to go to home page.');
      if (confirmation) {
        window.location.href = '/';
      }
    } else {
      setLoginError('Email or Password is incorrect');
    }
  }

  return (
    <div className={Style.container}>
      <h1>Login </h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required="true" /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required="true" /><br />
        < p>Don't have an account? <Link to="/registation">Register here</Link>.</p>
        {loginError && <span>{loginError}</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;

