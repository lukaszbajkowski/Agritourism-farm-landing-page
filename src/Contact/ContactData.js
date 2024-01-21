import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import './Contact.scss';

function ContactData () {
    return (
        <>
            <Grid item xs={12}>
                <Typography
                    variant="h4"
                    align="left"
                    component="div"
                    className={`company-name`}
                >
                    Siedlisko Podgórze
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="h6"
                    align="left"
                    component="div"
                    className={`address`}
                >
                    Pityny 5
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="h6"
                    align="left"
                    component="div"
                    className={`address`}
                >
                    14-310 Miłakowo
                </Typography>
            </Grid>
            <Box className={`phone-number-box`}>
                <Grid item xs={12}>
                    <Typography
                        variant="h6"
                        align="left"
                        component="div"
                        className={`phone-number`}
                    >
                        <a href="tel:+48510274346">
                            +48 510 274 346
                        </a>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        variant="h6"
                        align="left"
                        component="div"
                        className={`phone-number`}
                    >
                        <a href="tel:+48509305666">
                            +48 509 305 666
                        </a>
                    </Typography>
                </Grid>
            </Box>
            <Box className={`email-box`}>
                <Grid item xs={12}>
                    <Typography
                        variant="h6"
                        align="left"
                        component="div"
                        className={`email`}
                    >
                        <a href="mailto:molejarnia@wp.pl">
                            molejarnia@wp.pl
                        </a>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        variant="h6"
                        align="left"
                        component="div"
                        className={`email`}
                    >
                        <a href="mailto:biuro@siedliskopodgorze.eu">
                            biuro@siedliskopodgorze.eu
                        </a>
                    </Typography>
                </Grid>
            </Box>
        </>
    );
}

export default ContactData;
