import React from "react";
import { Outlet, Link } from "react-router-dom";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
const Bar = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
      <Outlet />
    </div>
  );
};
export default Bar;
