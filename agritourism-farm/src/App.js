import './App.scss';
import Navbar from "./Nav/Nav";
import React from "react";
import AboutUs from "./AboutUs/AboutUs";

function App () {
    return (
        <div className={`App`}>
            <Navbar/>
            <AboutUs name={`about-us`}/>
        </div>
    );
}

export default App;
