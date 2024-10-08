
import actionType from "../actions/actionTypes";


const initState = {
    galery: [],
    new_realease: [],
    play_list: [],
    newReleaseChart: [],
    weekChart: [],
    chart: [],
}
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_HOME:
            return{
                ...state,
                galery: action.homeData?.find(item => item.sectionType === 'banner') || null,
                new_realease: action.homeData?.find(item => item.sectionType === 'new-release') || null,
                play_list: action.homeData?.filter(item => item.sectionType === 'playlist') || null,
                newReleaseChart: action.homeData?.find(item => item.sectionType === 'newReleaseChart') || null,
                weekChart: action.homeData?.find(item => item.sectionType === 'weekChart') || null,
                chart: action.homeData?.find(item => item.sectionType === 'RTChart') || null
            } 
        default:
            return state;
    }
}

export default appReducer;