import rootReducer from "./store/reducer/rootReducer";

import { createStore , applyMiddleware} from "redux";
import { thunk } from "redux-thunk";

const reduxConfig =()=>{
    //dùng thunk viết bất đồng bộ khi dùng redux, dùng action trả về hàm gọi api, còn k có thì redux trả về object
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}


export default reduxConfig;