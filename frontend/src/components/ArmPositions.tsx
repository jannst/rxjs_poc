import {Tag} from "@blueprintjs/core";
import {ArmPositionsState} from "../client/ApiClient";
import React from "react";

function ArmPositions() {

    const armPositions: ArmPositionsState = {
        "left_arm": "HOME",
        "middle_arm": "TOP",
        "right_arm": "HOME"
    };

    return (
        <>
            <h1>Arm Positions</h1>
            {Object.entries(armPositions).map(ArmTag)}
        </>
    );
}

function ArmTag([key, value]: string[]) {
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
