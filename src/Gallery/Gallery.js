import React, {useState} from 'react';
import {Box, Grid, Typography} from '@mui/material';
import './Gallery.scss';
import {itemData} from '../AboutUs/Elements/itemData';
import GalleryModal from "./Elements/Modal";
import GalleryImages from "./Elements/ImageList";

function Gallery () {
    const [openModal, setOpenModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpenModal = (item) => {
        setSelectedItem(item);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
        setOpenModal(false);
    };

    const modalStyle = {
        bgcolor: 'transparent',
        position: 'absolute',
        boxShadow: 24,
        p: 4,
        borderRadius: 3,
        maxHeight: '85vh',
        overflowY: 'auto',
    };

    return (
        <Box className={`nav gallery`}>
            <Grid container position="relative">
                <Grid item xs={12} className={`gallery`}>
                    <Typography
                        variant="h4"
                        align="center"
                        component="div"
                        className={`gallery-text`}
                    >
                        Galeria
                    </Typography>
                </Grid>
                <Grid item xs={12} className={`img-bg`}>
                    <GalleryImages itemData={itemData} handleOpenModal={handleOpenModal}/>
                </Grid>
            </Grid>

            <GalleryModal
                open={openModal}
                handleCloseModal={handleCloseModal}
                selectedItem={selectedItem}
                modalStyle={modalStyle}
            />
        </Box>
    );
}

export default Gallery;
