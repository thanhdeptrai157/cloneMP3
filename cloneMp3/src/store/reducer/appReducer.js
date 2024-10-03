
import actionType from "../actions/actionTypes";


const initState = {
    banner: [],
    new_realease: [],
    play_list: [],
    
}
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_HOME:
            return{
                ...state,
                banner: action.homeData?.find(item => item.sectionType === 'banner') || null,
                new_realease: action.homeData?.find(item => item.sectionType === 'new-release') || null,
                play_list: action.homeData?.filter(item => item.sectionType === 'playlist') || null, 
            } 
        default:
            return state;
    }
}

export default appReducer;