// script.js
function initMap() {
    const location = { lat: 37.7749, lng: -122.4194 }; // Example coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 15,
        mapId: "3dmap_id" // Replace with your Google 3D map ID if available
    });

    // Example marker
    new google.maps.Marker({
        position: location,
        map: map,
        title: "San Francisco"
    });
}
