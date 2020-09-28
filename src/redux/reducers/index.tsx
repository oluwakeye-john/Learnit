import { combineReducers } from "redux";
import { sessionReducer } from "./session";

const rootReducer = combineReducers({
  sessionReducer,
});

export default rootReducer;
