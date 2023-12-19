import {ImageList, ImageListItem} from "@mui/material";
import {srcset} from "./srcset";
import React from "react";
import {itemData} from "./itemData";

export default function ImageGrid () {
    return (
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
    )
}