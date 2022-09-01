import React, { useState } from "react";
import logo from "../assets/icons/spotify-logo.svg";
import "../style/login.css";

import { useAuth } from "../contexts/AuthContextProvider";
const ConfirmPasswordReset = () => {
  const { confirmPasswordReset, error } = useAuth();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  const HandlePasswordResetConfirm = () => {
    let formData = new FormData();
    formData.append("token", token);
    formData.append("password", password);

    confirmPasswordReset(formData);
  };
  console.log(token);
  console.log(password);

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
      <h1>change your password</h1>

      <div className="login__panel">
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          placeholder="Enter a new password"
          type="password"
        />
        <input
          onChange={(e) => setToken(e.target.value)}
          className="input"
          placeholder="Enter confirmation code"
          type="text"
        />

        <button onClick={HandlePasswordResetConfirm} className="rgs__btn">
          confirm
        </button>
        {error ? <span className="error__msg">{error[0]}</span> : null}
      </div>
    </div>
  );
};

export default ConfirmPasswordReset;
