import React, { useState } from "react";
import logo from "../assets/icons/spotify-logo.svg";
import "../style/login.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";

const Login = () => {
  const { login, error, setError } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const HandleLogin = () => {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    login(formData, email);
  };

  return (
    <div className="regestration">
      <video
        className="video"
        src="https://thumbs.gfycat.com/AnimatedPoliticalEider-mobile.mp4"
        autoPlay
        muted
        loop
      ></video>
      <img className="logo" src={logo} alt="" />
      <h1>Sign in for free to start listening.</h1>
      <div className="login__panel">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          placeholder="What's your email"
          type="email"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          placeholder="Create a password"
          type="password"
        />
        <button onClick={HandleLogin} className="rgs__btn">
          SIGN IN
        </button>
        <Link to="/passwordreset">Forgot your password?</Link>
      </div>
    </div>
  );
};
export default Login;
