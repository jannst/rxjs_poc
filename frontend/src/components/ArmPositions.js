import {Tag} from "@blueprintjs/core";

function ArmPositions() {

    const armPositions = {
        "left_arm": "HOME",
        "middle_arm": "HOME",
        "right_arm": "HOME"
    };

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
