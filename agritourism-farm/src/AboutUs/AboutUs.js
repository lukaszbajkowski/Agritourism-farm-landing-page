import React from 'react';
import {Box, Grid, ImageList, ImageListItem, Typography} from '@mui/material';
import '../AboutUs/AboutUs.scss';
import {srcset} from "./Elements/srcset";
import Content from "./Elements/Content";
import ImageGrid from "./Elements/ImageList";

function AboutUs () {
    return (
        <Box className={`nav`}>
            <Grid container position="relative">
                <Grid item xs={12} md={6} className={`img-bg`}>
                    <Box
                        className={`about-us`}
                    >
                        <Grid item xs={12} md={6}>
                            <Content/>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} className={`img-bg`}>
                    <ImageGrid/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutUs;
