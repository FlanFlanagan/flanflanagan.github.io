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
	map = addPoints(map, style);
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

function addPoints(map, style){
	cities = data[style]['cities']
	temples = data[style]['temples']
	interests = data[style]['interests']
	for(var key in cities){
		var city = cities[key];
		y = parseFloat(city.y); x = parseFloat(city.x);
		var marker = L.marker([y,x], {
	   		bubblingMouseEvents: false
		});
		marker.city = city;
		marker.name = key;
		marker.on('click', function(e){
			genInfo('city', e.target.name, e.target.city);
		});
		marker.addTo(map);
	}
	for(var key in temples){
		var temple = temples[key];
		y = parseFloat(temple.y); x = parseFloat(temple.x);
		var marker = L.marker([y,x], {
	   		bubblingMouseEvents: false,
	   		icon: templeIcon
		});
		marker.temple = temple;
		marker.name = key;
		marker.on('click', function(e){
			genInfo('temple', e.target.name, e.target.temple);
		});
		marker.addTo(map);
	}
	for(var key in interests){
		var interest = interests[key];
		y = parseFloat(interest.y); x = parseFloat(interest.x);
		var marker = L.marker([y,x], {
	   		bubblingMouseEvents: false,
	   		icon: interestIcon
		});
		marker.interest = interest;
		marker.name = key;
		marker.on('click', function(e){
			genInfo('interest', e.target.name, e.target.interest);
		});
		marker.addTo(map);
	}
	return map;
}

function openInfo(type, name, obj){
	$('#farleneInfo').empty();
	if(type == 'city'){
		p = document.createElement('p');
		p.append('Population: ' + obj.pop);
		$('#farleneInfo').append(p);
	}
	p = document.createElement('p');
	p.append(obj.info);
	$('#farleneInfo').append(p);
	$('#farleneInfo').append(genBackButt(type, name, obj));
}

function openStores(type, name, obj){
	$('#farleneInfo').empty();
	$('#farleneInfo').append(genBackButt(type, name, obj));
}

function openNotes(type, name, obj){
	$('#farleneInfo').empty();
	for(var i = 0; i < obj.notes.length; i++){
		p = document.createElement('p');
		p.append(obj.notes[i]);
		$('#farleneInfo').append(p);	
	}
	$('#farleneInfo').append(genBackButt(type, name, obj));
}

function genInfo(type, name, obj){
	$('#farleneInfo').empty();
	$('#farleneInfo').append(addName(name));
	$('#farleneInfo').append(obj.info);
	notes = genButton('Notes');
	notes.onclick = function(){
		openNotes(type, name, obj);
	};
	if( type != 'interest'){
		eleArray.push(info);
	}
	if(type == 'city'){
		stores = genButton('Stores');
		stores.onclick = function(){
			openStores(type, name, obj);
		};
		eleArray.push(stores);
	}
	var buttonDiv = document.createElement('div');
	buttonDiv.id = 'buttonDiv';
	$('#farleneInfo').append(buttonDiv);
}

function genButton(name){
	button = document.createElement('button');
	button.textContent = name;
	return button;
}

function genBackButt(type, name, obj){
	back = genButton("Back");
	back.onclick = function(){
		if(type == 'city'){
			genInfo('city', name, obj);
		} else if(type == 'temple'){
			genInfo('temple', name, obj);
		} else if(type == 'interest'){
			genInfo('interest', name, obj);
		}
	};	
	return back;
}

function addName(name){
	p = document.createElement('h3');
	p.append(name);
	return p;
}
function distance_calc(loc1, loc2){
	x = loc1.lng - loc2.lng;
	y = loc1.lat - loc2.lat;
	d = Math.sqrt(x*x + y*y);
	d = d / 14;
	return d;
}
