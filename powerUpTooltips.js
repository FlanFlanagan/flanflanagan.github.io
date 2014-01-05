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
			string2 = blackHoleTT();
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
	string = "Your opponent\'s next shot is worth "+number+" less points.";
	return string;
}

function shockTT(number){
	string = "Your opponent\'s next shot is worth "+number*2+"% less points.";
	return string;
}

function blackHoleTT(){
	string = "Your opponent must score at least 50 points before their shots count toward their score.";
	return string;
}
