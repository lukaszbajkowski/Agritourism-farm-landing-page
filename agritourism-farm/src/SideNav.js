// Sidebar.js
import React from 'react';
import {Box, Drawer, List, ListItem, ListItemText} from '@mui/material';
import './SideNav.scss';
import logo from './logo.png';

const Sidebar = () => {
    return (
        <Drawer variant="permanent" anchor="left">
            <Box className={`center`}>
                <List className="drawer">
                    <img src={logo} alt="Logo" className={`logo`}/>
                    <ListItem className="listItem" button>
                        <ListItemText className={`item`} primary="About us"/>
                    </ListItem>
                    <ListItem className="listItem" button>
                        <ListItemText className={`item`} primary="Offer"/>
                    </ListItem>
                    <ListItem className="listItem" button>
                        <ListItemText className={`item`} primary="Canoeing"/>
                    </ListItem>
                    <ListItem className="listItem" button>
                        <ListItemText className={`item`} primary="Pricing"/>
                    </ListItem>
                    <ListItem className="listItem" button>
                        <ListItemText className={`item`} primary="Gallery"/>
                    </ListItem>
                    <ListItem className="listItem" button>
                        <ListItemText className={`item`} primary="Contact"/>
                    </ListItem>
                </List>
            </Box>
            <List className={`footer`}>
                <ListItem>
                    <ListItemText className={`footerContent`}>
                        Copyright © 2023 - Łukasz Bajkowski
                    </ListItemText>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
