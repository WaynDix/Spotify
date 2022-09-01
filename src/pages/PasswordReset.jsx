import React, { useState } from 'react'

import logo from '../assets/icons/spotify-logo.svg'
import '../style/passwordReset.css'
import { useAuth } from '../contexts/AuthContextProvider'
const PasswordReset = () => {
  const {  passwordReset,error} = useAuth();
 const [email,setEmail] = useState('')

  const HandlePasswordReset = () =>{
    let formData = new FormData
    formData.append("email", email);
    passwordReset(formData)
   }


  return (
    <div><div className='passwordReset'>
     <video className="video" src='https://thumbs.gfycat.com/AnimatedPoliticalEider-mobile.mp4' autoPlay muted loop></video>
    <img className="logo" src={logo} alt="" />
          <h1>Reset your password </h1>
          <div className='passwordReset__panel'>
          <input
           onChange={(e) => setEmail(e.target.value)}
          className="input"
          placeholder="What's your email"
          type="email"
        />
        <button className="rgs__btn" onClick={HandlePasswordReset} >
         Send password reset email
        </button>
        {error ? <span className='error__msg'>{error[0]}</span> : null}
          </div>
    </div></div>
  )
}

export default PasswordReset