const initialState = {
    1: {
        "name": "test",
        "state": "RUNNING",
        "current_action": "adding oil",
        "num_current_state": 70,
        "num_states": 100
    },
    2: {
        "name": "test",
        "state": "TERMINATED",
        "current_action": "adding shice",
        "num_current_state": 12,
        "num_states": 1000
    },
    3: {
        "name": "test",
        "state": "RUNNING",
        "current_action": "adding eggs",
        "num_current_state": 42,
        "num_states": 10000
    },
    4: {
        "name": "test",
        "state": "RUNNING",
        "current_action": "adding eggs",
        "num_current_state": 40,
        "num_states": 7734
    },
    5: {
        "name": "Fast Process",
        "state": "FINISHED",
        "current_action": "",
        "num_current_state": 10,
        "num_states": 10
    }
};

export const ADD_PROCESS = "process/add_process";

export default function processesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PROCESS:
            return addProcess(state,action)
        default:
            return state
    }
}

function addProcess(state, action) {
    if(action.payload) {
        return {...state, "undef":action.payload};
    } else {
        return state;
    }
}