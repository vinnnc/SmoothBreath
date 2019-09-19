let csv = require('csv-parser');
let fs = require('fs');
var lon = [];
var lat = [];
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
];
var location = [];

fs.createReadStream('../Files/English oak.csv')
    .pipe(csv())
    .on('data', (row) => {
        lat.push(row.Latitude + ',' +  row.Longitude);
    })
    .on('end', () => {
        for (var i = 0; i < lat.length; i++)
        {
            location.push('new google.maps.LatLng(' + lat[i] + ')');
        }
        map = new google.maps.Map(document.getElementById('pollenMap'), {
            zoom: 6,
            center: {lat: -37.020100, lng: 144.964600},
        });

        heatmap = new google.maps.visualization.HeatmapLayer({
            data: location,
            map: map,
            radius: 20,
            gradient: gradient
        });
        console.log(location);
    });

