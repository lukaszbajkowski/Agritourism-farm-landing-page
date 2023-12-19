import './App.scss';
import Navbar from "./Nav/Nav";
import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Offer from "./Offer/Offer";

function App () {
    return (
        <div className={`App`}>
            <Navbar/>
            <AboutUs name={`about-us`}/>
            <Offer name={`offer`}/>
        </div>
    );
}

export default App;
