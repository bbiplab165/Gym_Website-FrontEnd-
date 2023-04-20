import React from 'react';
import {Outlet, Navigate} from 'react-router-dom'

export default function ProtectsRoutes() {
    const isLogin = localStorage.getItem('loggedin')
  return (
       isLogin ? <Outlet/> : <Navigate to='/login' />
  )
  
}
