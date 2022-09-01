import React, { useState } from 'react'
import logo from '../assets/icons/spotify-logo.svg'
import '../style/regestration.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContextProvider'

const Regestration = () => {
  const { register, error } = useAuth()

  const [email, setEmail] = useState()
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirm, setPasswordConfirm] = useState()

  console.log(email)
  console.log(userName)
  console.log(passwordConfirm)
  console.log(password)

  function handleSave() {
    if (!email.trim() ||  !password.trim() || !passwordConfirm.trim()) {
      alert('Fill in all the fields')
      return
    }

    let formData = new FormData()
    formData.append('email', email)
    formData.append('username', userName)
    formData.append('password_confirm', passwordConfirm)
    formData.append('password', password)

    register(formData)
  }
  return (
    <div className="regestration">
      <video className="video" src='https://thumbs.gfycat.com/AnimatedPoliticalEider-mobile.mp4' autoPlay muted loop></video>

      <img className="logo" src={logo} alt="" />
      <h1>Sign up for free to start listening.</h1>
      <div className="regestration__panel">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          placeholder="What's your email"
          type="email"
        />

        <input
          onChange={(e) => setUserName(e.target.value)}
          className="input"
          placeholder="Create a username"
          type="text"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          placeholder="Create a password"
          type="password"
        />

        <input
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="input"
          placeholder="Confirm your password"
          type="password"
        />
{/*  */}
        <button onClick={handleSave} className="rgs__btn">
          SIGN UP
        </button>
        {error ? <span className='error__msg'>{error[0]}</span> : null}
        <Link to="/login">do you already have an account?</Link>

      </div>
    </div>
  )
}

export default Regestration