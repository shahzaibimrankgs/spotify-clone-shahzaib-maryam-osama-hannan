export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  search: "",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH": {
      return {
        ...state,
        search: action.search,
      };
    }

    default:
      return state;
  }
};
