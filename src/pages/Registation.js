import React, { useState } from 'react';
import Style from './Registation.module.css'
import { useNavigate, Link } from 'react-router-dom'

function RegistrationPage() {
    const naviagte = useNavigate()
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
        console.log(existingUser)


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

        if (username || email || password || confirmPassword) {

            localStorage.setItem('users', JSON.stringify(updatedUsers));

            naviagte('/login')
        }

        // Redirect to login page or do some other action

    }

    return (
        <div >
            <div className={Style.regis_formDiv}>
                <h1>Registration Page</h1>
                <form onSubmit={handleRegistration} >
                    {/* <label htmlFor="username">Username:</label> */}
                    <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} placeholder='username' /><br /><br />
                    {/* <label htmlFor="email">Email:</label> */}
                    <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} placeholder='Email' /><br /><br />
                    {/* <label htmlFor="password">Password:</label> */}
                    <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} placeholder='Password' /><br /><br />
                    {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
                    <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder='Confirm Password' /><br /><br />
                    {registrationError && <p>{registrationError}</p>}
                    <button className={Style.btn} type="submit">Register</button>
                </form>
                <p> Have already an account?
                    <Link to='/login'>Login here</Link>
                </p>
            </div>
        </div>
    );
}

export default RegistrationPage;


// className={Style.main_login}