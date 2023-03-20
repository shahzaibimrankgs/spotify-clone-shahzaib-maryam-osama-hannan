export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after finished developing
  token:
    "BQAKyakdvmSodjIhKcfZ3sWy5Ibp-jgEgHNsUJR_WgRtWJ-wlMDQV0eWjUmTAjggYJAdLI8ezYfY-sV-TkXroru8sdmE6G13QrYz80aGnoswEbgRMXYXm0NoeYQR991U9h4BeiiSZDh2oP3jAMBjw_WtpCCxT4wdBqV7oOXZeOhRdCYLzA9C3tgVb2k4J4iup6aZDHwbeqRV3zVbp5paFQ",
};
export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state, //keep whatever was previously there
        user: state.user, //update the user to current user
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
