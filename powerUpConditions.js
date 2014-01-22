function powerUpTest(object){
	parentDivID = object.parentNode.parentNode;
	powerUpDiv = parentDivID.children[0].children[2];
	popUp = Math.random();
	var popUpSetPoint;
	if (parentDivID.id == "player1"){
		popUpSetPoint = 0.05 * (1 + Math.pow((Math.exp(-0.025*p1Diff)), 0.8))
		if (p1Diff <= 0){
			pUpValue = Math.floor(Math.max(Math.abs(30*(1 + 5*Math.sin((1+p1Diff)/135))), 30));
		} else {
			pUpValue = 30;
		}
	} else {
		popUpSetPoint = 0.05 * (1 + Math.pow((Math.exp(-0.025*p2Diff)), 0.8))
		if (p2Diff <= 0){
			pUpValue = Math.floor(Math.max(Math.abs(30*(1 + 5*Math.sin((1+p2Diff)/135))), 30));
		} else {
			pUpValue = 30;
		}
	}
	console.log(pUpValue);
	if (popUp < popUpSetPoint){
		popUpType = Math.random();
		if(popUpType < 0.05){
			popUpString = 'tripleBarrel';
		}
		else if( 0.15 > popUpType >= 0.05){
			popUpString = 'doubleBarrel';
		}
		else if(0.45 > popUpType >= 0.15){
			popUpString = 'shock';
		}
		else if(0.75 > popUpType >= 0.45){
			popUpString = 'glove';
		} 
		else if (0.9 > popUpType >= 0.75){
			popUpString = 'blackHole';
		}else if (1.0 > popUpType >= 0.9){
			popUpString = 'heatSeeker';
		} else {
			return;
		}
		var button = document.createElement('button');
        var img1 = document.createElement('img');
        img1.setAttribute('src', "images/"+popUpString+".jpg");
        button.appendChild(img1);
        button.setAttribute('onClick', "readPowerUp(\""+popUpString+"\", this, "+pUpValue+")");
        button.setAttribute('title', powerUpTooltip(popUpString, pUpValue))
        powerUpDiv.appendChild(button);
        powerUpMessage(popUpString, parentDivID.id, pUpValue);	
        Math.p
	}
}

function powerUpNumber(parentDivID, number){
	popUp = Math.random();
	if (popUp < 0.25){
		popUpString = "subtractor";
	} else if ( 0.25 <= popUp < 0.5){
		popUpString = "shock";
	} else if ( 0.5 <= popUp < 0.75){
		popUpString = "blackHole";
	} else if ( 0.75 <= popUp <= 1){
		popUpString = "shield";
	} else {
		return;
	}
	var button = document.createElement('button');
    var img1 = document.createElement('img');
    img1.setAttribute('src', "images/"+popUpString+".jpg");
    button.appendChild(img1);
    button.setAttribute('onClick', "readPowerUp(\""+popUpString+"\", this,"+number+")");
    button.setAttribute('title', powerUpTooltip(popUpString, number))
    powerUpDiv.appendChild(button);
    powerUpMessage(popUpString, parentDivID, number);	
}
