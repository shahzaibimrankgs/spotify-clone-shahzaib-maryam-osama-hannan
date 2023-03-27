import React from "react";
import "./SidebarOptions.css";
function SidebarOptions({ title, Icon }) {
  //we're making a resuable component and passing props. Icon is upper cased since we're going to pass icons as components
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption-icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOptions;
