//Sets up the map points//

var mapBool = false;
var popup = L.popup();

function onMapClick() {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

function onMarkOver() {
	$('#farlene_info').empty();
    $('#farlene_info').append('THIS IS A TEST');
}

function worldMap(){
	if(mapBool == true){
		node = document.getElementById('farlene');
		node2 = document.getElementById('farlene_info');
		document.getElementById('vizFrame').removeChild(node);
		document.getElementById('vizFrame').removeChild(node2);
		mapBool = false;
		map = null;
		return;
	}
	if(mapBool == false){
		var mapDiv = document.createElement("div");
		mapDiv.id = 'farlene';
		$("#vizFrame").append(mapDiv);
		
		var infoDiv = document.createElement("div");
		infoDiv.id = 'farlene_info';
		$("#vizFrame").append(infoDiv);
		
		var map = L.map('farlene', {
			crs: L.CRS.Simple
		});
		map = addPoints(map);
		map.on('click', onMapClick);
		var bounds = [[0,0], [1000,1500]];
		var image = L.imageOverlay('Farlene/images/farlene.png', bounds).addTo(map);
		map.fitBounds(bounds);
		mapBool = true;	
		return;	
	}
}

function addPoints(map){
	var circle = L.circle([502, 979], {
	    color: 'black',
	    radius: 6,
	    weight: 1,
	    fillOpacity: 0
	}).addTo(map);
	circle.on('click', onMarkOver);
	return map;
}

