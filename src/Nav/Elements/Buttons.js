import {Link} from "react-scroll";
import {Box, Button} from "@mui/material";
import React from "react";

export default function Buttons () {
    return (
        <Box className={`buttons-box`}>
            <Link
                activeClass="active"
                to="about-us"
                spy={true}
                smooth={true}
                duration={500}
            >
                <Button
                    color="inherit"
                    className={`nav-buttons`}
                >
                    O nas
                </Button>
            </Link>
            <Link
                activeClass="active"
                to="offer"
                spy={true}
                smooth={true}
                duration={500}
            >
                <Button
                    color="inherit"
                    className={`nav-buttons`}
                >
                    Oferta
                </Button>
            </Link>
            <Button
                color="inherit"
                className={`nav-buttons`}
            >
                Cennik
            </Button>
            <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                duration={500}
            >
                <Button
                    color="inherit"
                    className={`nav-buttons`}
                >
                    Galeria
                </Button>
            </Link>
            <Button
                color="inherit"
                className={`nav-buttons`}
            >
                Kontakt
            </Button>
        </Box>
    )
}