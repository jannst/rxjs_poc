import {Box, Grommet} from "grommet";
import React from "react";

export function AppBar(props: object) {
    return (
        <Box
            tag='header'
            direction='row'
            align='center'
            justify='between'
            background='brand'
            pad={{left: 'medium', right: 'small', vertical: 'small'}}
            elevation='medium'
            style={{zIndex: 1}}
            {...props}
        />
    );
}