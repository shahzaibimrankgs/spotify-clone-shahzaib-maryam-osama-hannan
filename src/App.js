import React, { useEffect } from "react";
import LogIn from "./Components/Pages/Login/Login";
import { getTokenFromUrl } from "./Components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";
import { useDataLayerValue } from "./DataLayer";
import Home from "./Components/Pages/Home/Home";
import Routers from "./Routes/appRoutes";

// import Routers from "./Routes/appRoutes";
const spotify = new SpotifyWebApi(); //connecting spotify to react in order to talk to react(sort of)
function App() {
  const [{ token }, dispatch] = useDataLayerValue();

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
  }); //getMe() returns a promise so kind of an asynchronous call

  spotify.getPlaylist("37i9dQZEVXcE5d49CTtUz4").then((response) => {
    dispatch({
      type: "SET_DISCOVER_WEEKLY",
      discover_weekly: response,
    });
  });
  spotify.getMyTopArtists().then((response) =>
    dispatch({
      type: "SET_TOP_ARTISTS",
      top_artists: response,
    })
  );
  // dispatch({
  //   type: "SET_SPOTIFY",
  //   spotify: spotify,
  // });
  spotify.getMe().then(
    (user) => {
      dispatch({
        type: "SET_USER",
        user: user,
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    },
    [token, dispatch]
  );
  return (
    <div className="App">
      <div>
        <Routers />
      </div>
    </div>
  );
}

export default App;
