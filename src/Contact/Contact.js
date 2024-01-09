import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import './Contact.scss';

function Contact() {
    return (
        <Box className={`nav gallery`}>
            <Grid container position="relative">
                <Grid item xs={12} className={`contact`}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography
                                variant="h4"
                                align="center"
                                component="div"
                                className={`contact-text`}
                            >
                                Kontakt
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h6"
                                    align="start"
                                    component="div"
                                    className={`address-text`}
                                >
                                    Adres
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="body1"
                                    align="start"
                                    component="div"
                                    className={`address-text-value`}
                                >
                                    Pityny 5, 14-310 Miłakowo
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            miejsce na mape
                        </Grid>


                        <Grid container>
                            <Grid item xs={12}>
                                <Box display="flex" flexDirection="row" alignItems="center" paddingLeft={4}
                                     marginBottom={2}>
                                    <Box className={`contact-data-position`}>
                                        <Typography
                                            variant="h6"
                                            align="start"
                                            component="div"
                                            className={`contact-data-person`}
                                        >
                                            Edyta
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            align="start"
                                            component="div"
                                            className={`content`}
                                        >
                                            +48 123 456 789

                                        </Typography>
                                    </Box>
                                    <Box className={`contact-data-position`}>
                                        <Typography
                                            variant="h6"
                                            align="start"
                                            component="div"
                                            className={`contact-data-person`}
                                        >
                                            Wojciech
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            align="start"
                                            component="div"
                                            className={`content`}
                                        >
                                            +48 123 456 789

                                        </Typography>
                                    </Box>
                                    <Box className={`contact-data-position`}>
                                        <Typography
                                            variant="h6"
                                            align="start"
                                            component="div"
                                            className={`contact-data-person`}
                                        >
                                            E-mail
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            align="start"
                                            component="div"
                                            className={`content`}
                                        >
                                            example@example.com
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>


                        <Grid item xs={6}>
                            <Typography
                                variant="h5"
                                align="start"
                                component="div"
                                className={`contact-form-text`}
                            >
                                Wyślij wiadomość
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Contact;
