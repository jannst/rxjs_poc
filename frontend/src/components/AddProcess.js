import {Button, InputGroup} from "@blueprintjs/core";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {ADD_PROCESS} from "../reducers/processesReducer";

function AddProcess() {

    const dispatch = useDispatch();

    const [numAction, setNumActions] = useState(40);
    const [processName, setProcessName] = useState("Test Proc")

    return (
        <>
            <h1>Add Process</h1>
            <div className="InputContainer">
                <InputGroup
                    className="marginBottom"
                    placeholder="Number of actions"
                    value={numAction}
                    onChange={(e) => {
                        let data = parseInt(e.target.value);
                        if (!isNaN(data)) {
                            setNumActions(data);
                        }
                    }}
                />
                <InputGroup
                    className="marginBottom"
                    placeholder="Process name"
                    value={processName}
                    onChange={(e) => setProcessName(e.target.value)}
                />
                <Button
                    onClick={() => dispatch({
                        type: ADD_PROCESS,
                        payload: {name: processName, num_states: numAction}
                    })}
                >
                    Add Process
                </Button>
            </div>
        </>
    );

}

export default AddProcess;