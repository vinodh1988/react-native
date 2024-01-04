import { combineReducers } from "redux";
import { firstReducer } from "./firstreducer";

export const appstate = combineReducers( {
    quotedata: firstReducer
})