import armPositionsReducer from "./armPositionsReducer";
import processesReducer from "./processesReducer";
import {combineReducers} from "@reduxjs/toolkit";

const appReducer = combineReducers({
    arm_positions: armPositionsReducer,
    processes: processesReducer
});

export default appReducer;

/*
same as above only more verbose
export default function appReducer(state = initialState, action) {
    return {
        arm_positions: armPositionsReducer(state.arm_positions, action),
        processes: processesReducer(state.processes, action)
    }
}
 */