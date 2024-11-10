import {GoogleMap} from "@react-google-maps/api"
// import {Box} from "@mui/material";

interface MapViewProps {
    city: string;
}

function MapView(props: MapViewProps) {
    const containerStyle = {
        width: "100%",
        height: "88vh",
        justifyContent: "center",
        borderWidth: "20px",
    };

    const SF_center = {
        lat: 37.7749,
        lng: -122.4194,
    };

    const NY_center = {
        lng: -73.971321,
        lat: 40.776676,
    };

    return (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={props.city === "New York" ? NY_center : SF_center}
                zoom={10}
            />
    )
}

export default MapView