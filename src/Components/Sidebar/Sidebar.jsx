import React from "react";
import SidebarOptions from "../SidebarOptions/SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { Outlet } from "react-router-dom";
import "./Sidebar.css";
import { useDataLayerValue } from "../../DataLayer";

const Bar = () => {
  const [DataLayer] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOptions title="Home" Icon={HomeIcon} />
      <SidebarOptions title="Search" Icon={SearchIcon} />
      <SidebarOptions title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />
      {DataLayer.playlists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}
      <Outlet />
    </div>
  );
};
export default Bar;
