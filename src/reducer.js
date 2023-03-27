import { findAllByDisplayValue } from "@testing-library/react";
export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //remove after finished developing
  //   token:
  // "BQAKyakdvmSodjIhKcfZ3sWy5Ibp-jgEgHNsUJR_WgRtWJ-wlMDQV0eWjUmTAjggYJAdLI8ezYfY-sV-TkXroru8sdmE6G13QrYz80aGnoswEbgRMXYXm0NoeYQR991U9h4BeiiSZDh2oP3jAMBjw_WtpCCxT4wdBqV7oOXZeOhRdCYLzA9C3tgVb2k4J4iup6aZDHwbeqRV3zVbp5paFQ",
};
export const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};
