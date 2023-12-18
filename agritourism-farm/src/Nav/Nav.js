import React from 'react';
import {Box, Button, Grid, Typography} from '@mui/material';
import farmImg from '../Img/farm.jpg';
import '../AboutUs/AboutUs.scss';
import '../Nav/Nav.scss';
import {Link} from "react-scroll";

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
                            <Box>
                                <Grid item xs={12}>
                                    <Typography
                                        variant="h4"
                                        align="center"
                                        component="div"
                                        className={`company-name`}
                                    >
                                        Siedlisko Podgórze
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box className={`buttons-box`}>
                                <Link
                                    activeClass="active"
                                    to="about-us"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <Button
                                        color="inherit"
                                        className={`nav-buttons`}
                                    >
                                        O nas
                                    </Button>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="offer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <Button
                                        color="inherit"
                                        className={`nav-buttons`}
                                    >
                                        Oferta
                                    </Button>
                                </Link>
                                <Button
                                    color="inherit"
                                    className={`nav-buttons`}
                                >
                                    Cennik
                                </Button>
                                <Button
                                    color="inherit"
                                    className={`nav-buttons`}
                                >
                                    Galeria
                                </Button>
                                <Button
                                    color="inherit"
                                    className={`nav-buttons`}
                                >
                                    Kontakt
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Navbar;
