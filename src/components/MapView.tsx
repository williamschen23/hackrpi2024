import {DirectionsRenderer, GoogleMap} from "@react-google-maps/api"
import { useEffect, useState } from "react";
// import {Box} from "@mui/material";

interface MapViewProps {
    city: string;
    placeFrom: string;
    placeTo: string;
    mobilityType: string;
    searchButton: number;
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

    const [directions, setDirections] = useState<google.maps.DirectionsResult| null>(null);
    const directionsService = new google.maps.DirectionsService();

    useEffect(()=> {
        console.log(props.mobilityType)
        if(props.searchButton !== 0){
            directionsService.route(
                {
                  origin: props.placeFrom,
                  destination: props.placeTo,
                  travelMode:
                    props.mobilityType === "driving" ? google.maps.TravelMode.DRIVING : google.maps.TravelMode.WALKING,
                }, (reponse, status) => {
                    if(status === "OK"){
                        setDirections(reponse);
                    }
                }
            )
        }
        // eslint-disable-next-line
    }, [props.searchButton])

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={props.city === "New York" ? NY_center : SF_center}
            zoom={10}
        >
            {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
    )
}

export default MapView