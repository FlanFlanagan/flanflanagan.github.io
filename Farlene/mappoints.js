//Sets up the map points//

var mapBool = false;

function worldMap(){
	if(mapBool == true){
		node = document.getElementById('farlene');
		document.getElementById('vizFrame').removeChild(node);
		mapBool = false;
		map = null;
		return;
	}
	if(mapBool == false){
		var div = document.createElement("div");
		div.id = 'farlene';
		$("#vizFrame").append(div);
		
		var map = L.map('farlene', {
			crs: L.CRS.Simple
		});
		map = addPoints(map);
		var bounds = [[0,0], [1000,1500]];
		var image = L.imageOverlay('Farlene/images/farlene.png', bounds).addTo(map);
		map.fitBounds(bounds);
		mapBool = true;	
		return;	
	}
}

function addPoints(map){
	var sol = L.latLng([ 500, 980]);
	L.marker(sol).addTo(map).bindPopup('Montess City');
	return map;
}

