import React, { useEffect } from "react";
import LogIn from "./Components/Pages/Login/Login";
import { getTokenFromUrl, loginUrl } from "./Components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";
import { useDataLayerValue } from "./DataLayer";

// import Routers from "./Routes/appRoutes";
const spotify = new SpotifyWebApi(); //connecting spotify to react in order to talk to react(sort of)
function App() {
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

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
    }
    spotify.getMe().then((user) => {
      dispatch({
        type: "SET_USER",
        user: user,
      });
    }); //getMe() returns a promise so kind of an asynchronous call
    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });
    spotify.getPlaylist("37i9dQZEVXcE5d49CTtUz4").then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
  }, []);
  console.log(playlists);
  return (
    <div className="App">
      <a href={loginUrl}>Login with spotify</a>
      {/*We will add this link to a button click later on */}
      <div>{token ? <Player /> : <LogIn />}</div>
    </div>
  );
}

export default App;
