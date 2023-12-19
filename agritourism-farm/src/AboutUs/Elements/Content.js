import {Typography} from "@mui/material";
import React from "react";

export default function Content () {
    return (
        <>
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
                Mauris posuere suscipit velit, eget porta enim pretium sit amet. Duis ullamcorper elit
                sed venenatis volutpat. Nunc venenatis lectus urna, ac tempus diam mattis a. Maecenas
                vel rutrum dui. Nunc at placerat tellus. Nam viverra, urna quis euismod sodales, nunc
                quam pretium nunc, ut egestas eros turpis id massa. Pellentesque vitae elit mollis,
                tempus nibh at, ullamcorper turpis. Vivamus placerat est ornare, congue diam ut, ornare
                leo. Nulla porttitor dui ultrices purus mollis blandit fringilla a mi.
            </Typography>
        </>
    )
}
