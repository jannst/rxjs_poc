import './App.css';

import ArmPositions from "./components/ArmPositions";
import ProcessOverview from "./components/ProcessOverview";
import ProcessDetails from "./components/ProcessDetails";
import AddProcess from "./components/AddProcess";
import {Box, Grommet} from "grommet";
import {theme} from "./theme"
import {AppBar} from "./components/AppBar";

function App() {
    return (
        <Grommet theme={theme}>
            <AppBar><h1>Das is n test braa</h1></AppBar>

{/*            <div className="Sidebar">
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
            </div>*/}
        </Grommet>
    );
}

export default App;
