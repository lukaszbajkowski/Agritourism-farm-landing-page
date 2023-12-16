import './App.scss';
import Nav from "./Nav/Nav";
import LandingPage from "./LandingPage/LandingPage";
import React from "react";
import {Box} from "@mui/material";

function App () {
    return (
        <div className={`App`}>
            <Nav/>
            <Box className={`AppBox`}>
                <LandingPage/>
            </Box>
        </div>
    );
}

export default App;
