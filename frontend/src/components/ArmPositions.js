import {Tag} from "@blueprintjs/core";
import {useSelector} from "react-redux";

function ArmPositions() {

    const armPositions = useSelector(state => state.arm_positions)

    return (
        <>
            <h1>Arm Positions</h1>
            {Object.entries(armPositions).map(ArmTag)}
        </>
    );
}

function ArmTag([key, value]) {
    return (
        <Tag large round fill className="marginBottom">
            <div className="SpacedText">
                <div>{key}:</div>
                <div>{value}</div>
            </div>
        </Tag>
    );
}

export default ArmPositions;
