import React from "react";
import "./SongRow.css";
function SongRow({ track, playSong }) {
  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <img className="songRow-album" src={track.album.images[0].url} alt="" />
      <div className="songRow-info">
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist) => artist.name).join(",")}</p>
        {track.album.name}
      </div>
    </div>
  );
}

export default SongRow;
