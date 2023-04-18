import React, { useState } from 'react'
import Style from './Login.module.css'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [list, setList] = useState([])

  function handleForm(e) {
    e.preventDefault()
    const newList =
    {
    
      email,
      password
    }

    const updatedList = [...list, newList]
    setList(updatedList)
    
    localStorage.setItem('user', JSON.stringify(updatedList))
   
    setEmail('')
    setPassword('')


  }
  return (
    <div >

      <form className={Style.main_login} onSubmit={handleForm}>
        
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
        <button className={Style.btn} type='submit'> Submit </button>

      </form>
    </div>
  )
}
