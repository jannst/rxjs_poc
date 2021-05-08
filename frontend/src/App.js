import './App.css';

import ArmPositions from "./components/ArmPositions";
import ProcessOverview from "./components/ProcessOverview";
import ProcessDetails from "./components/ProcessDetails";
import AddProcess from "./components/AddProcess";
import {Grommet} from "grommet";
import {theme} from "./theme"

function App() {
    return (
        <Grommet theme={theme}>
            <div className="Sidebar">
                <div>
                    <ArmPositions/>
                    <ProcessOverview/>
                </div>
                <div>
                    <AddProcess/>
                </div>
            </div>
            <div className="Content">
                <ProcessDetails/>
            </div>
        </Grommet>
    );
}

export default App;
