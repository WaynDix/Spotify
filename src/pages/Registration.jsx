import React from 'react'
import logo from '../assets/icons/spotify-logo.svg'
import '../styles/regestration.css'
import {Link} from 'react-router-dom'
const Regestration = () => {
  return (
    <div className='regestration' >
 <img className='logo' src={logo} alt="" />
 <h1>Sign up for free to start listening.</h1>
    <div className='regestration__panel'>
 <input className='input' placeholder="What's your email" type="text" />
 <input className='input' placeholder="Confirm your email" type="text" />
 <input  className='input'  placeholder="Create a password"  type="password" />
 <button className='rgs__btn'>SIGN UP</button>
 <Link to='/'>
 do you already have an account?
 </Link>
    </div>
    </div>
  )
}

export default Regestration