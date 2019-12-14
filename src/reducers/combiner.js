import {combineReducers} from "redux";
import {counterReducer} from "./count";

const allReducers = combineReducers({
  count: counterReducer,
});

export default allReducers;