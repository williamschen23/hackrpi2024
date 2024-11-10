// // @ts-ignore
// import { NYCcrimePoints } from "../public/heap-data/NYC_crimePoints_20m.js";
// // @ts-ignore
// import { NYCcrashPoints } from "../public/heap-data/NYC_crashPoints_20m.js";
// // @ts-ignore
// import { SFcrimePoints } from "../public/heap-data/SF_crimePoints_5m.js";
// // @ts-ignore
// import { SFcrashPoints } from "../public/heap-data/SF_crashPoints_10m.js";

// let map: google.maps.Map, heatmap: google.maps.visualization.HeatmapLayer;

// function initMap(): void {
//   let city: google.maps.LatLngLiteral = { lat: 40.7128, lng: -74.006 }; // NYC by default

//   if () { // SF
//     city = { lat: 37.7749, lng: -122.4194 };
//   }

//   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     zoom: 13,
//     center: city,
//     mapTypeId: "satellite",
//   });

//   let data = [];
//   if(){ // NYC Crime
//     data = NYCcrimePoints;
//   }
//   else if (){ // NYC Accidents
//     data = NYCcrashPoints;
//   }
//   else if (){ // SF Crime
//     data = SFcrimePoints;
//   }
//   else if (){ // SF Accidents
//     data = SFcrashPoints;
//   }

//   const heatmapData = data.map((point) => ({
//     location: new google.maps.LatLng(point.location.lat, point.location.lng),
//     weight: point.weight,
//   }));

//   heatmap = new google.maps.visualization.HeatmapLayer({
//     data: heatmapData,
//     map: map,
//     maxIntensity: 3,
//   });

//   document
//     .getElementById("toggle-heatmap")!
//     .addEventListener("click", toggleHeatmap);
//   document
//     .getElementById("change-gradient")!
//     .addEventListener("click", changeGradient);
//   document
//     .getElementById("change-opacity")!
//     .addEventListener("click", changeOpacity);
//   document
//     .getElementById("change-radius")!
//     .addEventListener("click", changeRadius);
// }

// function toggleHeatmap(): void {
//   heatmap.setMap(heatmap.getMap() ? null : map);
// }

// function changeGradient(): void {
//   const gradient = [
//     "rgba(0, 255, 255, 0)",
//     "rgba(0, 255, 255, 1)",
//     "rgba(0, 191, 255, 1)",
//     "rgba(0, 127, 255, 1)",
//     "rgba(0, 63, 255, 1)",
//     "rgba(0, 0, 255, 1)",
//     "rgba(0, 0, 223, 1)",
//     "rgba(0, 0, 191, 1)",
//     "rgba(0, 0, 159, 1)",
//     "rgba(0, 0, 127, 1)",
//     "rgba(63, 0, 91, 1)",
//     "rgba(127, 0, 63, 1)",
//     "rgba(191, 0, 31, 1)",
//     "rgba(255, 0, 0, 1)",
//   ];

//   heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
// }

// function changeRadius(): void {
//   heatmap.set("radius", heatmap.get("radius") ? null : 20);
// }

// function changeOpacity(): void {
//   heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
// }

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }
// window.initMap = initMap;
// export {};
