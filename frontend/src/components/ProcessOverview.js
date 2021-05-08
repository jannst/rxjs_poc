import {Intent, Tag} from "@blueprintjs/core";
import {useSelector} from "react-redux";

function ProcessOverview() {

    const selectProcesses = state => {
        return Object.values(state.processes)
            .filter(process => process.state === "RUNNING")
            .map(({name, num_current_state, num_states}) => ({name, num_current_state, num_states})) //only keep selected keys
    }

    const processes = useSelector(selectProcesses)

    return (
        <>
            <h1>Processes</h1>
            {processes.map(ProcessTag)}
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
