import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Bar = () => {
  return (
    <div className="app-container">
      <div className="app-sidebar">
        <div className="app-sidebar-content">
          <img
            className="spotifyLogo"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt=""
          />

          <div className="sideBarButtonSet">
            <a className="sideBarButton" href="/home">
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
              <span className="sideBarText">Home</span>
            </a>
            <a className="sideBarButton" href="/search">
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              <span className="sideBarText">
                <Link to={"./search"}>Search</Link>
              </span>
            </a>
            <a className="sideBarButton" href="/library">
              <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
              <span className="sideBarText">Your Library</span>
            </a>
          </div>

          <div className="sideBarButtonSet2">
            <a className="sideBarButton" href="/CreatePlaylist">
              <FontAwesomeIcon icon={faSquarePlus}></FontAwesomeIcon>
              <span className="sideBarText">Create Playlist</span>
            </a>
            <a className="sideBarButton" href="/LikedSongs">
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              <span className="sideBarText">Liked Songs</span>
            </a>
          </div>
          <br />
          <div className="playListSet">
            {/* mapping the playlist will come in this section */}
            <a className="playList" href="/playlist">
              Playlist # 1
            </a>
          </div>
        </div>
        <div className="app-sidebar-resizer" />
      </div>
      <div className="app-frame">
        <Navbar />

        <Outlet />
      </div>
    </div>
  );
};
export default Bar;
