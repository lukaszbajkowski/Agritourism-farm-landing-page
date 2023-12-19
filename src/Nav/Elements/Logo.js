import {Box, Grid, Typography} from "@mui/material";
import React from "react";

export default function Logo () {
    return (
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
    )
}