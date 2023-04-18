import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Style from './Navbar.module.css'

export default function Navbar() {
    const navigate= useNavigate()
  return (
    <div className={Style.main_Navdiv}>
        <div className={Style.logo}> 
            <Link to='/'> <h1>GYM</h1> </Link>
        </div>
    <div >
      <ul className={Style.link_div}>
        
        <Link to='/aboutUs'><li>About Us</li></Link>
        <Link to= '/programs'><li>Program</li></Link>
        <Link to='/training'><li>Training</li></Link>
        <Link to='/pricing'><li>Pricing</li></Link>

      </ul>
    </div>
    <div >
        <button className={Style.btn} onClick={() => navigate('/login')}>Login</button>
    </div>
    </div>
  )
}
