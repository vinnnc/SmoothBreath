var map, heatmap;

var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
]
function initMap() {
    map = new google.maps.Map(document.getElementById('pollenMap'), {
        zoom: 6,
        center: {lat: -37.020100, lng: 144.964600},
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map,
        radius: 20,
        gradient: gradient
    });


}

function getPoints() {
    return [
        {location: new google.maps.LatLng(-37.5788, 145.693), weight: 0.1},
//  new google.maps.LatLng(37.782, -122.445),
        {location: new google.maps.LatLng(-38.3733, 145.6888), weight: 0.3},
        {location: new google.maps.LatLng(-35.1913, 142.1444), weight: 6},
        {location: new google.maps.LatLng(-37.2916, 148.3416), weight: 1.5},
//  new google.maps.LatLng(37.782, -122.437),
        {location: new google.maps.LatLng(-38.0578, 143.7363), weight: 1.2},
        {location: new google.maps.LatLng(-37.3016, 148.3416), weight: 1.3},
        {location: new google.maps.LatLng(-37.2956, 148.3416), weight: 1.5},
        {location: new google.maps.LatLng(-37.3116, 148.3416), weight: 1.5},
    ];
}