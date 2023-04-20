import React from 'react';
import Style from './Home.module.css'

import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Button from '../../components/Button';


export default function Home() {
  const navigate = useNavigate()
  const isLogin = localStorage.getItem('logged')
  function handleNavClick() {
    navigate('/registation')
  }

  return (
    <>
    <div className={Style.homeImg}>
      <Navbar/>

      <div className={Style.homeContent}>
        <h1>IT'S ALL ABOUT WHAT YOU CAN ACHIEVE</h1>
        <span>Empower Yourself to make the changes you need to make </span> <br />
        { isLogin ? <Button name= 'Hello User' /> : <Button onClick={handleNavClick} name='Join With Us' />}
        
      </div>

    </div>
    <Footer/>
    </>
  )
}