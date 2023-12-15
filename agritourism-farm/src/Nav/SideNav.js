import {Box, List, ListItem, ListItemText, Typography} from "@mui/material";
import logo from "../logo.png";
import React from "react";

function SideNav () {
    return (
        <>
            <Box className={`center`}>
                <List className="drawer">
                    <img src={logo} alt="Logo" className={`logo`}/>
                    <Typography variant="h6" className={`TypoSideBar`} component="div" sx={{flexGrow: 1}}>
                        Siedlisko Podgórze
                    </Typography>
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
        </>
    )
}

export default SideNav;