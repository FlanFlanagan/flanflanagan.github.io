function powerUpTooltip(string, number){
	switch (string){
		case ("doubleBarrel"):
			string2 = doubleBarrelTT();
			break;
		case ("tripleBarrel"):
			string2 = tripleBarrelTT();
			break;
		case ("glove"):
			string2 = gloveTT();
			break;
		case ("subtractor"):
			string2 = subtractorTT(number);
			break;
		case ("shock"):
			string2 = shockTT(number);
			break;
		case ("blackHole"):
			string2 = blackHoleTT(number);
			break;
		case ("shield"):	
			string2 = shieldTT(number);
			break;
	}
	return string2;
}

function doubleBarrelTT(){
	string = "Your next non-catch shot hits two times and starts a catch chain.";
	return string;
}

function tripleBarrelTT(){
	string = "Your next non-catch shot hits three times and starts a catch chain.";
	return string;
}

function gloveTT(){
	string = "Gives the user an automatic catch.";
	return string;
}

function subtractorTT(number){
	string = "Your opponent\'s next shot is worth "+Math.floor(number)+" less points.";
	return string;
}

function shockTT(number){
	string = "Your opponent\'s next shot is worth "+Math.floor(number)+"% less points.";
	return string;
}

function blackHoleTT(number){
	string = "Your opponent must score at least "+Math.floor(number)+" points before their shots count toward their score.";
	return string;
}

function shieldTT(number){
	string = "You may block "+Math.floor(number/10)+" attacks from your opponent.";
	return string;
}