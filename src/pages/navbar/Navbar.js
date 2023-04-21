import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Style from './Navbar.module.css'
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi';
// import {FaUser} from 'react-icons/fa';


export default function Navbar() {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)
  const isLogin = JSON.parse(localStorage.getItem('logged'));
  // const userName = JSON.parse(localStorage.getItem('users'))
  // console.log(userName[0].username)

  function handleLogout() {
    localStorage.removeItem('logged')
    navigate('/login')
  }
  return (
  <>
    <div className={Style.main_Navdiv}>
      {/* <div className={Style.userlogo}>
        <p><FaUser/></p> 
        
        </div> */}
      <div className={Style.logo}>

        <Link to='/' style={{ textDecoration: 'none' }}> <h1>GYM</h1> </Link>
      </div>
      {/* <div className={isMobile ? Style.icon : Style.hideIcon}>
        <h1> NGE<span>GYM</span>💪 </h1>
      </div> */}
      <div >
        <ul className={Style.link_div} >

          <Link to='/aboutUs' style={{ textDecoration: 'none' }} ><li>About Us</li></Link>
          <Link to='/programs' style={{ textDecoration: 'none' }}><li>Program</li></Link>
          <Link to='/training' style={{ textDecoration: 'none' }}><li>Training</li></Link>
          <Link to='/pricing' style={{ textDecoration: 'none' }}><li>Pricing</li></Link>

        </ul>
      </div>
      <div className={Style.btn_div} >
        {isLogin ? <button className={Style.btn} onClick={handleLogout}>Logout</button> : <button className={Style.btn} onClick={() => navigate('/login')}>Login</button>}
      </div>
      <div className={Style.menuIcon} >
        {isMobile ? <HiMenuAlt3 onClick={() => setIsMobile(false)} /> : <HiMenu onClick={() => setIsMobile(true)} />}
 

      </div>
      

    </div>
    <div className={isMobile ? Style.mobileLink : Style.hideIcon}>
        <div>
          <Link to='/' style={{ textDecoration: 'none' }}><p>Home</p></Link>
          <Link to='/aboutUs' style={{ textDecoration: 'none' }}><p>AboutUs</p></Link>
          <Link to='/programs' style={{ textDecoration: 'none' }}><p>Program</p></Link>
          <Link to='/training' style={{ textDecoration: 'none' }}><p>Training</p></Link>
          <Link to='/pricing' style={{ textDecoration: 'none' }}><p>Pricing</p></Link>
          <Link to='/login' style={{ textDecoration: 'none' }}><p>Login</p></Link>
        </div>
      </div>
    </>
  )
}