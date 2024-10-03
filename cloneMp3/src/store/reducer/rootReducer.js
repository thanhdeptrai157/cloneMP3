import appReducer from "./appReducer";
import musicReducer from "./musicReduce";
import { combineReducers} from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const commonConfig = {
    stateReconciler: autoMergeLevel2,
    storage,
}
const musicConfig = {
    ...commonConfig,
    key: 'music',
    whiteList: ['curSongId'],

}
const rootReducer = combineReducers({
    app: appReducer,
    music: persistReducer(musicConfig, musicReducer),
})

export default rootReducer;


