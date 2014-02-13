// Message Management //
function messageManagement(selectObj){
	if(selectObj.parentNode.parentNode.id == "player1"){
		if(selectObj.options[idx].value != string10 && selectObj.options[idx].value != string30 && selectObj.options[idx].value != string50 && selectObj.options[idx].value != string100){
			scoreTracker1[0] = 0, scoreTracker1[1] = 0, scoreTracker1[2] = 0,scoreTracker1[3] = 0;
		}	
		if(selectObj.options[idx].value === string10){
			scoreTrack1[set][0] += 1;
			scoreTracker1[0] = scoreTracker1[0] + 1;
			scoreTracker1[1] = 0, scoreTracker1[2] = 0,scoreTracker1[3] = 0;
		} else if(selectObj.options[idx].value === string30){
			scoreTrack1[set][1] += 1;
			scoreTracker1[1] = scoreTracker1[1] + 1;
			scoreTracker1[0] = 0, scoreTracker1[2] = 0, scoreTracker1[3] = 0;
		} else if(selectObj.options[idx].value === string50){
			scoreTrack1[set][2] += 1;
			scoreTracker1[2] = scoreTracker1[2] + 1;
			scoreTracker1[1] = 0, scoreTracker1[0] = 0, scoreTracker1[3] = 0;
		} else if(selectObj.options[idx].value === string100){
			scoreTrack1[set][3] += 1;
			scoreTracker1[3] = scoreTracker1[3] + 1;
			scoreTracker1[1] = 0, scoreTracker1[0] = 0, scoreTracker1[2] = 0;
		}
	}else{
		if(selectObj.options[idx].value != string10 && selectObj.options[idx].value != string30 && selectObj.options[idx].value != string50 && selectObj.options[idx].value != string100){
			scoreTracker2[0] = 0, scoreTracker2[1] = 0, scoreTracker2[2] = 0,scoreTracker2[3] = 0;
		}	
		if(selectObj.options[idx].value === string10){
			scoreTrack2[set][0] += 1;
			scoreTracker2[0] = scoreTracker2[0] + 1;
			scoreTracker2[1] = 0, scoreTracker2[2] = 0, scoreTracker2[3] = 0;
		} else if(selectObj.options[idx].value === string30){
			scoreTrack2[set][1] += 1;
			scoreTracker2[1] = scoreTracker2[1] + 1;
			scoreTracker2[0] = 0, scoreTracker2[2] = 0, scoreTracker2[3] = 0;
		} else if(selectObj.options[idx].value === string50){
			scoreTrack2[set][2] += 1;
			scoreTracker2[2] = scoreTracker2[2] + 1;
			scoreTracker2[1] = 0, scoreTracker2[0] = 0, scoreTracker2[3] = 0;
		} else if(selectObj.options[idx].value === string100){
			scoreTrack2[set][3] += 1;
			scoreTracker2[3] = scoreTracker2[3] + 1;
			scoreTracker2[1] = 0, scoreTracker2[0] = 0, scoreTracker2[2] = 0;
		}	
	}
}
function messagePopUps(selectObj){
	if(selectObj.parentNode.parentNode.id == "player1"){
		for(var i = 0; i < scoreTracker1.length; i++){
			if(i == 0){
				if(scoreTracker1[i] == 3){
					powerUpNumber("player1", 30);
					splash($('#player1Name')[0].value);
				}
				if(scoreTracker1[i] == 5){
					powerUpNumber("player1", 50);
					highTide($('#player1Name')[0].value);
				}
				if(scoreTracker1[i] == 7){
					powerUpNumber("player1", 100);
					typhoonStrike($('#player1Name')[0].value);
				}						
			}
			if(i == 1){
				if(scoreTracker1[i] == 3){
					powerUpNumber("player1", 20);
					if(Players[$('#player1Name')[0].value].gender == "male"){
						rojosHohos($('#player1Name')[0].value);
					}else{
						rojosBros($('#player1Name')[0].value);
					}	
				}
				if(scoreTracker1[i] == 5){
					powerUpNumber("player1", 30);
					onFire($('#player1Name')[0].value);
				}
				if(scoreTracker1[i] == 7){
					powerUpNumber("player1", 60);
					theRedDeath($('#player1Name')[0].value);
				}								
			}
			if(i == 2){
				if(scoreTracker1[i] == 3){
					tidalSurge($('#player1Name')[0].value);
				}
				if(scoreTracker1[i] == 5){
					powerUpNumber("player1", 30);
					angryWeather($('#player1Name')[0].value);
				}
				if(scoreTracker1[i] == 7){
					powerUpNumber("player1", 50);
					tornadoLightning($('#player1Name')[0].value);
				}								
			}	
			if(i == 3){
				if(scoreTracker1[i] == 3){
					pinkie($('#player1Name')[0].value);
				}
				if(scoreTracker1[i] == 5){
					if(Players[$('#player1Name')[0].value].gender == "male"){
						pinky($('#player1Name')[0].value);
					}else{
						pinky($('#player1Name')[0].value);
					}	
				}
				if(scoreTracker1[i] == 7){
					howAwesome($('#player1Name')[0].value);
				}								
			}									
		}
	}else{
		for(var i = 0; i < scoreTracker2.length; i++){
			if(i == 0){
				if(scoreTracker2[i] == 3){
					powerUpNumber("player2", 30);
					splash($('#player2Name')[0].value);
				}
				if(scoreTracker2[i] == 5){
					powerUpNumber("player2", 50);
					highTide($('#player2Name')[0].value);
				}
				if(scoreTracker2[i] == 7){
					powerUpNumber("player2", 100);
					typhoonStrike($('#player2Name')[0].value);
				}						
			}
			if(i == 1){
				if(scoreTracker2[i] == 3){
					powerUpNumber("player2", 20);
					if(Players[$('#player2Name')[0].value].gender == "male"){
						rojosHohos($('#player2Name')[0].value);
					}else{
						rojosBros($('#player2Name')[0].value);
					}	
				}
				if(scoreTracker2[i] == 5){
					powerUpNumber("player2", 30);
					onFire($('#player2Name')[0].value);
				}
				if(scoreTracker2[i] == 7){
					powerUpNumber("player2", 60);
					theRedDeath($('#player2Name')[0].value);
				}								
			}
			if(i == 2){
				if(scoreTracker2[i] == 3){
					tidalSurge($('#player2Name')[0].value);
				}
				if(scoreTracker2[i] == 5){
					powerUpNumber("player2", 30);
					angryWeather($('#player2Name')[0].value);
				}
				if(scoreTracker2[i] == 7){
					powerUpNumber("player2", 50);
					tornadoLightning($('#player2Name')[0].value);
				}								
			}	
			if(i == 3){
				if(scoreTracker2[i] == 3){
					pinkie($('#player2Name')[0].value);
				}
				if(scoreTracker2[i] == 5){
					if(Players[$('#player2Name')[0].value].gender == "male"){
						pinky($('#player2Name')[0].value);
					}else{
						pinky($('#player2Name')[0].value);
					}	
				}
				if(scoreTracker2[i] == 7){
					howAwesome($('#player2Name')[0].value);
				}								
			}										
		}
	}
}
function catchPointTracker(selectObj){
	if(selectObj.parentNode.parentNode.id == "player1"){
		if(selectObj.className == "catch"){
			p1CatchPoints[set+OTset] = parseFloat(p1CatchPoints[set+OTset]) + parseFloat(selectObj.value);
			if(selectObj.value != "0"){
				p1CatchNum = p1CatchNum + 1;
			}
		}
	}
	if(selectObj.parentNode.parentNode.id == "player2"){
		if(selectObj.className == "catch"){
			p2CatchPoints[set+OTset] = parseFloat(p2CatchPoints[set+OTset]) + parseFloat(selectObj.value);
			if(selectObj.value != "0"){
				p2CatchNum = p2CatchNum + 1;
			}
		}
	}
}
function catchPointManager(catch1, catch2){
	if(p1CatchPoints[set+OTset]/(catch1*100) >= 0.5 && p1CatchPoints[set+OTset]/(catch1*100) < 0.75){
		Hobo($('#player1Name')[0].value);
	}
	if(p1CatchPoints[set+OTset]/(catch1*100) >= 0.75 && p1CatchPoints[set+OTset]/(catch1*100) < 1.0){
		scavenger($('#player1Name')[0].value);
	}
	if(p1CatchPoints[set+OTset]/(catch1*100) >= 1.0 ){
		oppertunist($('#player1Name')[0].value);
	}
	if(p2CatchPoints[set+OTset]/(catch2*100) >= 0.5 && p2CatchPoints[set+OTset]/(catch2*100) < 0.75){
		Hobo($('#player2Name')[0].value);
	}
	if(p2CatchPoints[set+OTset]/(catch2*100) >= 0.75 && p2CatchPoints[set+OTset]/(catch2*100) < 1.0){
		scavenger($('#player2Name')[0].value);
	}
	if(p2CatchPoints[set+OTset]/(catch2*100) >= 1.0 ){
		oppertunist($('#player2Name')[0].value);
	}
	if(p1CatchNum/catch1 >= 0.5 && p1CatchNum/catch1 < 0.75){
		masterCatcherRankI($('#player1Name')[0].value);
	}
	if(p1CatchNum/catch1 >= 0.75 && p1CatchNum/catch1 < 1){
		masterCatcherRankII($('#player1Name')[0].value);
	}
	if(p1CatchNum/catch1 == 1){
		masterCatcherRankIII($('#player1Name')[0].value);
	}
	if(p2CatchNum/catch2 >= 0.5 && p2CatchNum/catch2 < 0.75){
		masterCatcherRankI($('#player2Name')[0].value);
	}
	if(p2CatchNum/catch2 >= 0.75 && p2CatchNum/catch2 < 1){
		masterCatcherRankII($('#player2Name')[0].value);
	}
	if(p2CatchNum/catch2 == 1){
		masterCatcherRankIII($('#player2Name')[0].value);
	}
}

