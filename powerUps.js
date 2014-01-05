function readPowerUp(string, object, number){
	switch (string){
		case ("shock"):
			shock(object, catchChainMultipliers[catchChainTotal]);
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
			subtractor(object, catchChainMultipliers[catchChainTotal], number);
			break;
		case ("blackHole"):
			blackHole(object);
			break;
	}
}

function blackHole(object){
	parentDivID = object.parentNode.parentNode.parentNode.id;
	if (parentDivID == 'player1'){
		player2Sink += 50;
	} else {
		player1Sink += 50;
	}
	object.remove();
}

function subtractor(object, multiplier, number){
	test = object.parentNode.parentNode.parentNode;
	if (test.id == "player1") {
		test = document.getElementById('player2');
	} else {
		test = document.getElementById('player1');
	}
	test1 = test.children.namedItem(test.id+'set'+set);
	for (var i = 0; i < test1.children.length; i++){
		if(test1.children.item(i).type == 'select-one' && test1.children.item(i).className == "catch"){
			if(test1.children.item(i).className != 'shotdone'){
				$('option', test1.children.item(i)).remove();
				string10 = Math.max((10 * multiplier) - number, 0).toString();
				string30 = Math.max((30 * multiplier) - number, 0).toString();
				string50 = Math.max((50 * multiplier) - number, 0).toString();
				string100 = Math.max((100 * multiplier) - number, 0).toString();
				test1.children.item(i).add(new Option("-", "-"));
				test1.children.item(i).add(new Option("0", "0"));
				test1.children.item(i).add(new Option(string10, string10));
				test1.children.item(i).add(new Option(string30, string30));
				test1.children.item(i).add(new Option(string50, string50));
				test1.children.item(i).add(new Option(string100, string100));
				return;
			}
		}	
	}
	for (var i = 0; i < test1.children.length; i++){
		if(test1.children.item(i).type == 'select-one'){
			if(test1.children.item(i).className != 'shotdone'){
				$('option', test1.children.item(i)).remove();
				string10 = Math.max((10) - number, 0).toString();
				string30 = Math.max((30) - number, 0).toString();
				string50 = Math.max((50) - number, 0).toString();
				string100 = Math.max((100) - number, 0).toString();
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
			if(formDiv.children[i].className != 'catch' && formDiv.children[i].className !='shotdone'){
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

function shock(object, multiplier){
	catchTest = true;
	test = object.parentNode.parentNode.parentNode;
	if (test.id == "player1") {
		test = document.getElementById('player2');
	} else {
		test = document.getElementById('player1');
	}
	test1 = test.children.namedItem(test.id+'set'+set);
	shockMod(test1, multiplier, 0.5);
	object.remove();
}

function shockMod(test1, multiplier, percent){
	for (var i = 0; i < test1.children.length; i++){
		if(test1.children.item(i).type == 'select-one' && test1.children.item(i).className == "catch"){
			if(test1.children.item(i).className != 'shotdone'){
				$('option', test1.children.item(i)).remove();
				string10 = (10 * percent * multiplier).toString();
				string30 = (30 * percent * multiplier).toString();
				string50 = (50 * percent * multiplier).toString();
				string100 = (100 * percent * multiplier).toString();
				test1.children.item(i).add(new Option("-", "-"));
				test1.children.item(i).add(new Option("0", "0"));
				test1.children.item(i).add(new Option(string10, string10));
				test1.children.item(i).add(new Option(string30, string30));
				test1.children.item(i).add(new Option(string50, string50));
				test1.children.item(i).add(new Option(string100, string100));
				return;
			}
		}	
	}
	for (var i = 0; i < test1.children.length; i++){
		if(test1.children.item(i).type == 'select-one'){
			if(test1.children.item(i).className != 'shotdone'){
				$('option', test1.children.item(i)).remove();
				string10 = (10 * percent).toString();
				string30 = (30 * percent).toString();
				string50 = (50 * percent).toString();
				string100 = (100 * percent).toString();
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
}
