import React from "react";
import SidebarOptions from "../SidebarOptions/SidebarOptions";
import "./Sidebar.css";

const Bar = () => {
  return (
    <div className="sidebar">
      <img
        className="sidebar-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOptions title="Home" />
      <SidebarOptions title="Search" />
      <SidebarOptions title="Your Library" />
    </div>
  );
};
export default Bar;
