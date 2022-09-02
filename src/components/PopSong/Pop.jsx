// import React from "react";
import "./PopStyle.css";
import spotify from "./spotify.svg";
import MenuBar from "../MenuBar";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { styled, Typography, Slider, Paper, Stack, Box } from "@mui/material";

// #region ------------ ICONS ---------
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";

import PauseIcon from "@mui/icons-material/Pause";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// #endregion ------------ ICONS ---------

// #region ------- Tracts -------------------------------------------------------
import kiss from "./Music/KissSongs.mp3";
import parij from "./Music/ParijSongs.mp3";
// #endregion ---------------------------------------------------------------

// #region -------- Styled Components -----------------------------------------
const Div = styled("div")(({ theme }) => ({
  height: "100vh",
  width: "100vw",
  paddingTop: theme.spacing(6),
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#4c4c4c",
  marginLeft: theme.spacing(6),
  marginRight: theme.spacing(6),
  padding: theme.spacing(2),
}));

const PSlider = styled(Slider)(({ theme, ...props }) => ({
  color: "#fff",
  height: 2,
  "&:hover": {
    cursor: "auto",
  },
  "& .MuiSlider-thumb": {
    width: "13px",
    height: "13px",
    display: props.thumbless ? "none" : "block",
  },
}));
// #endregion ---------------------------------------------------------------

const playlist = [kiss, parij];

export default function Pop({ item }) {
  const audioPlayer = useRef();

  const [index, setIndex] = useState(0);

  const [currentSong] = useState(playlist[index]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [mute, setMute] = useState(false);

  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.current.volume = volume / 100;
    }

    if (isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration);
        const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

        setDuration(_duration);
        setElapsed(_elapsed);
      }, 100);
    }
  }, [volume, isPlaying]);

  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return "00:00";
  }

  const togglePlay = () => {
    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  const toggleForward = () => {
    audioPlayer.current.currentTime += 10;
  };

  const toggleBackward = () => {
    audioPlayer.current.currentTime -= 10;
  };

  const toggleSkipForward = () => {
    if (index >= playlist.length - 1) {
      setIndex(0);
      audioPlayer.current.src = playlist[0];
      audioPlayer.current.play();
    } else {
      setIndex((prev) => prev + 1);
      audioPlayer.current.src = playlist[index + 1];
      audioPlayer.current.play();
    }
  };

  const toggleSkipBackward = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      audioPlayer.current.src = playlist[index - 1];
      audioPlayer.current.play();
    }
  };

  function VolumeBtns() {
    return mute ? (
      <VolumeOffIcon
        sx={{ color: "#fff", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 20 ? (
      <VolumeMuteIcon
        sx={{ color: "#fff", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 75 ? (
      <VolumeDownIcon
        sx={{ color: "#fff", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    ) : (
      <VolumeUpIcon
        sx={{ color: "#fff", "&:hover": { color: "white" } }}
        onClick={() => setMute(!mute)}
      />
    );
  }

  return (
    <Div className="player-all-songs-start">
      <MenuBar />
      <div className="dvij">
        <div className="razmetka">
          <span id="number">#</span>
          <span id="name">Название</span>
          <span id="alb">Альбом</span>
        </div>
        <div className="musics">
          <div className="music" onClick={togglePlay}>
            {!isPlaying ? (
              <PlayArrowIcon
                fontSize={"large"}
                sx={{
                  color: "#fff",
                  "&:hover": { color: "white" },
                  display: "none",
                }}
                onClick={togglePlay}
              />
            ) : (
              <PauseIcon
                fontSize={"large"}
                sx={{
                  color: "#fff",
                  "&:hover": { color: "white" },
                  display: "none",
                }}
                onClick={togglePlay}
              />
            )}
            <span id="number"> 1 </span>
            <img className="mus__photo" src="data:image/jpeg;base64,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" alt="" />
            <div className="names__of__song">
              <p>Kiss</p>
              <p className="sub__name">SUBNAME</p>
            </div>
            <span id="alb2"> Kiss Group </span>
          </div>
        </div>
      </div>

      
      
      <audio src={currentSong} ref={audioPlayer} muted={mute} />
      <CustomPaper>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "25%",
              alignItems: "center",
            }}
          >
            <VolumeBtns />

            <PSlider
              min={0}
              max={100}
              value={volume}
              onChange={(e, v) => setVolume(v)}
            />
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: "flex",
              width: "40%",
              alignItems: "center",
            }}
          >
            <SkipPreviousIcon
              sx={{
                color: "#fff",
                "&:hover": { color: "white" },
              }}
              onClick={toggleSkipBackward}
              disabled={true}
            />
            <FastRewindIcon
              sx={{ color: "#fff", "&:hover": { color: "white" } }}
              onClick={toggleBackward}
            />

            {!isPlaying ? (
              <PlayArrowIcon
                fontSize={"large"}
                sx={{ color: "#fff", "&:hover": { color: "white" } }}
                onClick={togglePlay}
              />
            ) : (
              <PauseIcon
                fontSize={"large"}
                sx={{ color: "#fff", "&:hover": { color: "white" } }}
                onClick={togglePlay}
              />
            )}

            <FastForwardIcon
              sx={{ color: "#fff", "&:hover": { color: "white" } }}
              onClick={toggleForward}
            />
            <SkipNextIcon
              sx={{ color: "#fff", "&:hover": { color: "white" } }}
              onClick={toggleSkipForward}
            />
          </Stack>

          <Stack
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
        </Box>
        <Stack
          spacing={1}
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#fff" }}>{formatTime(elapsed)}</Typography>
          <PSlider thumbless value={elapsed} max={duration} />
          <Typography sx={{ color: "#fff" }}>
            {formatTime(duration - elapsed)}
          </Typography>
        </Stack>
      </CustomPaper>
    </Div>
  );
}
