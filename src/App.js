import React, { useEffect, useState } from "react";
import LogIn from "./Components/Pages/Login/Login";
import { getTokenFromUrl, loginUrl } from "./Components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";
import { useDataLayerValue } from "./DataLayer";

// import Routers from "./Routes/appRoutes";
const spotify = new SpotifyWebApi(); //connecting spotify to react in order to talk to react(sort of)
function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; //removes the accesstoken from being displayed in the url
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((userr) => {
        dispatch({
          type: "SET_USER",
          user: userr,
        });
      }); //getMe() returns a promise so kind of an asynchronous call
    }
  }, []);
  return (
    <div className="App">
      <a href={loginUrl}>Login with spotify</a>
      <div>{token ? <Player /> : <LogIn />}</div>
    </div>
  );
}

export default App;
