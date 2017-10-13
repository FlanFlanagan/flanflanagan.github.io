//Sets up the map points//

var popup = L.popup();

function onMarkOver() {
	$('#farleneInfo').empty();
    $('#farleneInfo').append("info");
}

function worldMap(){
	$('#vizFrame').empty();
	map = null;
	var mapDiv = document.createElement("div");
	mapDiv.id = 'farlene';
	$("#vizFrame").append(mapDiv);
	
	var infoDiv = document.createElement("div");
	infoDiv.id = 'farleneInfo';
	$("#vizFrame").append(infoDiv);
	
	var map = L.map('farlene', {
		crs: L.CRS.Simple
	});
	map = addPoints(map);
	map.on('click', function(e){
	    popup
	        .setLatLng(e.latlng)
	        .setContent("You clicked the map at " + e.latlng.toString())
	        .openOn(map);
	});
	var bounds = [[0,0], [1000,1500]];
	var image = L.imageOverlay('Farlene/images/farlene.png', bounds).addTo(map);
	map.fitBounds(bounds);
	return;	
}

function addPoints(map){
	for(var key in cities){
		var city = cities[key];
		y = parseFloat(city['y']); x = parseFloat(city['x']);
		var circle = L.circle([y,x], {
	    	color: 'black',
	    	radius: 6,
	    	weight: 1,
	   		fillOpacity: 0
		}).addTo(map);
		circle.on('click', function(e){
			$('#farleneInfo').empty();
    		$('#farleneInfo').append(city['info']);
		});
		circle.addTo(map);
	}
	return map;
}

