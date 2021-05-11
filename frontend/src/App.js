import './App.css';

/*
import ArmPositions from "./components/ArmPositions";
import ProcessOverview from "./components/ProcessOverview";
import ProcessDetails from "./components/ProcessDetails";
import AddProcess from "./components/AddProcess";

 */
import {Grid} from "./components/base/BaseComponents";
import {ThemeProvider} from 'styled-components'
import {theme} from "./theme";

/*
            <div style={{width:"100vw", height:"100vh"}}>
                <BaseComponents color="brand" bg="primary" width={{xsm:1, sm:1/2, md:1/4, lg:1/5, xl:1/6}} height="40vh">
                </BaseComponents>
            </div>
 */

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Grid gridRowGap={4}>

            </Grid>

        </ThemeProvider>
    );
}

export default App;
