import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/albums.css";
import MenuBar from "./MenuBar";

const Album = () => {
  const navigate = useNavigate();

  return (
    <div className="card-all" onClick={() => navigate("/list-music")}>
      <img
        src="https://i.scdn.co/image/ab67706f0000000294bddc1d05920cce685229c5"
        alt="music"
        className="img-icon"
      />
      <div className="all-decr">
        <div className="name-albums">internet rewind</div>
        <div className="decr-album">
          Viral classics. Yep, we're at that stage.
        </div>
      </div>
    </div>
  );
};

export default Album;
