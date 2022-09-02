import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "https://makerskg-music.herokuapp.com";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const register = async (formData) => {
    try {
      const res = await axios.post(`${API}/accounts/register/`, formData);
      navigate("/login");
      console.log(res);
    } catch (error) {
    }
  };
  const login = async (formData, email) => {
    try {
      const res = await axios.post(`${API}/accounts/api/token/`, formData);

      console.log(res.data);

      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);

      setUser(email);
      navigate("/");
    } catch (error) {
      setError([error.response.data.detail]);
    }
  };
  const passwordReset = async (formData) => {
    try {
      const res = await axios.post(
        `${API}/accounts/api/password_reset/`, formData
      );
      navigate("/confirmpasswordreset");
    } catch (error) {
      setError([error.response.data.detail]);
    }
  };

  const confirmPasswordReset = async (formData) => {
    try {
      const res = await axios.post(
        `${API}/accounts/api/password_reset/confirm/`, formData
      );
    } catch (error) {
      console.log(error);
      setError([error.response.data.detail]);
    }
  };

  return (
    <authContext.Provider
      value={{
        register,
        error,
        setError,
        login,
        passwordReset,
        confirmPasswordReset,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
