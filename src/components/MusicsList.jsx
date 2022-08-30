import React from "react";
import "../style/music.css";
import spotify from "../assets/icons/spotify.svg";
import MenuBar from "./MenuBar";
import { useNavigate } from "react-router-dom";

const MusicsList = () => {
  const navigate = useNavigate();
  return (
    <>
      <MenuBar />
      <div className="razmetka">
        <span id="number">#</span>
        <span id="name">Название</span>
        <span id="alb">Альбом</span>
      </div>
      <hr />
      <div className="musics">
        <div className="music" onClick={() => navigate("/music-player")}>
          <span id="number"> 1 </span>
          <img className="mus__photo" src={spotify} alt="" />
          <div className="names__of__song">
            <p>NAME</p>
            <p className="sub__name">SUBNAME</p>
          </div>
          <span id="alb2"> album </span>
        </div>

        <div className="music">
          <span id="number"> 1 </span>
          <img className="mus__photo" src={spotify} alt="" />
          <div className="names__of__song">
            <p>NAME</p>
            <p className="sub__name">SUBNAME</p>
          </div>
          <span id="alb2"> album </span>
        </div>

        <div className="music">
          <span id="number"> 1 </span>
          <img className="mus__photo" src={spotify} alt="" />
          <div className="names__of__song">
            <p>NAME</p>
            <p className="sub__name">SUBNAME</p>
          </div>
          <span id="alb2"> album </span>
        </div>

        <div className="music">
          <span id="number"> 1 </span>
          <img className="mus__photo" src={spotify} alt="" />
          <div className="names__of__song">
            <p>NAME</p>
            <p className="sub__name">SUBNAME</p>
          </div>
          <span id="alb2"> album </span>
        </div>

        <div className="music">
          <span id="number"> 1 </span>
          <img className="mus__photo" src={spotify} alt="" />
          <div className="names__of__song">
            <p>NAME</p>
            <p className="sub__name">SUBNAME</p>
          </div>
          <span id="alb2"> album </span>
        </div>
      </div>
    </>
  );
};

export default MusicsList;
