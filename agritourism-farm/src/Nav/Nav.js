import React, {useState} from 'react';
import {AppBar, Box, Drawer, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../Nav/SideNav.scss';
import logo from '../logo.png';
import SideNav from "./SideNav";

function Nav () {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth < 900);
        setOpenDrawer(false);
    };

    window.addEventListener('resize', handleResize);

    return (
        <>
            {isMobile ? (
                <Box>
                    <AppBar
                        position="static"
                        className={`AppBar`}
                    >
                        <Toolbar>
                            <img
                                src={logo}
                                alt="Logo"
                                className={`LogoAppBar`}
                            />
                            <Typography
                                variant="h6"
                                className={`TypoAppBar`}
                                component="div" sx={{flexGrow: 1}}
                            >
                                Siedlisko Podgórze
                            </Typography>
                            <IconButton
                                size="medium"
                                edge="end"
                                aria-label="menu"
                                color="default"
                                sx={{mr: 2}}
                                className={`Hamburger`}
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer anchor="left" open={openDrawer} onClose={handleDrawerToggle}>
                        <SideNav/>
                    </Drawer>
                </Box>
            ) : (
                <Drawer variant="permanent" anchor="left">
                    <SideNav/>
                </Drawer>
            )}
        </>
    );
};

export default Nav;
