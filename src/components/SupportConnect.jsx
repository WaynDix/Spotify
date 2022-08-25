import React from "react";
import WuzeeImg from "./wuzeeimg.png";
import { useNavigate } from "react-router-dom";
import "../style/supportconnect.css";

const SupportConnect = () => {
  const navigate = useNavigate();

  return (
    <div className="wuzee-nav">
      <div>
        <img
          src={WuzeeImg}
          alt=""
          height={70}
          className="imgIconW"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="sup-con-all">
        <div className="con-all">
          <h1>Помощник Wuzee</h1>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportConnect;
