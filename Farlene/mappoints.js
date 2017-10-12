//Sets up the map points//


var map = L.map('farlene', {
    crs: L.CRS.Simple
});

var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('images/farlene.png', bounds).addTo(map);
map.fitBounds(bounds);