export const initialState = {
  playing: false,
  item: null,
  user: null,
  playlists: [],
  discover_weekly: null,
  //remove after finished developing
  //   token:
  // "BQAKyakdvmSodjIhKcfZ3sWy5Ibp-jgEgHNsUJR_WgRtWJ-wlMDQV0eWjUmTAjggYJAdLI8ezYfY-sV-TkXroru8sdmE6G13QrYz80aGnoswEbgRMXYXm0NoeYQR991U9h4BeiiSZDh2oP3jAMBjw_WtpCCxT4wdBqV7oOXZeOhRdCYLzA9C3tgVb2k4J4iup6aZDHwbeqRV3zVbp5paFQ",
};
export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state, //keep whatever was previously there
        user: action.user, //update the user to current user
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
