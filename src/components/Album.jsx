import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/albums.css";
import Play from "../assets/images/play.png";

const Album = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  return (
    <>
      <div
        onMouseMove={(e) => {
          setState(true);
        }}
        onMouseOut={(e) => {
          setState(false);
        }}
        className="card-all"
        onClick={() => navigate("/music-list")}
      >
        <img
          src="https://i.scdn.co/image/ab67706f00000003fb1854533582c7bdc25f3da1"
          alt="rock"
          className="img-type"
        />
        <div className="album-all-name-icon">
          <div className="type-album">Rock Roll Songs</div>
          <div className="play-album">
            {state && <img src={Play} alt="play" className="play-icon" />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
