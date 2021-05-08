import {Intent, Tag} from "@blueprintjs/core";
import {ProcessesState} from "../client/ApiClient";
import * as React from 'react'

interface DisplayAbstraction {
    name: string,
    num_current_state: number,
    num_states: number
}

function ProcessOverview() {


    const selectProcesses = (state: { [k: number]: ProcessesState }) => {
        return Object.values(state)
            .filter(process => process.state === "RUNNING")
            .map(({name, num_current_state, num_states}: DisplayAbstraction) => ({name, num_current_state, num_states})) //only keep selected keys
    }

    const processes: { [k: number]: ProcessesState } = {
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

    return (
        <>
            <h1>Processes</h1>
            {selectProcesses(processes).map(ProcessTag)}
        </>
    );
}

function ProcessTag(process: DisplayAbstraction) {
    return (
        <Tag large round fill intent={Intent.SUCCESS} className="marginBottom">
            <div className="SpacedText">
                <div>{process.name}:</div>
                <div>{process.num_current_state}/{process.num_states}</div>
            </div>
        </Tag>
    );
}

export default ProcessOverview;
