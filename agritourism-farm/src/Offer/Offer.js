import React from 'react';
import {Box, Grid, Hidden} from '@mui/material';
import Content from "./Elements/Content";
import ImgSwiper from "./Elements/Swiper";

function AboutUs () {
    return (
        <Box className={`nav`}>
            <Grid container position="relative">
                <Hidden mdUp>
                    <Content/>
                </Hidden>
                <Grid item xs={12} md={6} className={`swiper-container`}>
                    <ImgSwiper/>
                </Grid>
                <Hidden mdDown>
                    <Content/>
                </Hidden>
            </Grid>
        </Box>
    );
}

export default AboutUs;
