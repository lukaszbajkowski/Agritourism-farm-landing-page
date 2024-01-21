import React from 'react';
import {Box, Divider, Grid} from '@mui/material';
import './Contact.scss';
import Map from "./Map";
import ContactData from "./ContactData";

function Contact () {
    return (
        <>
            <Divider className={`divider`}/>
            <Box className={`contact`}>
                <Grid container position="relative">
                    <Grid item xs={12} md={6}>
                        <ContactData/>
                    </Grid>
                    <Grid item xs={12} md={6} className={`contact-map`}>
                        <Map/>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Contact;
