import './App.scss';
import Navbar from "./Nav/Nav";
import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Offer from "./Offer/Offer";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";

function App () {
    return (
        <div className={`App`}>
            <Navbar/>
            <AboutUs name={`about-us`}/>
            <Offer name={`offer`}/>
            <Gallery name={`gallery`}/>
            <Contact name={`contact`}/>
        </div>
    );
}

export default App;
