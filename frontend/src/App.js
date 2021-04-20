import './App.css';

import ArmPositions from "./components/ArmPositions";
import ProcessOverview from "./components/ProcessOverview";
import ProcessDetails from "./components/ProcessDetails";
import AddProcess from "./components/AddProcess";

function App() {
    return (
        <div className="App">
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

        </div>
    );
}

export default App;
