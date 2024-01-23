import React from 'react';
import {Typography} from '@mui/material';
import MuiSwitchLarge from './MuiSwitchLarge';

const SwitchContainer = ({isChecked, handleChange}) => {
    return (
        <div className={`switch-container`}>
            <Typography variant={"h6"} className={isChecked ? 'before-switch' : 'before-switch-active'}>
                Do 3 noclegów
            </Typography>
            <MuiSwitchLarge
                checked={isChecked}
                onChange={handleChange}
            />
            <Typography variant={"h6"} className={isChecked ? 'after-switch-active' : 'after-switch'}>
                3 noclegi i więcej
            </Typography>
        </div>
    );
};

export default SwitchContainer;
