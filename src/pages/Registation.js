import React, { useState } from 'react';
import Style from './Login.module.css'

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleRegistration(event) {
    event.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = storedUsers.find(user => user.username === username || user.email === email);

    if (existingUser) {
      setRegistrationError('Username or email already exists');
      return;
    }

    if (password !== confirmPassword) {
      setRegistrationError('Passwords do not match');
      return;
    }

    const newUser = { username, email, password };

    const updatedUsers = [...storedUsers, newUser];

    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Redirect to login page or do some other action

  }

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleRegistration}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} /><br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} /><br /><br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} /><br /><br />
        {registrationError && <p>{registrationError}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;


