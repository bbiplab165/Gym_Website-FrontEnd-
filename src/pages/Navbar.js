import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Style from './Navbar.module.css'

export default function Navbar() {
    const navigate= useNavigate()
  return (
    <div className={Style.main_Navdiv}>
        <div className={Style.logo}> 
            <h1>GYM</h1>
        </div>
    <div >
      <ul className={Style.link_div}>
        <Link to='/'> <li>Home</li></Link>
        <Link to='/aboutUs'><li>About Us</li></Link>
        <Link to= '/classes'><li>Classes</li></Link>
        <Link to='/blogs'><li>Blogs</li></Link>
      </ul>
    </div>
    <div >
        <button className={Style.btn} onClick={() => navigate('/login')}>Login</button>
    </div>
    </div>
  )
}
