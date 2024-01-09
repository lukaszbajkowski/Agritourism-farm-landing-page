import React from 'react';
import {IconButton, ImageList, ImageListItem, ImageListItemBar} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import {srcset} from '../../AboutUs/Elements/srcset';

const GalleryImages = ({itemData, handleOpenModal}) => {
    return (
        <ImageList variant="quilted" cols={4} gap={16} rowHeight={'auto'} className={`img-grid`}>
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 720, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                        className={`img-shadow img-open-modal`}
                        onClick={() => handleOpenModal(item)}
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        className={`image-list-bar`}
                        actionIcon={
                            <IconButton
                                sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                                aria-label={`info about ${item.title}`}
                                onClick={() => handleOpenModal(item)}
                            >
                                <InfoIcon/>
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export default GalleryImages;