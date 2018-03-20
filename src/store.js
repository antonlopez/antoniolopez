import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";




const middleware = composeWithDevTools(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, middleware);

export default store;