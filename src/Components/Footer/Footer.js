import React, { useEffect, useState, useRef } from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer({ spotify, id }) {
  const [isPlaying, setPlaying] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const audioRef = useRef();
  const [volume, setVolume] = useState(50);

  function togglePlay() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!isPlaying);
  }

  function handleVolumeChange(event, newValue) {
    setVolume(newValue);
    audioRef.current.volume = newValue / 100;
  }

  useEffect(() => {
    if (!id) return;
    const apiUrl = `https://api.spotify.com/v1/tracks/${id}`;
    fetch(apiUrl, {
      headers: {
        "x-rapidapi-host": "spotify23.p.rapidapi.com",
        "X-RapidAPI-Key": "a3ed0e39d5mshac15d804c8cc9e6p1a14fbjsnf9646d9b381b",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const previewUrl = data.preview_url;
        setPreviewUrl(previewUrl);
      })
      .catch((error) => console.error(error));
  }, [id]);

  useEffect(() => {
    if (previewUrl && isPlaying) {
      audioRef.current.play();
    } else if (previewUrl && !isPlaying) {
      audioRef.current.pause();
    }
  }, [previewUrl, isPlaying]);

  return (
    <div className="footer">
      <div className="footer-center">
        <ShuffleIcon className="footer-green" />
        <SkipPreviousIcon className="footer-icon" />
        <div onClick={togglePlay}>
          {isPlaying ? (
            <PauseCircleOutlineIcon fontSize="large" className="footer-icon" />
          ) : (
            <PlayCircleOutlineIcon fontSize="large" className="footer-icon" />
          )}
        </div>
        <SkipNextIcon className="footer-icon" />
        <RepeatIcon className="footer-green" />
      </div>
      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider
              value={volume}
              onChange={handleVolumeChange}
              aria-labelledby="continuous-slider"
            />
          </Grid>
        </Grid>
      </div>
      {previewUrl && (
        <audio ref={audioRef} src={previewUrl} onEnded={togglePlay} />
      )}
    </div>
  );
}

export default Footer;
