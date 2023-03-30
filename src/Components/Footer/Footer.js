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
import axios from "axios";

function Footer({ id }) {
  const [isPlaying, setPlaying] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
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
    const options = {
      method: "GET",
      url: `https://spotify23.p.rapidapi.com/tracks/`,
      params: { ids: id },
      headers: {
        "X-RapidAPI-Key": "afa926a45dmsh2cb35df4033af93p14ecbbjsnd6c275a7f6fd",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const previewUrl = response.data.tracks[0].preview_url;
        setPreviewUrl(previewUrl);
      })
      .catch(function (error) {
        console.error(error);
      });
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
            <>
              <audio src={previewUrl} />,
              <PauseCircleOutlineIcon
                fontSize="large"
                className="footer-icon"
              />
            </>
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
