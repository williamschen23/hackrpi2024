import { useState } from "react";
import {
  GoogleMap,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const fromLocation = { lat: 37.7749, lng: -122.4194 };
const toLocation = { lat: 37.7751, lng: -122.4196 };

const Route = () => {
  const [directions, setDirections] = useState<google.maps.DirectionsResult| null>(null);
  const [steps, setSteps] = useState<string[]>([]);
  const [option, setOption] = useState("DRIVING");

  const showDirection = () => {
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: fromLocation,
        destination: toLocation,
        travelMode:
          option === "DRIVING" ? google.maps.TravelMode.DRIVING : google.maps.TravelMode.WALKING,
      },
      (response, status) => {
        if (status === "OK") {
          const route = response?.routes[0];
          const leg = route?.legs[0];
          const newSteps: string[] = [];

          leg?.steps.forEach((step, index) => {
            newSteps.push(
              `Step ${index + 1}: ${step.instructions
                .split("<b>")
                .join("")
                .split("</b>")
                .join("")
                .split("<div>")
                .join("")
                .split("</div>")
                .join("")}`
            );
          });

          setSteps(newSteps);
          setDirections(response);
        } else {
          console.error("Directions request failed due to " + status);
        }
      }
    );
  };

  return (
    <>
      {directions && steps.map((step, index) => <h3 key={index}>{step}</h3>)}
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
      <button onClick={showDirection}>Directions</button>

      <input
        type="radio"
        id="drive"
        value="DRIVING"
        checked={option === "DRIVING"}
        onChange={(e) => setOption(e.target.value)}
      />
      <label>Driving</label>

      <input
        type="radio"
        id="walk"
        value="WALKING"
        checked={option === "WALKING"}
        onChange={(e) => setOption(e.target.value)}
      />
      <label>Walking</label>
    </>
  );
};

export default Route;