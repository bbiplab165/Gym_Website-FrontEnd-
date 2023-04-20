import React from 'react';
import {Outlet, Navigate} from 'react-router-dom'

export default function ProtectsRoutes() {
    const isLogin = localStorage.getItem('logged') 
  return (
    
       isLogin ?  <Navigate to='/'/> : <Outlet/> 
  )
  
}
