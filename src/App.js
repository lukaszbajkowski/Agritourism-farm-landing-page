import './App.scss';
import Navbar from "./Nav/Nav";
import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Offer from "./Offer/Offer";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";
import CopyrightSection from "./Copyright/Copyright";
import Pricing from "./Pricing/Pricing";

function App () {
    return (
        <div className={`App`}>
            <Navbar/>
            <AboutUs name={`about-us`}/>
            <Offer name={`offer`}/>
            <Pricing name={`pricing`}/>
            <Gallery name={`gallery`}/>
            <Contact name={`contact`}/>
            <CopyrightSection/>
        </div>
    );
}

export default App;
