import React from 'react';
import {Box, Container, IconButton, Modal, Paper} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
                    {selectedItem && (
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleCloseModal}
                            aria-label="close"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                margin: '8px',
                                zIndex: 1,
                                color: '#fff',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                transition: '.2s',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    transition: '.2s',
                                },
                            }}
                        >
                            <CloseIcon/>
                        </IconButton>
                    )}
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
