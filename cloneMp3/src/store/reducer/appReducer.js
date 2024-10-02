
import actionType from "../actions/actionTypes";


const initState = {
    banner: [],
    new_realease: [], 
    
}
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_HOME:
            return{
                ...state,
                banner: action.homeData?.find(item => item.sectionType === 'banner') || null,
                new_realease: action.homeData?.find(item => item.sectionType === 'new-release') || null
            } 
        default:
            return state;
    }
}

export default appReducer;