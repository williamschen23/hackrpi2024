import React, { useEffect, useRef, useState } from "react";
import { NYCcrimePoints } from "../public/heap-data/NYC_crimePoints_20m.js";
import { NYCcrashPoints } from "../public/heap-data/NYC_crashPoints_20m.js";
import { SFcrimePoints } from "../public/heap-data/SF_crimePoints_5m.js";
import { SFcrashPoints } from "../public/heap-data/SF_crashPoints_10m.js";

// Define the type for the points structure, which seems to be an array of objects with location and weight
interface Point {
  location: {
    lat: number;
    lng: number;
  };
  weight: number;
}

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [heatmap, setHeatmap] = useState<google.maps.visualization.HeatmapLayer | null>(null);
  const [city, setCity] = useState<google.maps.LatLngLiteral>({ lat: 40.7128, lng: -74.006 });

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new google.maps.Map(mapRef.current, {
      zoom: 13,
      center: city,
      mapTypeId: "satellite",
    });

    let data: Point[] = [];

    if (/* condition for SF */) {
        setCity({ lat: 37.7749, lng: -122.4194 });
    }

    // Set the data based on the city (for simplicity, assuming this logic is tied to a city selector)
    if (/* condition for SF */) {
      data = SFcrimePoints;
    } else if (/* condition for NYC Accidents */) {
      data = NYCcrashPoints;
    } else if (/* condition for SF Accidents */) {
      data = SFcrashPoints;
    } else {
      data = NYCcrimePoints;
    }

    const heatmapData = data.map((point) => ({
      location: new google.maps.LatLng(point.location.lat, point.location.lng),
      weight: point.weight,
    }));

    const heatmapLayer = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      map,
      maxIntensity: 3,
    });

    setHeatmap(heatmapLayer);

    return () => {
      heatmapLayer.setMap(null); // Clean up the heatmap layer on unmount
    };
  }, [city]);

  const toggleHeatmap = () => {
    if (heatmap) {
      heatmap.setMap(heatmap.getMap() ? null : new google.maps.Map(mapRef.current!, { zoom: 13, center: city }));
    }
  };

  const changeGradient = () => {
    const gradient = [
      "rgba(0, 255, 255, 0)",
      "rgba(0, 255, 255, 1)",
      "rgba(0, 191, 255, 1)",
      "rgba(0, 127, 255, 1)",
      "rgba(0, 63, 255, 1)",
      "rgba(0, 0, 255, 1)",
      "rgba(0, 0, 223, 1)",
      "rgba(0, 0, 191, 1)",
      "rgba(0, 0, 159, 1)",
      "rgba(0, 0, 127, 1)",
      "rgba(63, 0, 91, 1)",
      "rgba(127, 0, 63, 1)",
      "rgba(191, 0, 31, 1)",
      "rgba(255, 0, 0, 1)",
    ];

    if (heatmap) {
      heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
    }
  };

  const changeRadius = () => {
    if (heatmap) {
      heatmap.set("radius", heatmap.get("radius") ? null : 20);
    }
  };

  const changeOpacity = () => {
    if (heatmap) {
      heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
    }
  };

  return (
    <>
    <div>
      <button onClick={toggleHeatmap}>Toggle Heatmap</button>
      <button onClick={changeGradient}>Change Gradient</button>
      <button onClick={changeOpacity}>Change Opacity</button>
      <button onClick={changeRadius}>Change Radius</button>
    </div>
      <div id="map" ref={mapRef} style={{ height: "400px", width: "100%" }}></div>
    </>
  );
};

export default MapComponent;
