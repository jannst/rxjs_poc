const initialState = {
        "left_arm": "HOME",
        "middle_arm": "TOP",
        "right_arm": "HOME"
    };

export default function armPositionsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}