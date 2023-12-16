import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import farmImg from '../Img/farm.jpg';
import farmPeopleImg from '../Img/farmpeople.jpeg';
import './LandingPage.scss';

function LandingPage () {
    return (
        <Box className="landing-page" style={{height: '100vh'}}>
            <Grid container spacing={2} style={{height: '100%'}}>
                <Grid item xs={12} md={5} style={{display: 'flex', alignItems: 'center'}}>
                    <Grid container spacing={2} className={`typo-position`}>
                        <Grid item xs={12}>
                            <Typography variant={'h4'} className={`typo-landing-page`}>
                                About us
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant={"body1"} className={`body-landing-page`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor erat eget
                                diam dignissim, id euismod odio laoreet. Suspendisse sed lacus vitae est ullamcorper
                                feugiat. Quisque et venenatis ex. Quisque elit quam, fringilla eget venenatis vitae,
                                lobortis a ipsum. Suspendisse aliquam feugiat ex, eget eleifend risus malesuada non.
                                Aliquam in efficitur velit, in cursus erat.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={7} className={`grid-img`}>
                    <img
                        src={farmPeopleImg}
                        alt="Landing"
                        className="landing-image"
                    />
                </Grid>
                <Grid item xs={12} className={`grid-img-bg`}>
                    <img
                        src={farmImg}
                        alt="Landing"
                        className="landing-image"
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default LandingPage;
