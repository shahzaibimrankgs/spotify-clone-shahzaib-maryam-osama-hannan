import React from "react";
import { Outlet, Link } from "react-router-dom";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
const Bar = () => {
  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "black" }}>
      <Sidebar>
        <Menu>
          <MenuItem component={<Link to="/home" />}> Home</MenuItem>
          <MenuItem component={<Link to="/search" />}> Search</MenuItem>
          <MenuItem component={<Link to="/library" />}>Your Library</MenuItem>
          <MenuItem component={<Link to="/createPlaylist" />}>
            Create Playlist
          </MenuItem>
          <MenuItem component={<Link to="/likedSongs" />}>Liked Songs</MenuItem>
        </Menu>
        <p>cookies</p>
        <button>English</button>
      </Sidebar>
      <Outlet />
    </div>
  );
};
export default Bar;
