import {combineReducers} from "redux";
import {partReducer} from "./part.reducer.js";
import {robotReducer} from "./robot.reducer.js";

const globalReducer = combineReducers({
    robotReducer: robotReducer,
    partReducer: partReducer,
});

export default globalReducer;