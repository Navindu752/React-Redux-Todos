import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from 'remote-redux-devtools';


import rootReducer from "./root-reducer";

const middleware = [];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware),
    )
);

export default store;