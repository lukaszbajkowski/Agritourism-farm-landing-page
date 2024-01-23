import React, {useState} from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import SwitchContainer from './SwitchContainer';
import PricingBox from './PricingBox';
import './Pricing.scss';

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
            <SwitchContainer
                isChecked={isChecked}
                handleChange={handleChange}
            />
            <Grid container spacing={2} className={`text-container`}>
                <Grid item xs={12} className={`text-grid`}>
                    <Box className={`container`}>
                        <PricingBox isChecked={isChecked}/>
                        <div className={`info-text`}>
                            Zastrzegamy sobie możliwość zmiany ceny dla większych grup zorganizowanych lub w przypadku
                            dłuższego pobytu w naszym Siedlisku.
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Pricing;
