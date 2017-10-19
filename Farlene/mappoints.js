//Sets up the map points//

var popup = L.popup();
var loc1;
var loc2;

function onMarkOver() {
	$('#farleneInfo').empty();
    $('#farleneInfo').append("info");
}

function worldMap(style){
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
		loc2 = loc1;
		loc1 = e.latlng;
		if(loc2){
			d = distance_calc(loc1, loc2).toFixed(2);			
		}
		popup
	        .setLatLng(e.latlng)
	        .setContent("Coordinates: " + loc1.toString().replace("LatLng", "") + 
	        '</br>Days travel at normal pace: ' + d)
	        .openOn(map);
	});
	var bounds = [[0,0], [1000,1500]];
	var image = L.imageOverlay('Farlene/images/'+style+'.png', bounds).addTo(map);
	map.fitBounds(bounds);
	return;	
}

function addPoints(map){
	for(var key in cities){
		var city = cities[key];
		y = parseFloat(city.y); x = parseFloat(city.x);
		var marker = L.marker([y,x], {
	   		bubblingMouseEvents: false
		});
		marker.city = city;
		marker.on('click', function(e){
			backButton('city', e.target.city);
		});
		marker.addTo(map);
	}
	for(var key in temples){
		var temple = temples[key];
		y = parseFloat(temple.y); x = parseFloat(temple.x);
		var marker = L.marker([y,x], {
	   		bubblingMouseEvents: false
		});
		marker.temple = temple;
		marker.on('click', function(e){
			backButton('temple', e.target.temple);
		});
		marker.addTo(map);
	}
	return map;
}

function openInfo(type, obj){
	$('#farleneInfo').empty();
	if(type == 'city'){
		$('#farleneInfo').append('Population: ' + obj.pop);
	}
	p = document.createElement('p');
	p.append(obj.info);
	$('#farleneInfo').append(p);
	$('#farleneInfo').append(genBackButt(type, obj));
}

function openStores(type, obj){
	$('#farleneInfo').empty();
	$('#farleneInfo').append(genBackButt(type, obj));
}

function openNotes(type, obj){
	$('#farleneInfo').empty();
	for(var i = 0; i < obj.notes.length; i++){
		p = document.createElement('p');
		p.append(obj.notes[i]);
		$('#farleneInfo').append(p);	
	}
	$('#farleneInfo').append(genBackButt(type, obj));
}

function backButton(type, obj){
	$('#farleneInfo').empty();
	info = genButton('Information');
	info.onclick = function(){
		openInfo(type, obj);
	};
	if(type == 'city'){
		stores = genButton('Stores');
		stores.onclick = function(){
			openStores(type, obj);
		};
	}
	notes = genButton('Notes');
	notes.onclick = function(){
		openNotes(type, obj);
	};
	var eleArray = [info, notes];
	if(type == 'city'){eleArray = [info, stores, notes];}
	$('#farleneInfo').append(eleArray);
}

function genButton(name){
	button = document.createElement('button');
	button.textContent = name;
	return button;
}

function genBackButt(type, obj){
	back = genButton("Back");
	back.onclick = function(){
		if(type == 'city'){
			backButton('city', obj);
		} else if(type == 'temple'){
			backButton('temple', obj);
		}
	};	
	return back;
}
function distance_calc(loc1, loc2){
	x = loc1.lng - loc2.lng;
	y = loc1.lat - loc2.lat;
	d = Math.sqrt(x*x + y*y);
	d = d / 14;
	return d;
}
