import React from 'react';
import {Box, Container, Modal, Paper} from '@mui/material';

const GalleryModal = ({open, handleCloseModal, selectedItem, modalStyle}) => {
    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Container>
                <Paper elevation={3} sx={modalStyle} className={`modal-container`}>
                    <Box display="flex" alignItems="center">
                        {selectedItem && (
                            <img
                                src={selectedItem.img}
                                alt={selectedItem.title}
                                loading="lazy"
                                className={`img-modal`}
                            />
                        )}
                    </Box>
                </Paper>
            </Container>
        </Modal>
    );
};

export default GalleryModal;
