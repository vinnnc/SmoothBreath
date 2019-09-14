var map;
var icon;
var markersMap;          
var InforObj = [];
            
var centerCords = {
    lat: -37.020100,
    lng: 144.964600
    };

var allMarkersOnMap =
    [
        {placeName: "Ballarat",LatLng: [{lat:-37.5169,lng: 143.8244}]},
        {placeName: "Indigo",LatLng: [{lat: -36.1513,lng: 146.6455}]},
        {placeName: "Baw Baw",LatLng: [{lat: -38.1,lng: 146.4}]},
        {placeName: "Bass Coast",LatLng: [{lat: -38.3733,lng: 145.6888}]},
        {placeName: "South Gippsland",LatLng: [{lat: -38.4644,lng: 145.95}]},
        {placeName: "Yarra Ranges",LatLng: [{lat: -37.7122,lng: 145.6194}]},
        {placeName: "Greater Shepparton",LatLng: [{lat: -36.3902,lng: 145.3719}]},
        {placeName: "Murrindindi",LatLng: [{lat: -37.5788,lng: 145.693}]},
        {placeName: "Towong",LatLng: [{lat: -36.5833,lng: 147.8516}]},
        {placeName: "East Gippsland",LatLng: [{lat: -37.2916,lng: 148.3416}]},
        {placeName: "South Gippsland",LatLng: [{lat: -38.9722,lng: 146.3722}]},
        {placeName: "Yarra Ranges",LatLng: [{lat: -37.7122,lng: 145.6194}]},
        {placeName: "Mansfield",LatLng: [{lat: -37.3152,lng: 146.2508}]},
        {placeName: "Baw Baw",LatLng: [{lat: -37.9002,lng: 145.7838}]},
        {placeName: "Wangaratta",LatLng: [{lat: -36.2837,lng: 146.2508}]},
        {placeName: "Alpine",LatLng: [{lat: -36.7908,lng: 146.7858}]},
        {placeName: "Murrindindi",LatLng: [{lat: -37.5788,lng: 145.693}]},
        {placeName: "Corangamite",LatLng: [{lat: -38.5552,lng: 143.1902}]},
        {placeName: "Horsham",LatLng: [{lat: -37.2086,lng: 141.9469}]},
        {placeName: "Colac-Otway",LatLng: [{lat: -38.0578,lng: 143.7363}]},
        {placeName: "Yarra Ranges",LatLng: [{lat: -37.7122,lng: 145.6194}]},
        {placeName: "Wodonga",LatLng: [{lat: -36.0713,lng: 146.715}]},
        {placeName: "Gannawarra",LatLng: [{lat: -35.7697,lng: 143.6245}]},
        {placeName: "Alpine",LatLng: [{lat: -36.7908,lng: 146.7858}]},
        {placeName: "Mount Alexander",LatLng: [{lat: -37.0719,lng: 144.2027}]},
        {placeName: "East Gippsland",LatLng: [{lat: -37.2916,lng: 148.3416}]},
        {placeName: "Bass Coast",LatLng: [{lat: -38.3733,lng: 145.6888}]},
        {placeName: "Greater Shepparton",LatLng: [{lat: -36.3902,lng: 145.3719}]},
        {placeName: "Towong",LatLng: [{lat: -36.5833,lng: 147.8516}]},
        {placeName: "Colac-Otway",LatLng: [{lat: -38.0578,lng: 143.7363}]},
        {placeName: "Moyne",LatLng: [{lat: -38.0269,lng:141.8402}]},
        {placeName: "Ararat",LatLng: [{lat: -37.5666,lng: 143.1436}]},
        {placeName: "Pyrenes",LatLng: [{lat: -37.1233,lng: 143.368}]},
        {placeName: "East Gippsland",LatLng: [{lat: -37.2916,lng: 148.3416}]},
        {placeName: "Towong",LatLng: [{lat: -36.5833,lng: 147.8516}]},
        {placeName: "Colac-Otway",LatLng: [{lat: -38.0578,lng: 143.7363}]},
        {placeName: "Yarra Ranges",LatLng: [{lat: -37.7122,lng: 145.6194}]},
        {placeName: "Moyne",LatLng: [{lat: -38.0269,lng:141.8402}]},
        {placeName: "Mount Alexander",LatLng: [{lat: -37.0719,lng: 144.2027}]},
        {placeName: "Benalla",LatLng: [{lat: -36.3113,lng: 146.1658}]},
        {placeName: "Alpine",LatLng: [{lat: -36.7908,lng: 146.7858}]},
    ];

var oakMarkersOnMap = [
    {placeName: "Ballarat",LatLng: [{lat:-37.5169,lng: 143.8244}]},
    {placeName: "Indigo",LatLng: [{lat: -36.1513,lng: 146.6455}]}, 
    {placeName: "Baw Baw",LatLng: [{lat: -38.1,lng: 146.4}]},
    {placeName: "Bass Coast",LatLng: [{lat: -38.3733,lng: 145.6888}]},
    {placeName: "South Gippsland",LatLng: [{lat: -38.4644,lng: 145.95}]},
    {placeName: "Yarra Ranges",LatLng: [{lat: -37.7122,lng: 145.6194}]},
    {placeName: "Greater Shepparton",LatLng: [{lat: -36.3902,lng: 145.3719}]}
];
                 
