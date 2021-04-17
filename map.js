var mymap = L.map('mapid').setView([39.867376020395135, -104.67181074323783], 10);

// var popup = L.popup();
// var denver    = L.marker([39.867376020395135, -104.67181074323783]).bindPopup('This is Denver Airport!.');

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2FzMTQiLCJhIjoiY2tuYzB4NHg1MHpkNjJwazg3NHE1Z2Y2MSJ9.0hf0lV2dKaQd2V-lFxdJ4g'
    
}).addTo(mymap);

mymap.locate({watch: true})


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);



