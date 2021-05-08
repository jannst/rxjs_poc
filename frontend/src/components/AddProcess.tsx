import {Button, InputGroup} from "@blueprintjs/core";
import {useState} from "react";
import React from "react";

function AddProcess() {
    const [numAction, setNumActions] = useState(40);
    const [processName, setProcessName] = useState("Test Proc")

    return (
        <>
            <h1>Add Process</h1>
            <div className="InputContainer">
                <InputGroup
                    className="marginBottom"
                    placeholder="Number of actions"
                    value={String(numAction)}
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
                <Button>
                    Add Process
                </Button>
            </div>
        </>
    );

}

export default AddProcess;