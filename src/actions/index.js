// Action Creator
export const selectSong = song => {
  // Actions
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
