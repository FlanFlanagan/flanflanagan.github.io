function powerUpMessage(string, playerID, number){
	if(playerID == 'player1'){
		player = $('#player1Name')[0].value
	} else {
		player = $('#player2Name')[0].value
	}
	switch (string){
		case ("doubleBarrel"):
			doubleBarrelMessage(player);
			break;
		case ("tripleBarrel"):
			tripleBarrelMessage(player);
			break;
		case ("glove"):
			gloveMessage(player);
			break;
		case ("subtractor"):
			subtractorMessage(player, number);
			break;
		case ("shock"):
			shockMessage(player, number);
			break;
		case ("blackHole"):
			blackHoleMessage(player, number);
			break;
		case ("shield"):
			shieldMessage(player, number);
			break;
		case ("heatSeeker"):
			heatSeekerMessage(player);
			break;
	}
}

function doubleBarrelMessage(player){
    var popupHTML = '<div align="center" class ="facyboxAch" style="background-color: #00B366; width: 600px; min-height: 90px; font-size: 40px; text-color: #AAAAAA;';
    popupHTML = popupHTML + 'border-radius: 3px; border: 3px solid #AAAAAA; font-family: Rockwell; vertical-align: middle;">';
    popupHTML = popupHTML + '<div class = "achieveImage"><img src = "images/doubleBarrel.jpg" width="90" height="90"></div>';
    popupHTML = popupHTML + '<div class = "achieveText"> <b style="font-size: 40px;"> '+player+'<br> has earned DOUBLE BARREL </br></b>';
    popupHTML = popupHTML + '<i style="font-size: 20px;"> Your next non-catch shot hits two times and starts a catch chain. <i> </div>';
    popupHTML = popupHTML + '</div>';
    testFacyBox(popupHTML);
}

function tripleBarrelMessage(player){
    var popupHTML = '<div align="center" class ="facyboxAch" style="background-color: #00B366; width: 600px; min-height: 90px; font-size: 40px; text-color: #AAAAAA;';
    popupHTML = popupHTML + 'border-radius: 3px; border: 3px solid #AAAAAA; font-family: Rockwell; vertical-align: middle;">';
    popupHTML = popupHTML + '<div class = "achieveImage"><img src = "images/tripleBarrel.jpg" width="90" height="90"></div>';
    popupHTML = popupHTML + '<div class = "achieveText"> <b style="font-size: 40px;"> '+player+'<br> has earned TRIPLE BARREL </br></b>';
    popupHTML = popupHTML + '<i style="font-size: 20px;"> Your next non-catch shot hits three times and starts a catch chain, <i> </div>';
    popupHTML = popupHTML + '</div><audio autoplay><source src="sound/gun-cocking-01.mp3"></audio>';
    testFacyBox(popupHTML);
}

function gloveMessage(player){
    var popupHTML = '<div align="center" class ="facyboxAch" style="background-color: #00B366; width: 600px; min-height: 90px; font-size: 40px; text-color: #AAAAAA;';
    popupHTML = popupHTML + 'border-radius: 3px; border: 3px solid #AAAAAA; font-family: Rockwell; vertical-align: middle;">';
    popupHTML = popupHTML + '<div class = "achieveImage"><img src = "images/glove.jpg" width="90" height="90"></div>';
    popupHTML = popupHTML + '<div class = "achieveText"> <b style="font-size: 40px;"> '+player+'<br> has earned a GLOVE </br></b>';
    popupHTML = popupHTML + '<i style="font-size: 20px;"> Gives the user an automatic catch. <i> </div>';
    popupHTML = popupHTML + '</div>';
    testFacyBox(popupHTML);
}

function shockMessage(player, number){
    var popupHTML = '<div align="center" class ="facyboxAch" style="background-color: #00B366; width: 600px; min-height: 90px; font-size: 40px; text-color: #AAAAAA;';
    popupHTML = popupHTML + 'border-radius: 3px; border: 3px solid #AAAAAA; font-family: Rockwell; vertical-align: middle;">';
    popupHTML = popupHTML + '<div class = "achieveImage"><img src = "images/shock.jpg" width="90" height="90"></div>';
    popupHTML = popupHTML + '<div class = "achieveText"> <b style="font-size: 40px;"> '+player+'<br> has earned SHOCK </br></b>';
    popupHTML = popupHTML + '<i style="font-size: 20px;"> When used your opponent\'s next shot is worth '+Math.min(Math.floor(number), 100)+'% less points. <i> </div>';
    popupHTML = popupHTML + '</div>';
    testFacyBox(popupHTML);
}

