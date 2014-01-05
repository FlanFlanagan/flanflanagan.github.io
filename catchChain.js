// Catch Chain Tracking //

function catchChainRule(selectObj){
	if(selectObj.innerHTML == "Turn Catch Chain On"){
		catchChainMultipliers = {0: 1, 1: 1, 2: 1.5, 3: 2, 4: 3, 5: 4, 6: 5, 7: 10, 8: 25, 9: 50, 10: 100, 11: 1000}
		selectObj.innerHTML = "Turn Catch Chain Off"
	}
	else{
		catchChainMultipliers = {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1}
		selectObj.innerHTML = "Turn Catch Chain On"
	}
	
}
var catchChainMultipliers = {0: 1, 1: 1, 2: 1.5, 3: 2, 4: 3, 5: 4, 6: 5, 7: 10, 8: 25, 9: 50, 10: 100, 11: 1000}
/*var catchChainMultipliers = {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1}*/

function catchChainTracker(selectObj){
	if(catchChainTotal == 0){
		catchChainName = selectObj.parentNode.parentNode.id;
	}
	if(selectObj.parentNode.parentNode.id == catchChainName){
		catchChainTotal += 1;	
	}
}

function catchChainSelect(selectObj, multiplier){
	$(selectObj).before('<select class = "catch" onChange = "colorChange1(this)" onFocus="this.oldValue = this.value" ></select>');
	string10 = (10 * multiplier).toString();
	string30 = (30 * multiplier).toString();
	string50 = (50 * multiplier).toString();
	string100 = (100 * multiplier).toString();
	selectObj.previousSibling.add(new Option("-", "-"));
	selectObj.previousSibling.add(new Option("0", "0"));
	selectObj.previousSibling.add(new Option(string10, string10));
	selectObj.previousSibling.add(new Option(string30, string30));
	selectObj.previousSibling.add(new Option(string50, string50));
	selectObj.previousSibling.add(new Option(string100, string100));
	selectObj.previousSibling.add(new Option("Del", "delete"));
}

function dbChainSelect(selectObj, value){
	$(selectObj).before('<select class = "shotdone"></select>');
	selectObj.previousSibling.add(new Option(value, value));
	
	name = selectObj.parentNode.parentNode.id;
	if (name == 'player1'){
		$(totalSpan1).text(parseFloat($(totalSpan1).text()) + parseFloat(value));
	}
	if (name == 'player2'){
		$(totalSpan2).text(parseFloat($(totalSpan2).text()) + parseFloat(value));
	}
}

function tbChainSelect(selectObj, value){
	console.log(value);
	$(selectObj).before('<select class = "shotdone"></select>');
	selectObj.previousSibling.add(new Option(value, value));
	$(selectObj).before('<select class = "shotdone"></select>');
	selectObj.previousSibling.add(new Option(value, value));
	
	name = selectObj.parentNode.parentNode.id;
	if (name == 'player1'){
		$(totalSpan1).text(parseFloat($(totalSpan1).text()) + parseFloat(value)*2);
	}
	if (name == 'player2'){
		$(totalSpan2).text(parseFloat($(totalSpan2).text()) + parseFloat(value)*2);
	}
}