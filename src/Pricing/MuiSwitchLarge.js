import React from 'react';
import {styled} from '@mui/material/styles';
import {Switch} from '@mui/material';

const MuiSwitchLarge = styled(Switch)(({theme}) => ({
    width: 80,
    height: 36,
    padding: 8,
    "& .MuiSwitch-switchBase": {
        margin: 1,
        padding: 0,
        transform: "translateX(6px)",
        "&.Mui-checked": {
            transform: "translateX(40px)",
        },
    },
    "& .MuiSwitch-thumb": {
        width: 32,
        height: 32,
    },
    "& .MuiSwitch-track": {
        borderRadius: 20 / 2,
    },
}));

export default MuiSwitchLarge;
