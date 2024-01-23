import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import {Box, Container, Grid, Switch, Typography} from '@mui/material';
import "./Pricing.scss"

export const MuiSwitchLarge = styled(Switch)(({theme}) => ({
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

    const handleChange = () => {
        setChecked(!isChecked);
    };

    return (
        <Container className={`container pricing`}>
            <Grid item xs={12} className={`gallery`}>
                <Typography
                    variant="h4"
                    align="center"
                    component="div"
                    className={`gallery-text`}
                >
                    Cennik
                </Typography>
            </Grid>
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
            <Grid container spacing={2} className={`text-container`}>
                <Grid item xs={12}>
                    <Box className={`container`}>
                        <Box className={`box-pricing`}>
                            <Grid container className={`box-grid`}>
                                <Grid item xs={12} className={`box-grid-item`}>
                                    <Typography
                                        variant="h4"
                                        align="center"
                                        component="div"
                                        className={`pricing-text`}
                                    >
                                        {isChecked ?
                                            <>80 złotych za noc</>
                                            :
                                            <>100 złotych za noc</>
                                        }
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className={`box-grid-item`}>
                                    Po więcej szczegółów skontaktuj się z nami
                                </Grid>
                            </Grid>
                        </Box>
                        <div className={`info-text`}>
                            <>
                            Zastrzegamy sobie możliwość zmiany ceny dla większych grup zorganizowanych lub w przypadku
                            dłuższego pobytu w naszym Siedlisku.
                                </>
                        </div>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Pricing;
