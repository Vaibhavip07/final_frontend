import React from 'react'
import './navigation.css'
import { NavLink } from 'react-router-dom'
import Logo from './images/invlogo.jpeg'

const Navigation = () => {
  return (
    <div>
      
    <nav>
    <div className='logo-'>
    <img src={Logo}></img> 
    </div>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/userVIew'}>User</NavLink>
    <NavLink to={'/about'}>About us</NavLink>
    
    
  </nav>
  </div>
  )
}

export default Navigation