import {Button, InputGroup} from "@blueprintjs/core";

function AddProcess() {

    return (
        <>
            <h1>Add Process</h1>
            <div className="InputContainer">
                <InputGroup className="marginBottom" placeholder="Number of actions"/>
                <InputGroup className="marginBottom" placeholder="Process name"/>
                <Button>Add Process</Button>
            </div>
        </>
    );

}

export default AddProcess;