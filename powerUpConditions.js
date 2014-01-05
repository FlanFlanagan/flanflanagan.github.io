function powerUpTest(object){
	parentDivID = object.parentNode.parentNode;
	powerUpDiv = parentDivID.children[0].children[2];
	popUp = Math.random();
	var popUpSetPoint;
	if (parentDivID.id == "player1"){
		popUpSetPoint = 0.05 * (1 + Math.exp(-0.007*p1Diff))
	} else {
		popUpSetPoint = 0.05 * (1 + Math.exp(-0.007*p2Diff))
	}
	console.log(popUpSetPoint);
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
		else if (1.0 > popUpType >= 0.75){
			popUpString = 'blackHole';
		}else {
			return;
		}
		var button = document.createElement('button');
        var img1 = document.createElement('img');
        img1.setAttribute('src', "images/"+popUpString+".jpg");
        button.appendChild(img1);
        button.setAttribute('onClick', "readPowerUp(\""+popUpString+"\", this, null)");
        button.setAttribute('title', powerUpTooltip(popUpString, null))
        powerUpDiv.appendChild(button);
        powerUpMessage(popUpString, parentDivID.id, null);	
	}
}

function powerUpNumber(number){
	popUp = Math.random();
	if (popUp <0.25){
		popUpString = "subtractor";
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
    powerUpMessage(popUpString, parentDivID.id, number);	
}
