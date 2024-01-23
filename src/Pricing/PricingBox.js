import React from 'react';
import {Box, Grid, Typography} from '@mui/material';

const PricingBox = ({isChecked}) => {
    return (
        <Box className={`box-pricing`}>
            <Grid container className={`box-grid`}>
                <Grid item xs={12} className={`box-grid-item`}>
                    <Typography
                        variant="h4"
                        align="center"
                        component="div"
                        className={`pricing-text`}
                    >
                        {isChecked ? '80 złotych za noc' : '100 złotych za noc'}
                    </Typography>
                </Grid>
                <Grid item xs={12} className={`box-grid-item`}>
                    Po więcej szczegółów skontaktuj się z nami
                </Grid>
            </Grid>
        </Box>
    );
};

export default PricingBox;
