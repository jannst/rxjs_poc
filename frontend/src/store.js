import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import appReducer from "./reducers/appReducer";
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";

//it is possible to pass store enhancers, which allow to inject custom logic/logging/analytics etc to the event cycle
//TODO add a custom middleware
//TODO checkout dev tooling with composeWithDevTools

//TODO find out if dev tooling is disabled in production builds
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(appReducer, composedEnhancer);

export default store