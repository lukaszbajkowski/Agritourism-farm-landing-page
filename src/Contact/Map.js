// AIzaSyDMRaacEohf5Oahd362IAeOaYUeG4AukBA

import React, {useEffect, useState} from "react";
import {DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker,} from "@react-google-maps/api";

const Map = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [destination, setDestination] = useState(null);
    const [directions, setDirections] = useState(null);
    const [hasDirections, setHasDirections] = useState(false);

    useEffect(() => {
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

        // Pobieranie długości i szerokości dla adresu Pityny 5, 14-310 Pityny
        fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=Pityny+5,14-310+Pityny&key=AIzaSyDMRaacEohf5Oahd362IAeOaYUeG4AukBA`
        )
            .then((response) => response.json())
            .then((data) => {
                const location = data.results[0].geometry.location;
                setDestination({lat: location.lat, lng: location.lng});
            })
            .catch((error) => {
                console.error("Błąd pobierania lokalizacji celu:", error);
            });
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
        if (directions) {
            const bounds = new window.google.maps.LatLngBounds();
            directions.routes[0].legs[0].steps.forEach((step) => {
                bounds.extend(step.start_location);
                bounds.extend(step.end_location);
            });
            return bounds.getCenter().toJSON();
        }
        return userLocation || destination;
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDMRaacEohf5Oahd362IAeOaYUeG4AukBA">
            <GoogleMap
                mapContainerStyle={{minHeight: "50vh"}}
                center={calculateCenter()}
                zoom={10}
            >
                {destination && <Marker position={destination}/>}

                {userLocation && !hasDirections && (
                    <DirectionsService
                        options={directionsOptions}
                        callback={onDirectionsChange}
                    />
                )}

                {directions && <DirectionsRenderer directions={directions}/>}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