function subtractorMessage(player, number){
    var popupHTML = '<div align="center" class ="facyboxAch" style="background-color: #00B366; width: 600px; min-height: 90px; font-size: 40px; text-color: #AAAAAA;';
    popupHTML = popupHTML + 'border-radius: 3px; border: 3px solid #AAAAAA; font-family: Rockwell; vertical-align: middle;">';
    popupHTML = popupHTML + '<div class = "achieveImage"><img src = "images/subtractor.jpg" width="90" height="90"></div>';
    popupHTML = popupHTML + '<div class = "achieveText"> <b style="font-size: 40px;"> '+player+'<br> has earned a '+Math.floor(number)+' point Subractor! </br></b>';
    popupHTML = popupHTML + '<i style="font-size: 20px;"> When used your opponent\'s next shot is worth '+Math.floor(number)+' less points. <i> </div>';
    popupHTML = popupHTML + '</div>';
    testFacyBox(popupHTML);
}

function blackHoleMessage(player, number){
    var popupHTML = '<div align="center" class ="facyboxAch" style="background-color: #00B366; width: 600px; min-height: 90px; font-size: 40px; text-color: #AAAAAA;';
    popupHTML = popupHTML + 'border-radius: 3px; border: 3px solid #AAAAAA; font-family: Rockwell; vertical-align: middle;">';
    popupHTML = popupHTML + '<div class = "achieveImage"><img src = "images/blackHole.jpg" width="90" height="90"></div>';
    popupHTML = popupHTML + '<div class = "achieveText"> <b style="font-size: 40px;"> '+player+'<br> has earned the BLACK HOLE power up! </br></b>';
    popupHTML = popupHTML + '<i style="font-size: 20px;"> Your opponent must score at least '+Math.floor(number/2)+' points before their shots count toward their score. <i> </div>';
    popupHTML = popupHTML + '</div>';
    testFacyBox(popupHTML);	
}

function shieldMessage(player, number){
    var popupHTML = '<div align="center" class ="facyboxAch" style="background-color: #00B366; width: 600px; min-height: 90px; font-size: 40px; text-color: #AAAAAA;';
    popupHTML = popupHTML + 'border-radius: 3px; border: 3px solid #AAAAAA; font-family: Rockwell; vertical-align: middle;">';
    popupHTML = popupHTML + '<div class = "achieveImage"><img src = "images/shield.jpg" width="90" height="90"></div>';
    popupHTML = popupHTML + '<div class = "achieveText"> <b style="font-size: 40px;"> '+player+'<br> has earned a '+ Math.floor(number)+' point SHIELD power up! </br></b>';
    popupHTML = popupHTML + '<i style="font-size: 20px;"> You may block '+Math.floor(number)+' attacks from your opponent. <i> </div>';
    popupHTML = popupHTML + '</div>';
    testFacyBox(popupHTML);	
}

function heatSeekerMessage(player){
    var popupHTML = '<div align="center" class ="facyboxAch" style="background-color: #00B366; width: 600px; min-height: 90px; font-size: 40px; text-color: #AAAAAA;';
    popupHTML = popupHTML + 'border-radius: 3px; border: 3px solid #AAAAAA; font-family: Rockwell; vertical-align: middle;">';
    popupHTML = popupHTML + '<div class = "achieveImage"><img src = "images/heatSeeker.jpg" width="90" height="90"></div>';
    popupHTML = popupHTML + '<div class = "achieveText"> <b style="font-size: 40px;"> '+player+'<br> has earned heat seeker! </br></b>';
    popupHTML = popupHTML + '<i style="font-size: 20px;"> Your next shot hits for at least 10 points (debuffs remove this effect) and hits for double.  <i> </div>';
    popupHTML = popupHTML + '</div>';
    testFacyBox(popupHTML);	
}