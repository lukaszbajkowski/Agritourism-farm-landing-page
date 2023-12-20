import './App.scss';
import Navbar from "./Nav/Nav";
import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Offer from "./Offer/Offer";
import Gallery from "./Gallery/Gallery";

function App () {
    return (
        <div className={`App`}>
            <Navbar/>
            <AboutUs name={`about-us`}/>
            <Offer name={`offer`}/>
            <Gallery name={`gallery`}/>
        </div>
    );
}

export default App;
