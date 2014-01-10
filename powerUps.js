function readPowerUp(string, object, number){
	switch (string){
		case ("shock"):
			shock(object, number);
			break;
		case ("glove"):
			glove(object);
			break;
		case ("doubleBarrel"):
			doubleBarrel(object);
			break;
		case ("tripleBarrel"):
			tripleBarrel(object);
			break;
		case ("subtractor"):
			subtractor(object, number);
			break;
		case ("blackHole"):
			blackHole(object, number);
			break;
		case ("shield"):
			shield(object, number);
			break;
		case ("heatSeeker"):
			heatSeeker(object);
			break;
	}
}
function heatSeeker(object){
	test = object.parentNode.parentNode.parentNode;
	var secondCheck = 0;
	test1 = test.children.namedItem(test.id+'set'+set);
	for (var i = 0; i < test1.children.length; i++){
		if(test1.children.item(i).type == 'select-one'){
			if(test1.children.item(i).className != 'shotdone'){
				/*if ( secondCheck == 1){
					workingObj = test1.children.item(i);
					$('option', workingObj).remove();
					workingObj.add(new Option("0", "0"));
				}else {*/
					workingObj = test1.children.item(i);
					string10 = Math.max((parseFloat(workingObj.item(2).value))*2, 0).toString();
					string30 = Math.max((parseFloat(workingObj.item(3).value))*2, 0).toString();
					string50 = Math.max((parseFloat(workingObj.item(4).value))*2, 0).toString();
					string100 = Math.max((parseFloat(workingObj.item(5).value))*2, 0).toString();
					$('option', workingObj).remove();
					workingObj.add(new Option("HS", "HS"));
					workingObj.add(new Option("10", "10"));
					workingObj.add(new Option(string10, string10));
					workingObj.add(new Option(string30, string30));
					workingObj.add(new Option(string50, string50));
					workingObj.add(new Option(string100, string100));
					secondCheck += 1;	
					break;				
			}
		}	
	}
	object.remove();
}

function shield(object, number){
	parentDivID = object.parentNode.parentNode.parentNode.id;
	if (parentDivID == "player1"){
		player1Def += number;
		player1Def = Math.min(player1Def, 500);
		document.getElementById('player1').style.borderColor = "#ccffe6";
		document.getElementById('player1').style.boxShadow = "inset 0px 0px "+player1Def*2+"px #ccffe6";
	} else {
		player2Def += number;
		player2Def = Math.min(player2Def, 500);
		document.getElementById('player2').style.borderColor = "#ccffe6";
		document.getElementById('player2').style.boxShadow = "inset 0px 0px "+player2Def*2+"px #ccffe6";
	}
	object.remove();
}

function blackHole(object, number){
	parentDivID = object.parentNode.parentNode.parentNode;
	defArray = defenseCheck(parentDivID, number/2)
	console.log(defArray[1]);
    if (defArray[0] == true){
    	object.remove();
    	return;
    } else {
    	number = defArray[1];
    }
    if (parentDivID.id == 'player1'){
    	player2Sink += number;
		if (player2Sink > 0){
			document.getElementById('player2').style.borderColor = "#000000";
			document.getElementById('player2').style.boxShadow = "inset 0px 0px "+player2Sink*20+"px #000000";
		}
    } else {
    	player1Sink += number;
		if (player1Sink > 0){
			document.getElementById('player1').style.borderColor = "#000000";
			document.getElementById('player1').style.boxShadow = "inset 0px 0px "+player1Sink*20+"px #000000";
		}
    }
	object.remove();
}

function subtractor(object, number){
	test = object.parentNode.parentNode.parentNode;
	defArray = defenseCheck(test, number)
    if (defArray[0] == true){
    	object.remove();
    	return;
    } else {
    	numberVal = defArray[1]
    }
    if (test.id == "player1"){
    	test = document.getElementById('player2');
    } else {
    	test = document.getElementById('player1');
    }
	test1 = test.children.namedItem(test.id+'set'+set);
	for (var i = 0; i < test1.children.length; i++){
		if(test1.children.item(i).type == 'select-one'){
			if(test1.children.item(i).className != 'shotdone'){
				workingObj = test1.children.item(i);
				string10 = Math.max((parseFloat(workingObj.item(2).value)) - Math.floor(numberVal), 0).toString();
				string30 = Math.max((parseFloat(workingObj.item(3).value)) - Math.floor(numberVal), 0).toString();
				string50 = Math.max((parseFloat(workingObj.item(4).value)) - Math.floor(numberVal), 0).toString();
				string100 = Math.max((parseFloat(workingObj.item(5).value)) - Math.floor(numberVal), 0).toString();
				for(var ii = 1; ii < workingObj.options.length; ii++){
					workingObj.options[ii].remove();
					ii -= 1;
				}
				workingObj.add(new Option("0", "0"));
				workingObj.add(new Option(string10, string10));
				workingObj.add(new Option(string30, string30));
				workingObj.add(new Option(string50, string50));
				workingObj.add(new Option(string100, string100));
				break;
			}
		}	
	}
	object.remove();
}

