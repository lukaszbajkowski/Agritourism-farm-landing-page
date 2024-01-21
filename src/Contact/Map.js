import React, {useEffect, useState} from "react";
import {DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker,} from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "AIzaSyDMRaacEohf5Oahd362IAeOaYUeG4AukBA";

const Map = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [destination, setDestination] = useState(null);
    const [directions, setDirections] = useState(null);
    const [hasDirections, setHasDirections] = useState(false);

    const isMobileDevice = () => {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    };

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords;
                    setUserLocation({lat: latitude, lng: longitude});
                },
                (error) => {
                    console.error("Błąd pobierania lokalizacji:", error.message);
                }
            );
        } else {
            console.error("Twoja przeglądarka nie obsługuje geolokalizacji.");
        }
    };

    const getDestination = async () => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=Pityny+5,14-310+Pityny&key=${GOOGLE_MAPS_API_KEY}`
            );
            const data = await response.json();
            const location = data.results[0].geometry.location;
            setDestination({lat: location.lat, lng: location.lng});
        } catch (error) {
            console.error("Błąd pobierania lokalizacji celu:", error);
        }
    };

    useEffect(() => {
        getUserLocation();
        getDestination();
    }, []);

    const directionsOptions = {
        destination,
        origin: userLocation,
        travelMode: "DRIVING",
    };

    const onDirectionsChange = (result, status) => {
        if (status === "OK") {
            setDirections(result);
            setHasDirections(true);
        } else {
            console.error("Błąd uzyskiwania trasy:", status);
        }
    };

    const calculateCenter = () => {
        if (isMobileDevice()) {
            return userLocation || destination;
        }

        if (directions && window.google) {
            const bounds = new window.google.maps.LatLngBounds();
            directions.routes[0].legs[0].steps.forEach((step) => {
                bounds.extend(step.start_location);
                bounds.extend(step.end_location);
            });
            return bounds.getCenter().toJSON();
        }

        return userLocation || destination;
    };

    const calculateZoom = () => {
        return isMobileDevice() ? 13 : 10;
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={{minHeight: "50vh"}}
                center={calculateCenter()}
                zoom={calculateZoom()}
            >
                {destination && <Marker position={destination}/>}

                {!isMobileDevice() && userLocation && !hasDirections && (
                    <DirectionsService
                        options={directionsOptions}
                        callback={onDirectionsChange}
                    />
                )}

                {directions && <DirectionsRenderer directions={directions}/>}

                {isMobileDevice() && userLocation && <Marker position={userLocation}/>}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
