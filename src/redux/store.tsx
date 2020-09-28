import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

let store = createStore(rootReducer, applyMiddleware(logger, thunk));
export { store };