var brushMarkersOnMap = [
    {placeName: "Murrindindi",LatLng: [{lat: -37.5788,lng: 145.693}]},
    {placeName: "Towong",LatLng: [{lat: -36.5833,lng: 147.8516}]},
    {placeName: "East Gippsland",LatLng: [{lat: -37.2916,lng: 148.3416}]},
    {placeName: "South Gippsland",LatLng: [{lat: -38.9722,lng: 146.3722}]},
    {placeName: "Yarra Ranges",LatLng: [{lat: -37.7122,lng: 145.6194}]},
    {placeName: "Mansfield",LatLng: [{lat: -37.3152,lng: 146.2508}]},
    {placeName: "Baw Baw",LatLng: [{lat: -37.9002,lng: 145.7838}]},
    {placeName: "Wangaratta",LatLng: [{lat: -36.2837,lng: 146.2508}]},
    {placeName: "Alpine",LatLng: [{lat: -36.7908,lng: 146.7858}]}
];

var lesserMarkersOnMap = [
    {placeName: "Murrindindi",LatLng: [{lat: -37.5788,lng: 145.693}]},
    {placeName: "Corangamite",LatLng: [{lat: -38.5552,lng: 143.1902}]},
    {placeName: "Horsham",LatLng: [{lat: -37.2086,lng: 141.9469}]},
    {placeName: "Colac-Otway",LatLng: [{lat: -38.0578,lng: 143.7363}]},
    {placeName: "Yarra Ranges",LatLng: [{lat: -37.7122,lng: 145.6194}]},
    {placeName: "Wodonga",LatLng: [{lat: -36.0713,lng: 146.715}]},
    {placeName: "Gannawarra",LatLng: [{lat: -35.7697,lng: 143.6245}]},
    {placeName: "Alpine",LatLng: [{lat: -36.7908,lng: 146.7858}]}
];

var shadeMarkersOnMap = [
    {placeName: "Mount Alexander",LatLng: [{lat: -37.0719,lng: 144.2027}]},
    {placeName: "East Gippsland",LatLng: [{lat: -37.2916,lng: 148.3416}]},
    {placeName: "Bass Coast",LatLng: [{lat: -38.3733,lng: 145.6888}]},
    {placeName: "Greater Shepparton",LatLng: [{lat: -36.3902,lng: 145.3719}]},
    {placeName: "Towong",LatLng: [{lat: -36.5833,lng: 147.8516}]},
    {placeName: "Colac-Otway",LatLng: [{lat: -38.0578,lng: 143.7363}]},
    {placeName: "Moyne",LatLng: [{lat: -38.0269,lng:141.8402}]},
    {placeName: "Ararat",LatLng: [{lat: -37.5666,lng: 143.1436}]},
    {placeName: "Pyrenes",LatLng: [{lat: -37.1233,lng: 143.368}]}
];

var timothyMarkersOnMap = [
    {placeName: "East Gippsland",LatLng: [{lat: -37.2916,lng: 148.3416}]},
    {placeName: "Towong",LatLng: [{lat: -36.5833,lng: 147.8516}]},
    {placeName: "Colac-Otway",LatLng: [{lat: -38.0578,lng: 143.7363}]},
    {placeName: "Yarra Ranges",LatLng: [{lat: -37.7122,lng: 145.6194}]},
    {placeName: "Moyne",LatLng: [{lat: -38.0269,lng:141.8402}]},
    {placeName: "Mount Alexander",LatLng: [{lat: -37.0719,lng: 144.2027}]},
    {placeName: "Benalla",LatLng: [{lat: -36.3113,lng: 146.1658}]},
    {placeName: "Alpine",LatLng: [{lat: -36.7908,lng: 146.7858}]},
];

var pollenIcon = {url :"images/icons8-pollen-30.png"};

var oakIcon = {url: "images/icons8-oak-tree-30.png"};

var grassIcon = {url: "images/icons8-grass-30.png"};

var timothyIcon = {url: "images/icons8-creek-30.png"};

var bottlebrushIcon = {url: "images/icons8-asparagus-30.png"};

var shadeIcon = {url :"images/icons8-natural-food-30.png"};
            
window.onload = function () {
    initMap();
    };
            
function addMarkerInfo() {
    if (document.getElementById("all").checked)
    {
        markersMap = allMarkersOnMap;
        icon = pollenIcon;
    }
    else if (document.getElementById("eo").checked)
    {
        markersMap = oakMarkersOnMap;
        icon = oakIcon;
    }
    else if (document.getElementById("lb").checked)
    {
        markersMap = brushMarkersOnMap;
        icon = bottlebrushIcon;
    }
    else if (document.getElementById("lc").checked)
    {
        markersMap = lesserMarkersOnMap;
        icon = grassIcon;
    }
    else if (document.getElementById("sp").checked)
    {
        markersMap = shadeMarkersOnMap;
        icon = shadeIcon;
    }
     else if (document.getElementById("tg").checked)
     {
         markersMap = timothyMarkersOnMap;
         icon = timothyIcon;
     }
    for (var i = 0; i < markersMap.length; i++) {
        var contentString = '<p><b>Place : </b><p>' + markersMap[i].placeName + '<a href="pollenIntro.html"><p>More Info<p></a>'; 
        const marker = new google.maps.Marker({
        position: markersMap[i].LatLng[0],
        map: map,
        icon: icon
        });

        const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
        });

        marker.addListener('click', function () {
        closeOtherInfo();
        infowindow.open(marker.get('map'), marker);
        InforObj[0] = infowindow;});
        }
}
            
            
function closeOtherInfo() {
    if (InforObj.length > 0) {
    /* detach the info-window from the marker ... undocumented in the API docs */
        InforObj[0].set("marker", null);
        /* and close it */
        InforObj[0].close();
        /* blank the array */
        InforObj.length = 0;
        }
    }

function initMap() {
    map = new google.maps.Map(document.getElementById('pollenMap'), {
        zoom: 7,
        center: centerCords
    });
    addMarkerInfo();
}           