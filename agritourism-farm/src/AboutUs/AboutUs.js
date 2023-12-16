import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import farmImg from '../Img/farm.jpg';
import '../AboutUs/AboutUs.scss';
import MapIcon from '@mui/icons-material/Map';
import PhishingIcon from '@mui/icons-material/Phishing';
import HikingIcon from '@mui/icons-material/Hiking';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import KayakingIcon from '@mui/icons-material/Kayaking';
function AboutUs () {
    return (
        <Box className={`about-us`}>
            <Grid container className={`about-us-container`} position="relative">
                <Grid item xs={12} className={`img-bg`}>
                    <img
                        src={farmImg}
                        alt="Farm"
                        className={`landing-image`}
                    />
                    <Box className={`text-container`}>
                        <Box className={`text-container-content`}>
                            <Box className={'text-box-content'}>
                                <Grid item xs={12} className={`icon-position`}>
                                    <MapIcon fontSize={"large"}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h4" className={`about-us-text`}>
                                        Suspendisse eu odio porttitor
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box className={'text-box-content'}>
                                <Grid item xs={12} className={`icon-position`}>
                                    <PhishingIcon fontSize={"large"}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h4" className={`about-us-text`}>
                                        Ut lacinia, metus in euismod
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box className={'text-box-content'}>
                                <Grid item xs={12} className={`icon-position`}>
                                    <HikingIcon className={`icon`} fontSize={"large"}/>
                                    <DirectionsBikeIcon className={`icon`} fontSize={"large"}/>
                                    <KayakingIcon className={`icon`} fontSize={"large"}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h4" className={`about-us-text`}>
                                        Vestibulum velit massa
                                    </Typography>
                                </Grid>
                            </Box>
                        </Box>
                        <Box className={`text-container-desc`}>
                            <Typography variant="body1" className={`about-us-description`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                                Praesent libero. Sed cursus ante dapibus diam.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutUs;
