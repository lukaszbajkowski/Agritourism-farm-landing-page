import React from 'react';
import {Box, Grid, ImageList, ImageListItem, Typography} from '@mui/material';
import '../AboutUs/AboutUs.scss';

function srcset (image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function AboutUs () {
    return (
        <Box className={`nav`}>
            <Grid container position="relative">
                <Grid item xs={12} md={6} className={`img-bg`}>
                    <Box
                        className={`about-us`}
                    >
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h4"
                                align="center"
                                component="div"
                                className={`about-us-text`}
                            >
                                O nas
                            </Typography>
                            <Typography variant="body1" className={`about-us-content`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros velit, luctus vel
                                libero a, aliquam eleifend sapien. Vestibulum nec odio sollicitudin mi dictum efficitur
                                dignissim vel risus. Vivamus aliquet, risus sed semper faucibus, nunc ligula aliquet
                                quam, at mattis nisl velit id quam. Nulla tincidunt erat vel vestibulum suscipit. Morbi
                                volutpat arcu ullamcorper vestibulum hendrerit. Donec dui quam, scelerisque ut eleifend
                                vitae, mollis in nisl. Pellentesque cursus sapien at cursus volutpat. Pellentesque ut
                                massa vehicula, mollis sem quis, semper ligula. Praesent scelerisque ipsum est, at
                                ultricies dolor efficitur id. Donec eget viverra dui. Proin accumsan volutpat velit.
                                Duis varius ornare ex sit amet bibendum. Vestibulum et vehicula purus.
                            </Typography>
                            <Typography variant="body1" className={`about-us-content`}>
                                Donec non pellentesque nisi. Maecenas id auctor tortor. Donec et auctor leo, vel
                                imperdiet nunc. Sed eu erat ipsum. Pellentesque habitant morbi tristique senectus et
                                netus et malesuada fames ac turpis egestas. Suspendisse malesuada sapien eu odio
                                efficitur egestas. Curabitur eu neque pharetra, laoreet magna ac, dictum sapien. In sed
                                interdum orci, vitae feugiat urna. Quisque ac commodo augue. Etiam quis orci at purus
                                porttitor mollis.
                            </Typography>
                            <Typography variant="body1" className={`about-us-content`}>
                                Quisque pulvinar elit est, eu maximus diam porta ut. Donec nunc ante, suscipit vel
                                lacinia at, vehicula ac arcu. Sed vel laoreet sem. Fusce ex libero, blandit non
                                dignissim vitae, mollis vitae libero. Donec dapibus mi ac libero pellentesque, at
                                tincidunt est semper. Morbi cursus, sapien nec venenatis vehicula, tellus purus
                                dignissim lacus, et tempor nisl ante quis neque. Vestibulum ante ipsum primis in
                                faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque malesuada vitae
                                purus id fringilla. In lobortis semper hendrerit. Pellentesque habitant morbi tristique
                                senectus et netus et malesuada fames ac turpis egestas. Mauris rhoncus, lorem sit amet
                                viverra cursus, lacus turpis varius felis, ac rutrum justo ante id nulla. Pellentesque
                                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </Typography>
                            <Typography variant="body1" className={`about-us-content`}>
                                Mauris posuere suscipit velit, eget porta enim pretium sit amet. Duis ullamcorper elit
                                sed venenatis volutpat. Nunc venenatis lectus urna, ac tempus diam mattis a. Maecenas
                                vel rutrum dui. Nunc at placerat tellus. Nam viverra, urna quis euismod sodales, nunc
                                quam pretium nunc, ut egestas eros turpis id massa. Pellentesque vitae elit mollis,
                                tempus nibh at, ullamcorper turpis. Vivamus placerat est ornare, congue diam ut, ornare
                                leo. Nulla porttitor dui ultrices purus mollis blandit fringilla a mi.
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} className={`img-bg`}>
                    <ImageList
                        variant="quilted"
                        cols={4}
                        gap={16}
                        rowHeight={"auto"}
                        className={`img-grid`}
                    >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                <img
                                    {...srcset(item.img, 121, item.rows, item.cols)}
                                    alt={item.title}
                                    loading="lazy"
                                    className={`img-shadow`}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
        </Box>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
];
export default AboutUs;
