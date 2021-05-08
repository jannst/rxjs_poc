import {useSelector} from "react-redux";

function ProcessOverview() {

    const selectProcesses = state => state.processes
    const processes = useSelector(selectProcesses)

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

function ProcessRow([pid, process]) {
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
