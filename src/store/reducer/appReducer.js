
import actionType from "../actions/actionTypes";


const initState = {
    galery: [],
    new_realease: [],
    play_list1: [],
    play_list2: [],
    hot_album: [],
    newReleaseChart: [],
    weekChart: [],
    chart: [],
    top100: [],

}
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_HOME:
            return{
                ...state,
                galery: action.homeData?.find(item => item.sectionType === 'banner') || null,
                new_realease: action.homeData?.find(item => item.sectionType === 'new-release') || null,
                play_list1: action.homeData?.find(item => item.sectionId === 'hEditorTheme1') || null,
                play_list2: action.homeData?.find(item => item.sectionId === 'hEditorTheme') || null,
                newReleaseChart: action.homeData?.find(item => item.sectionType === 'newReleaseChart') || null,
                weekChart: action.homeData?.find(item => item.sectionType === 'weekChart') || null,
                chart: action.homeData?.find(item => item.sectionType === 'RTChart') || null,
                hot_album: action.homeData?.find(item => item.sectionId === 'hAlbum') || null,
                top100: action.homeData?.find(item => item.sectionId === 'h100') || null,
            } 
        default:
            return state;
    }
}

export default appReducer;