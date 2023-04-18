import React, { useState } from 'react';
import Style from './Login.module.css'

export default function Registation() {
    const[firstName, setfirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    function handleForm(e){
        e.preventDefault()
        setfirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }

  return (
    <div>
      <form className={Style.main_login} onSubmit={handleForm}>
         <input type='text' placeholder='First Name' value={firstName}  onChange={(e)=>setfirstName(e.target.value)} /> <br />
         <input type='text' placeholder='Last Name' value={lastName}  onChange={(e)=>setLastName(e.target.value)} /> <br />
         <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
         <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/> <br />
         <button className={Style.btn} type='submit'> Register </button>

      </form>
    </div>
  )
}
