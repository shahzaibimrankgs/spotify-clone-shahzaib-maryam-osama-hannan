import React, { useEffect } from "react";
import LogIn from "./Components/Pages/Login/Login";
import { getTokenFromUrl } from "./Components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";
import { useDataLayerValue } from "./DataLayer";
import Home from "./Components/Pages/Home/Home";
import Routers from "./Routes/appRoutes";

// import Routers from "./Routes/appRoutes";
function App() {
  return (
    <div className="App">
      <div>
        <Routers />
      </div>
    </div>
  );
}

export default App;
