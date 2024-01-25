export const getUserLocation = (setMapState) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude, longitude} = position.coords;
                setMapState((prevState) => ({...prevState, userLocation: {lat: latitude, lng: longitude}}));
            },
            (error) => {
                console.error("Błąd pobierania lokalizacji:", error.message);
            }
        );
    } else {
        console.error("Twoja przeglądarka nie obsługuje geolokalizacji.");
    }
};

export const fetchDestination = async (address, apiKey, setMapState) => {
    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
        );
        const data = await response.json();
        const location = data.results[0].geometry.location;
        setMapState((prevState) => ({...prevState, destination: {lat: location.lat, lng: location.lng}}));
    } catch (error) {
        console.error("Błąd pobierania lokalizacji celu:", error);
    }
};