function glove(object){
	parentDivID = object.parentNode.parentNode.parentNode;
	formDiv = parentDivID.children.namedItem(parentDivID.id+'set'+set);
	trackerNumber = 0
	for (var i = 0; i < formDiv.children.length; i++){
		if(formDiv.children.item(i).type == 'submit'){
			if(formDiv.children.item(i).getAttribute('round') != 'over'){
				trackerNumber = i;
				break;
			}
		}
	}
	catchChainTracker(formDiv.children.item(trackerNumber))
	catchChainSelect(formDiv.children.item(trackerNumber),catchChainMultipliers[catchChainTotal]);
	object.remove();
}

function doubleBarrel(object){
	parentDivID = object.parentNode.parentNode.parentNode;
	formDiv = parentDivID.children.namedItem(parentDivID.id+'set'+set);
	for (var i = 0; i < formDiv.children.length; i++){
		if(formDiv.children[i].type == 'select-one'){
			if(formDiv.children[i].className != 'catch' && formDiv.children[i].className != 'shotdone'){
				$('option', formDiv.children[i]).remove();
				formDiv.children.item(i).add(new Option("DB", "DB"));
				formDiv.children.item(i).add(new Option("0", "0"));
				formDiv.children.item(i).add(new Option(string10, string10));
				formDiv.children.item(i).add(new Option(string30, string30));
				formDiv.children.item(i).add(new Option(string50, string50));
				formDiv.children.item(i).add(new Option(string100, string100));
				formDiv.children.item(i).setAttribute('DB', 'yes');
				break;
			}
		}
	}
	object.remove();
}

function tripleBarrel(object){
	parentDivID = object.parentNode.parentNode.parentNode;
	formDiv = parentDivID.children.namedItem(parentDivID.id+'set'+set);
	for (var i = 0; i < formDiv.children.length; i++){
		if(formDiv.children[i].type == 'select-one'){
			if(formDiv.children[i].className != 'catch' && formDiv.children[i].className !='shotdone'){
				$('option', formDiv.children[i]).remove();
				formDiv.children.item(i).add(new Option("TB", "TB"));
				formDiv.children.item(i).add(new Option("0", "0"));
				formDiv.children.item(i).add(new Option(string10, string10));
				formDiv.children.item(i).add(new Option(string30, string30));
				formDiv.children.item(i).add(new Option(string50, string50));
				formDiv.children.item(i).add(new Option(string100, string100));
				formDiv.children.item(i).setAttribute('TB', 'yes');
				break;
			}
		}
	}
	object.remove();
}

function shock(object, number){
	test = object.parentNode.parentNode.parentNode;
	defArray = defenseCheck(test, number)
    if (defArray[0] == true){
    	object.remove();
    	return;
    } else {
    	numberVal = defArray[1];
    }
    percent = Math.min(numberVal/100, 1);
    if (test.id == "player1"){
    	test = document.getElementById('player2');
    } else {
    	test = document.getElementById('player1');
    }
	test1 = test.children.namedItem(test.id+'set'+set);
	for (var i = 0; i < test1.children.length; i++){
		if(test1.children.item(i).type == 'select-one'){
			if(test1.children.item(i).className != 'shotdone'){
				workingObj = test1.children.item(i);
				string10 = Math.floor(parseFloat(workingObj.item(2).value) * (1 - (percent))).toString();
				string30 = Math.floor(parseFloat(workingObj.item(3).value) * (1 - (percent))).toString();
				string50 = Math.floor(parseFloat(workingObj.item(4).value) * (1 - (percent))).toString();
				string100 = Math.floor(parseFloat(workingObj.item(5).value) * (1 - (percent))).toString();
				for(var ii = 1; ii < workingObj.options.length; ii++){
					workingObj.options[ii].remove()
					ii -= 1;
				}
				workingObj.add(new Option("0", "0"));
				workingObj.add(new Option(string10, string10));
				workingObj.add(new Option(string30, string30));
				workingObj.add(new Option(string50, string50));
				workingObj.add(new Option(string100, string100));
				break;
			}
		}	
	}
	object.remove();
}
