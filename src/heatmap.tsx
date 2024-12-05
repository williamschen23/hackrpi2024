import { useEffect, useRef, useState } from "react";
import NYCcrimePoints from "../public/heap-data/NYC_crimePoints_20m.json";
import NYCcrashPoints from "../public/heap-data/NYC_crashPoints_20m.json";
import SFcrimePoints from "../public/heap-data/SF_crimePoints_5m.json";
import SFcrashPoints from "../public/heap-data/SF_crashPoints_10m.json";

const NYCcrimePointsTyped: Point[] = NYCcrimePoints as Point[];
const NYCcrashPointsTyped: Point[] = NYCcrashPoints as Point[];
const SFcrimePointsTyped: Point[] = SFcrimePoints as Point[];
const SFcrashPointsTyped: Point[] = SFcrashPoints as Point[];

// Define the type for the points structure, which seems to be an array of objects with location and weight
interface Point {
  location: {
    lat: number;
    lng: number;
  };
  weight: number;
}

interface MapComponentProps {
  city: string;
  transportationMode: string;
}

function MapComponent(props: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  // @ts-expect-error yes
  // eslint-disable-next-line
  const [heatmap, setHeatmap] = useState<google.maps.visualization.HeatmapLayer | null>(null);
  const [city, setCity] = useState<google.maps.LatLngLiteral>({ lat: 37.7749, lng: -122.4194 });

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new google.maps.Map(mapRef.current, {
      zoom: 11,
      center: city,
      mapTypeId: "satellite",
    });

    let data = [];

    if (props.city === "San Francisco") {
      setCity({ lat: 40.7128, lng: -74.006 });
    } else {
      setCity({ lat: 37.7749, lng: -122.4194 });
    }

    // Set the data based on the city (for simplicity, assuming this logic is tied to a city selector)
    if (props.city === "San Francisco" && props.transportationMode == "walking") {
      data = SFcrimePointsTyped;
    } else if (props.city === "New York" && props.transportationMode == "driving") {
      data = NYCcrashPointsTyped;
    } else if (props.city === "San Francisco" && props.transportationMode == "driving") {
      data = SFcrashPointsTyped;
    } else {
      data = NYCcrimePointsTyped;
    }

    const heatmapData = data.map((point: Point) => ({
      location: new google.maps.LatLng(point.location.lat, point.location.lng),
      weight: point.weight,
    }));

    const heatmapLayer = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      map,
      maxIntensity: 3,
      radius: 1.5
    });

    return () => {
      heatmapLayer.setMap(null); // Clean up the heatmap layer on unmount
    };
    // eslint-disable-next-line
  }, [props.city, props.transportationMode]);

  return (
    <>
    {/*<div>*/}
    {/*  <button onClick={toggleHeatmap}>Toggle Heatmap</button>*/}
    {/*  <button onClick={changeGradient}>Change Gradient</button>*/}
    {/*  <button onClick={changeOpacity}>Change Opacity</button>*/}
    {/*  <button onClick={changeRadius}>Change Radius</button>*/}
    {/*</div>*/}
      <div id="map" ref={mapRef} style={{ height: "400px", width: "100%" }}></div>
    </>
  );
};

export default MapComponent;
