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
			blackHole(object);
			break;
	}
}

function shield(object, number){
	parentDivID = object.parentNode.parentNode.parentNode.id;
	if (parentDivID == "player1"){
		player1Def = number / 10;
	} else {
		player2Def = number / 10;
	}
	object.remove();
}
function blackHole(object){
	parentDivID = object.parentNode.parentNode.parentNode.id;
	if (parentDivID == 'player1'){
		if (player2Def > 0){
			player2Def -= 1;
		} else {
			player2Sink += 50;
		}
	} else {
		if (player1Def > 0){
			player1Def -= 1;
		} else {
			player1Sink += 50;
		}
	}
	object.remove();
}

function subtractor(object, number){
	test = object.parentNode.parentNode.parentNode;
	if (test.id == "player1") {
		if (player2Def > 0){
			player2Def -= 1;
			object.remove();
			return;
		}
		test = document.getElementById('player2');
	} else {
		if (player1Def > 0){
			player1Def -= 1;
			object.remove();
			return;
		}
		test = document.getElementById('player1');
	}
	test1 = test.children.namedItem(test.id+'set'+set);
	for (var i = 0; i < test1.children.length; i++){
		if(test1.children.item(i).type == 'select-one'){
			if(test1.children.item(i).className != 'shotdone'){
				workingObj = test1.children.item(i);
				string10 = Math.max((parseFloat(workingObj.item(2).value)) - number, 0).toString();
				string30 = Math.max((parseFloat(workingObj.item(3).value)) - number, 0).toString();
				string50 = Math.max((parseFloat(workingObj.item(4).value)) - number, 0).toString();
				string100 = Math.max((parseFloat(workingObj.item(5).value)) - number, 0).toString();
				$('option', workingObj).remove();
				workingObj.add(new Option("-", "-"));
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

function shock(object, percent){
	test = object.parentNode.parentNode.parentNode;
	if (test.id == "player1") {
		if (player2Def > 0){
			player2Def -= 1;
			object.remove();
			return;
		}
		test = document.getElementById('player2');
	} else {
		if (player1Def > 0){
			player1Def -= 1;
			object.remove();
			return;
		}
		test = document.getElementById('player1');
	}
	test1 = test.children.namedItem(test.id+'set'+set);
	for (var i = 0; i < test1.children.length; i++){
		if(test1.children.item(i).type == 'select-one' && test1.children.item(i).className == "catch"){
			if(test1.children.item(i).className != 'shotdone'){
				string10 = (parseFloat(workingObj.item(2).value) * (1 - (percent * 2))).toString();
				string30 = (parseFloat(workingObj.item(3).value) * (1 - (percent * 2))).toString();
				string50 = (parseFloat(workingObj.item(4).value) * (1 - (percent * 2))).toString();
				string100 = (parseFloat(workingObj.item(5).value)* (1 - (percent * 2))).toString();
				$('option', test1.children.item(i)).remove();
				test1.children.item(i).add(new Option("-", "-"));
				test1.children.item(i).add(new Option("0", "0"));
				test1.children.item(i).add(new Option(string10, string10));
				test1.children.item(i).add(new Option(string30, string30));
				test1.children.item(i).add(new Option(string50, string50));
				test1.children.item(i).add(new Option(string100, string100));
				break;
			}
		}	
	}
	object.remove();
}
