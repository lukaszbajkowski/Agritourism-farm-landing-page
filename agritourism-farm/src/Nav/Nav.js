import React from 'react';
import {Box, Grid} from '@mui/material';
import farmImg from '../Img/farm.jpg';
import '../AboutUs/AboutUs.scss';
import '../Nav/Nav.scss';
import Buttons from "./Elements/Buttons";
import Logo from "./Elements/Logo";

function Navbar () {
    return (
        <Box className={`nav`}>
            <Grid container position="relative">
                <Grid item xs={12} className={`img-bg`}>
                    <img
                        src={farmImg}
                        alt="Farm"
                        className={`landing-image`}
                    />
                    <Box className={`text-container`}>
                        <Box className={`text-container-content`}>
                            <Logo/>
                            <Buttons/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Navbar;
