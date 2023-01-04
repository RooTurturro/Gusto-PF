import rootReducer from "./reducer";
import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk";



const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    componseEnhancer(applyMiddleware(thunkMiddleware))
    );

export default store;