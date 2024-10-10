import actionType from "./actionTypes";

export const setCurSongId= (sid) => ({
    type: actionType.SET_CURRENT_SONG_ID,
    sid,
});

export const setIsPlaying= (flag) => ({
    type: actionType.PLAY,
    flag
});

export const setPlaylist = (songs) =>({
    type: actionType.PLAYLIST,
    songs
});

