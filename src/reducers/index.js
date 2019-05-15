import { combineReducers } from "redux";

// Reducers

const songsReducer = () => {
  return [
    {
      title: "Chand ne kuch kaha",
      duration: "4:05"
    },
    {
      title: "chanda re chanda re",
      duration: "5:45"
    },
    {
      title: "A chand teri chandani ki kasam",
      duration: "3:02"
    },
    {
      title: "Chand chupa badal me",
      duration: "6:56"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
