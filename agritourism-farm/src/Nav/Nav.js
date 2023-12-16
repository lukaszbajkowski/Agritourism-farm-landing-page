import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import '../Nav/Nav.scss'
import {Link} from "react-scroll";

const Navbar = () => {
    return (
        <AppBar
            position="static"
        >
            <Toolbar
                className={`bg`}
            >
                <Box
                    className={`content`}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        component="div"
                        className={`company-name`}
                    >
                        Siedlisko Podgórze
                    </Typography>
                    <Box sx={{marginInline: "auto"}}>
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

                        <Button
                            color="inherit"
                            className={`nav-buttons`}
                        >
                            Oferta
                        </Button>
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
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
