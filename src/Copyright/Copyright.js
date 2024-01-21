import React from 'react';
import {Box, Typography} from "@mui/material";
import './Copyright.scss';

const CopyrightSection = () => {
    return (
        <Box className={`copyright`}>
            <Typography variant="body2" align="center">
                &copy; {new Date().getFullYear()} Łukasz Bajkowski. Wszelkie prawa zastrzeżone.
            </Typography>
        </Box>
    );
};

export default CopyrightSection;
