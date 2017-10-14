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
		y = parseFloat(city.y); x = parseFloat(city.x);
		var circle = L.marker([y,x], {
	   		bubblingMouseEvents: false
		});
		circle.city = city;
		circle.on('click', function(e){
			backButton(e.target.city);
		});
		circle.addTo(map);
	}
	return map;
}

function openInfo(city){
	$('#farleneInfo').empty();
	$('#farleneInfo').append('Population: ' + city.pop);
	p = document.createElement('p');
	p.append(city.info);
	$('#farleneInfo').append(p);
	$('#farleneInfo').append(genBackButt(city));
}

function openStores(city){
	$('#farleneInfo').empty();
	$('#farleneInfo').append(genBackButt(city));
}

function openNotes(city){
	$('#farleneInfo').empty();
	for(var i = 0; i < city.notes.length; i++){
		p = document.createElement('p');
		p.append(city.notes[i]);
		$('#farleneInfo').append(p);	
	}
	$('#farleneInfo').append(genBackButt(city));
}

function backButton(city){
	$('#farleneInfo').empty();
	info = genButton('Information');
	info.onclick = function(){
		openInfo(city);
	};
	stores = genButton('Stores');
	stores.onclick = function(){
		openStores(city);
	};
	notes = genButton('Notes');
	notes.onclick = function(){
		openNotes(city);
	};
	var eleArray = [info, stores, notes];
	$('#farleneInfo').append(eleArray);
}

function genButton(name){
	button = document.createElement('button');
	button.textContent = name;
	return button;
}

function genBackButt(city){
	back = genButton("Back");
	back.onclick = function(){
		backButton(city);
	};	
	return back;
}

