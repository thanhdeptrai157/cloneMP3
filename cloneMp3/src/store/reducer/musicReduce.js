import actionType from "../actions/actionTypes";


const initState = {
    curSongId: null,
    isPlaying: false
}
const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_CURRENT_SONG_ID:
            return {
                ...state,
                curSongId: action.sid || null,
            }
        case actionType.PLAY:
            return {
                ...state,
                isPlaying: action.flag
            }
        default:
            return state;
    }
}

export default musicReducer;