import {ProcessesState} from "../client/ApiClient";
import * as React from 'react'

function ProcessOverview() {

    const processes: {[k: number]: ProcessesState} = {
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
            <h1>Process Details</h1>
            <table className="ProcessTable">
                <tr>
                    <th>PID</th>
                    <th>Name</th>
                    <th>State</th>
                    <th>Current Action</th>
                    <th>Progress</th>
                </tr>
                {Object.entries(processes).map(ProcessRow)}
            </table>
        </>
    );
}

function ProcessRow([pid, process]: [string,ProcessesState]) {
    return(
        <tr>
            <td>{pid}</td>
            <td>{process.name}</td>
            <td>{process.state}</td>
            <td>{process.current_action}</td>
            <td>{process.num_current_state}/{process.num_states}</td>
        </tr>
    );
}

export default ProcessOverview;
