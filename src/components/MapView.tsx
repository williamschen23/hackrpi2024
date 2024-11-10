import {LoadScript, GoogleMap} from "@react-google-maps/api"
import {Box} from "@mui/material";


function MapView() {
    const containerStyle = {
        width: "80%",
        height: "300px",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: "20px",
    };

    const center = {
        lat: 37.7749,
        lng: -122.4194,
    };
    return (
        <Box justifyContent="center">
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY} libraries={["routes"]} >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                />
            </LoadScript>
        </Box>
    )
}

export default MapView