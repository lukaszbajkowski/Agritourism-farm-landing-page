import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import {Container, Grid, Switch, Typography} from '@mui/material';
import "./Pricing.scss"

export const MuiSwitchLarge = styled(Switch)(({ theme }) => ({
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

const Pricing = () => {
    const [isChecked, setChecked] = useState(false);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
    };

    const switchContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    };

    const textContainerStyle = {
        marginTop: '10px',
    };

    const handleChange = () => {
        setChecked(!isChecked);
    };

    return (
        <Container style={containerStyle}>
            <div style={switchContainerStyle}>
                <Typography variant={"h6"} className={`before-switch`}>
                    Do 3 noclegów
                </Typography>
                <MuiSwitchLarge
                    checked={isChecked} onChange={handleChange}

                />
                <Typography variant={"h6"} className={`after-switch`}>
                    3 noclegi i więcej
                </Typography>
            </div>
            <Grid container spacing={2} style={textContainerStyle}>
                <Grid item xs={12}>
                    {isChecked ?
                        <Typography>Content for Right position</Typography>
                        :
                        <Typography>Content for Left position</Typography>
                    }
                </Grid>
            </Grid>
        </Container>
    );
};

export default Pricing;
