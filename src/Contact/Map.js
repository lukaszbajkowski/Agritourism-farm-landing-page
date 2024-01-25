import React, {useEffect, useState} from "react";
import {DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker} from "@react-google-maps/api";
import {fetchDestination, getUserLocation} from "./API";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const GOOGLE_MAPS_ADDRESS = process.env.REACT_APP_GOOGLE_MAPS_ADDRESS;

const Map = () => {
    const [mapState, setMapState] = useState({
        userLocation: null,
        destination: null,
        directions: null,
        hasDirections: false,
        isMobile: false,
    });

    const {userLocation, destination, directions, hasDirections, isMobile} = mapState;

    useEffect(() => {
        const mobileCheck = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        setMapState((prevState) => ({...prevState, isMobile: mobileCheck}));

        getUserLocation(setMapState);
        fetchDestination(GOOGLE_MAPS_ADDRESS, GOOGLE_MAPS_API_KEY, setMapState);
    }, []);

    const directionsOptions = {
        destination,
        origin: userLocation,
        travelMode: "DRIVING",
    };

    const onDirectionsChange = (result, status) => {
        if (status === "OK") {
            setMapState((prevState) => ({...prevState, directions: result, hasDirections: true}));
        } else {
            console.error("Błąd uzyskiwania trasy:", status);
        }
    };

    const calculateCenter = () => {
        if (isMobile) {
            return destination;
        }

        if (!directions || !window.google) {
            return userLocation || destination;
        }

        const bounds = new window.google.maps.LatLngBounds();
        directions.routes[0].legs[0].steps.forEach((step) => {
            bounds.extend(step.start_location);
            bounds.extend(step.end_location);
        });

        return bounds.getCenter().toJSON();
    };

    const calculateZoom = () => {
        return isMobile ? 13 : 13;
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={{ minHeight: "50vh" }} center={calculateCenter()} zoom={calculateZoom()}>
                {destination && <Marker position={destination} />}

                {!isMobile && userLocation && !hasDirections && (
                    <DirectionsService options={directionsOptions} callback={onDirectionsChange} />
                )}

                {directions && <DirectionsRenderer directions={directions} />}

                {isMobile && destination && <Marker position={destination} />}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
