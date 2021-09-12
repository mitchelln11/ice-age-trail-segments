import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
    apiKey: "AIzaSyCjlyolAw73pWp1kaQDA5iyjV3t6E415jw",
    version: "weekly"
});

loader.load().then(() => {
    map = new google.maps.Map(document.getElementById("map", {
        center: { lat: 44.157884, lng: -87.544835 },
        zoom: 19,
        mapTypeId: "satellite",
    }));
});