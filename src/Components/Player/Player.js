import React from "react";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Bar from "../Sidebar/Sidebar";

import "./Player.css";
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player-body">
        {<Bar />}
        {<Body spotify={spotify} />}
      </div>
      {<Footer spotify={spotify} />}
    </div>
  );
}

export default Player;
