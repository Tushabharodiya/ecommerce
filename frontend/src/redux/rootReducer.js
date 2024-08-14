import { combineReducers } from "redux";
import adminReducer from "./admin/reducer";

let rootReducer = combineReducers({
    adminReducer,
})

export default rootReducer;