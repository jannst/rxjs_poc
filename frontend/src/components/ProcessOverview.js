import {Intent, Tag} from "@blueprintjs/core";

function ProcessOverview() {

    const processes = {
        "1": {
            "name": "test",
            "state": "RUNNING",
            "current_action": "adding oil",
            "num_current_state": 70,
            "num_states": 100
        },
        "2": {
            "name": "test",
            "state": "TERMINATED",
            "current_action": "adding rice",
            "num_current_state": 12,
            "num_states": 1000
        },
        "3": {
            "name": "test",
            "state": "RUNNING",
            "current_action": "adding eggs",
            "num_current_state": 42,
            "num_states": 10000
        },
        "4": {
            "name": "test",
            "state": "RUNNING",
            "current_action": "adding eggs",
            "num_current_state": 40,
            "num_states": 7734
        },
        "5": {
            "name": "Fast Process",
            "state": "FINISHED",
            "current_action": "",
            "num_current_state": 10,
            "num_states": 10
        }
    }

    return (
        <>
            <h1>Processes</h1>
            {Object.values(processes).map(ProcessTag)}
        </>
    );
}

function ProcessTag(process) {
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
