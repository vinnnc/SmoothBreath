var map;

function initMap() {
    // Create the map.
    var victoria = {lat: -37.8136, lng: 144.9631};
    map = new google.maps.Map(document.getElementById('map'), {
        center: victoria,
        zoom: 7
    });
}
