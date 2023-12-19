import {Box, Grid, Typography} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DeckIcon from "@mui/icons-material/Deck";
import React from "react";

export default function Content () {
    return (
        <Grid item xs={12} md={6} className={`img-bg`}>
            <Box
                className={`offer`}
            >
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h4"
                        align="center"
                        component="div"
                        className={`about-us-text`}
                    >
                        Oferta
                    </Typography>
                    <Grid container spacing={2} className={`grid-icon`}>
                        <Grid item xs={6}>
                            <Box textAlign="center">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <BedIcon className={`offer-icon`}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant={"h6"} className={`icon-text`}>
                                            14 miejsc noclegowych
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box textAlign="center">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <DinnerDiningIcon className={`offer-icon`}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant={"h6"} className={`icon-text`}>
                                            Posiłki i kuchnia
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box textAlign="center">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <StorefrontIcon className={`offer-icon`}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant={"h6"} className={`icon-text`}>
                                            Sklepik lokalny
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box textAlign="center">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <DeckIcon className={`offer-icon`}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant={"h6"} className={`icon-text`}>
                                            Ogród z grillem
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                    <Typography variant="body1" className={`about-us-content`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros velit, luctus vel
                        libero a, aliquam eleifend sapien. Vestibulum nec odio sollicitudin mi dictum
                        efficitur
                        dignissim vel risus. Vivamus aliquet, risus sed semper faucibus, nunc ligula aliquet
                        quam, at mattis nisl velit id quam. Nulla tincidunt erat vel vestibulum suscipit.
                        Morbi
                        volutpat arcu ullamcorper vestibulum hendrerit. Donec dui quam, scelerisque ut
                        eleifend
                        vitae, mollis in nisl. Pellentesque cursus sapien at cursus volutpat. Pellentesque
                        ut
                        massa vehicula, mollis sem quis, semper ligula. Praesent scelerisque ipsum est, at
                        ultricies dolor efficitur id. Donec eget viverra dui. Proin accumsan volutpat velit.
                        Duis varius ornare ex sit amet bibendum. Vestibulum et vehicula purus.
                    </Typography>
                </Grid>
            </Box>
        </Grid>
    )
}
