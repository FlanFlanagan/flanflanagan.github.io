function newSet(){
	window.displayNumber = 0;
	p1CatchPoints.push(0);
	p1CatchNum = 0;
	p2CatchPoints.push(0);
	p2CatchNum = 0;
	set = set + 1;
	scoreTrack1.push([0,0,0,0]);
	scoreTrack2.push([0,0,0,0]);	
	for (var i = 0; i < 4; i++){
		scoreTracker1[i] = 0;
		scoreTracker2[i] = 0;
	}
	p1Diff = 0; p2Diff = 0; player1Sink = 0; player2Sink = 0; player1Def = 0; player2Def = 0;
	
	document.getElementById('player1').style.borderColor = "#000000";
	document.getElementById('player1').style.boxShadow = "inset 0px 0px 10px #000000";
	document.getElementById('player2').style.borderColor = "#000000";
	document.getElementById('player2').style.boxShadow = "inset 0px 0px 10px #000000";
	
	$('#player1').append('<hr size="2" width="100%" color="black"> Set '+set+' <button class = "minButton'+set+'" status="show" onclick="divMin(this, '+set+')"> - </button>' +
					'<hr size="1" width="100%" color="black"> <form id = "player1set'+set+'">'+ 
					'Round 1 &nbsp;&nbsp;&nbsp;&nbsp; <select id = "set'+set+'round1player1" onFocus="this.oldValue = this.value" class ="roundInputp1" onChange = "colorChange1(this)"></select>' +
					'<button id="catch1s1r1" class = "catchbutton'+set+'" onClick = "newCatch()" > Catch! </button><br>' +
					'Round 2 &nbsp;&nbsp;&nbsp;&nbsp; <select id = "set'+set+'round2player1" onFocus="this.oldValue = this.value" class ="roundInputp1" onChange = "colorChange1(this)"></select>' +
					'<button id="catch1s1r1" class = "catchbutton'+set+'" onClick = "newCatch()" > Catch! </button><br>'+
					'Round 3 &nbsp;&nbsp;&nbsp;&nbsp; <select id = "set'+set+'round3player1" onFocus="this.oldValue = this.value" class ="roundInputp1" onChange = "colorChange1(this)"></select>'+
					'<button id="catch1s1r1" class = "catchbutton'+set+'" onClick = "newCatch()" > Catch! </button><br>'+
					'Round 4 &nbsp;&nbsp;&nbsp;&nbsp; <select id = "set'+set+'round4player1" onFocus="this.oldValue = this.value" class ="roundInputp1" onChange = "colorChange1(this)"></select>'+
					'<button id="catch1s1r1" class = "catchbutton'+set+'" onClick = "newCatch()" > Catch! </button><br>'+
					'Round 5 &nbsp;&nbsp;&nbsp;&nbsp; <select id = "set'+set+'round5player1" onFocus="this.oldValue = this.value" class ="roundInputp1" onChange = "colorChange1(this)"></select>'+
					'<button id="catch1s1r1" class = "catchbutton'+set+'" onClick = "newCatch()" > Catch! </button><br>'+
					'Round 6 &nbsp;&nbsp;&nbsp;&nbsp; <select id = "set'+set+'round6player1" onFocus="this.oldValue = this.value" class ="roundInputp1" onChange = "colorChange1(this)"></select>'+
					'<button id="catch1s1r1" class = "catchbutton'+set+'" onClick = "newCatch()" > Catch! </button><br>'+
					'Round 7 &nbsp;&nbsp;&nbsp;&nbsp; <select id = "set'+set+'round7player1" onFocus="this.oldValue = this.value" class ="roundInputp1" onChange = "colorChange1(this)"></select>'+
					'<button id="catch1s1r1" class = "catchbutton'+set+'" onClick = "newCatch()" > Catch! </button><br>');
	$('#player2').append('<hr size="2" width="100%" color="black"> Set '+set+' <button class = "minButton'+set+'" status="show" onclick="divMin(this, '+set+')"> - </button>' +
					'<hr size="1" width="100%" color="black"> <form id = "player2set'+set+'">' + 
					'Round 1 &nbsp;&nbsp;&nbsp;&nbsp;<select id = "set'+set+'round1player2" onFocus="this.oldValue = this.value" class ="roundInputp1" onChange = "colorChange1(this)"></select>' +
					'<button id="catch1s1r1" class = "catchbutton'+set+'" onClick = "newCatch()" > Catch! </button><br>' +
					'Round 2 &nbsp;&nbsp;&nbsp;&nbsp;<select id = "set'+set+'round2player2" onFocus="this.oldValue = this.value" class ="roundInputp1" onChange = "colorChange1(this)"></select>' +
					'<button id="catch1s1r1" class = "catchbutton'+set+'" onClick = "newCatch()" > Catch! </button><br>'+
					'Round 3 &nbsp;&nbsp;&nbsp;&nbsp;<select id = "set'+set+'round3player2" onFocus="this.oldValue = this.value" class ="roundInputp1" onChange = "colorChange1(this)"></select>'+
					'<button id="catch1s1r1" class = "catchbutton'+set+'" onClick = "newCatch()" > Catch! </button><br>'+
					'Round 4 &nbsp;&nbsp;&nbsp;&nbsp;<select id = "set'+set+'round4player2" onFocus="this.oldValue = this.value" class ="roundInputp1" onChange = "colorChange1(this)"></select>'+
					'<button id="catch1s1r1" class = "catchbutton'+set+'" onClick = "newCatch()" > Catch! </button><br>'+
					'Round 5 &nbsp;&nbsp;&nbsp;&nbsp;<select id = "set'+set+'round5player2" onFocus="this.oldValue = this.value" class ="roundInputp1" onChange = "colorChange1(this)"></select>'+
					'<button id="catch1s1r1" class = "catchbutton'+set+'" onClick = "newCatch()" > Catch! </button><br>'+
					'Round 6 &nbsp;&nbsp;&nbsp;&nbsp;<select id = "set'+set+'round6player2" onFocus="this.oldValue = this.value" class ="roundInputp1" onChange = "colorChange1(this)"></select>'+
					'<button id="catch1s1r1" class = "catchbutton'+set+'" onClick = "newCatch()" > Catch! </button><br>'+
					'Round 7 &nbsp;&nbsp;&nbsp;&nbsp;<select id = "set'+set+'round7player2" onFocus="this.oldValue = this.value" class ="roundInputp1" onChange = "colorChange1(this)"></select>'+
					'<button id="catch1s1r1" class = "catchbutton'+set+'" onClick = "newCatch()" > Catch! </button><br>');
	$('#player1').append('<div id = "player1Total"><span class="total_1'+set+'"> 0 </span></div>');
	$('#player2').append('<div id = "player2Total"><span class="total_2'+set+'"> 0 </span></div>');
	document.getElementById('player1').style.display = 'none';
	document.getElementById('player1').style.display = 'block';
	document.getElementById('player2').style.display = 'none';
	document.getElementById('player2').style.display = 'block';
	var playerset = '#player1set' + parseFloat(set);
	var playerset2 = '#player2set' + parseFloat(set);
	for(var i = 0; i < $(playerset)[0].length; i++){
		if($('#player1set'+set)[0][i].type === "select-one"){
			$('<option value = "-" id = "dash1"> - </option>').appendTo($(playerset)[0][i]);
			$('<option value = "0" id = "zero"> 0 </option>').appendTo($(playerset)[0][i]);
			$('<option value = "10" id = "ten"> 10 </option>').appendTo($(playerset)[0][i]);
			$('<option value = "30" id = "thirty"> 30 </option>').appendTo($(playerset)[0][i]);
			$('<option value = "50" id = "fifty"> 50 </option>').appendTo($(playerset)[0][i]);
			$('<option value = "100" id = "hundred"> 100 </option>').appendTo($(playerset)[0][i]);
			$('<option value = "-" id = "dash1"> - </option>').appendTo($(playerset2)[0][i]);
			$('<option value = "0" id = "zero"> 0 </option>').appendTo($(playerset2)[0][i]);
			$('<option value = "10" id = "ten"> 10 </option>').appendTo($(playerset2)[0][i]);
			$('<option value = "30" id = "thirty"> 30 </option>').appendTo($(playerset2)[0][i]);
			$('<option value = "50" id = "fifty"> 50 </option>').appendTo($(playerset2)[0][i]);
			$('<option value = "100" id = "hundred"> 100 </option>').appendTo($(playerset2)[0][i]);
		} 
	}
	$("form").submit(function(){
		return false;
	})
	$("select").submit(function() {
		$(this).addClass('shotcomplete');
	});
	var catchset = '.catchbutton' + parseFloat(set);
	$(catchset).click(function(){
		catchChainTracker(this);
		catchChainSelect(this, catchChainMultipliers[catchChainTotal])
	});
	$(catchset).attr('style', 'color:yellow')
	OTround = 0;
	total1Parse = '#player1set' + parseFloat(set);
	total2Parse = '#player2set' + parseFloat(set);
	totalSpan1 = '.total_1' + parseFloat(set);
	totalSpan2 = '.total_2' + parseFloat(set);
}

function colorChange1(selectObj){
	facyBoxMessage.splice(0, facyBoxMessage.length)
	// Color change //
	idx = selectObj.selectedIndex;
	//Catch chain reset
	if(selectObj.options[idx].value == "Del"){
		if(catchChainName === selectObj.parentNode.parentNode.id){
			if(catchChainTotal > 0){
				catchChainTotal -= 1;
				catchChainTotal = Math.max(catchChainTotal, 0);
			}
		}
		totalDelUpdate(selectObj);
		selectObj.remove();
		return;
	}
	if(selectObj.className != "catch"){
		catchChainTotal = 0;
		string10 = selectObj.options[2].value.toString();
		string30 = selectObj.options[3].value.toString();
		string50 = selectObj.options[4].value.toString();
		string100 = selectObj.options[5].value.toString();
		if(selectObj.parentNode.children[0] != selectObj){
			selectObj.previousSibling.previousSibling.previousSibling.setAttribute('round', "over");
			selectObj.previousSibling.previousSibling.previousSibling.setAttribute('style', 'color:grey');
			divID = selectObj.parentNode.parentNode.id;
			if (divID == 'player1'){
				formID = document.getElementById('player2').children.namedItem('player2set'+set)
				for (var i = 0; i < formID.children.length; i++){
					if (formID.children.item(i).type == 'select-one'){
						if(formID.children.item(i).id.substr(4,10) == selectObj.id.substr(4,10)){
							formID.children.item(i).previousSibling.previousSibling.previousSibling.setAttribute('round', "over");
							formID.children.item(i).previousSibling.previousSibling.previousSibling.setAttribute('style', 'color:grey');
						}
					}				
				}
			} else {
				formID = document.getElementById('player1').children.namedItem('player1set'+set)
				for (var i = 0; i < formID.children.length; i++){
					if (formID.children.item(i).type == 'select-one'){
						if(formID.children.item(i).id.substr(4,10) == selectObj.id.substr(4,10)){
							formID.children.item(i).previousSibling.previousSibling.previousSibling.setAttribute('round', "over");
							formID.children.item(i).previousSibling.previousSibling.previousSibling.setAttribute('style', 'color:grey');
						}
					}				
				}
			}
		}
	}
	// Catch tracking //
	catchPointTracker(selectObj);	
	//
	if(selectObj.options[idx].value == string100){
		messages100();
		// Intimidation //
		if($(total1Parse)[0][0] == selectObj){
			tacticalStrike($('#player1Name')[0].value);
		}
		if($(total2Parse)[0][0] == selectObj){
			tacticalStrike($('#player2Name')[0].value);
		}
	}
	// totals //
	selectObj.className = "shotdone";
	totalTally(selectObj);
	powerUpTest(selectObj);
	comeBackTest();

	// final test //
	var testTotal = true
	for(j = 0; j < $('#player1 form')[set+OTset].length; j++){
		if(!$('#player1 form')[set+OTset][j].onclick){
			if($('#player1 form')[set+OTset][j].className != "shotdone"){
				if($('#player1 form')[set+OTset][j].className != "shotdone"){
					testTotal = false;
				}
			}
		}
	}
	for(j = 0; j < $('#player2 form')[set+OTset].length; j++){
		if(!$('#player2 form')[set+OTset][j].onclick){
			if($('#player2 form')[set+OTset][j] != selectObj){
				if($('#player2 form')[set+OTset][j].className != "shotdone"){
					testTotal = false;
				}
			}
		}
	}
	// Pop-ups //
	messageManagement(selectObj);
	// pushing the messages
	messagePopUps(selectObj);
	if(selectObj.getAttribute('db') == 'yes'){
		catchChainTracker(selectObj.nextSibling)
		dbChainSelect(selectObj.nextSibling, selectObj.value);
	}
	if(selectObj.getAttribute('tb') == 'yes'){
		catchChainTracker(selectObj.nextSibling)
		tbChainSelect(selectObj.nextSibling, selectObj.value);
	}
	if(testTotal == true){
		messages();
		if($('#player1 form')[set+OTset].id != "otset"+OTset+"p1"){
			if(set >= 1){
				newStatTable();		
			}
		}
		window.displayNumber = 2;
	}
	selectObj.oldValue = selectObj.value;
	// Running the box // 
	runFacyBox();					
}

function calcStats(){
	var rangeArray = ['.accuracy1', '.accuracy2', '.10accuracy1', '.10accuracy2', '.30accuracy1', '.30accuracy2', '.50accuracy1', '.50accuracy2', '.bullseye1', '.bullseye2', '.catch1', '.catch2', '.deadliness1'];
	rangeArray.push('.deadliness2');
	var acc_1 = 0, acc_2 = 0, acc10_1 = 0, acc10_2 = 0, acc30_1 = 0, acc30_2 = 0, acc50_1 = 0, acc50_2 = 0, bulleys1 = 0, bulleys2 = 0, total_1 = 0, total_2 = 0, catch1 = 0, catch2 = 0;
	for(i = 1; i < set+1+OTset; i++){
		for(j = 0; j < $('#player1 form')[i].length; j++){
			if(!$('#player1 form')[i][j].onclick){
				total_1 = total_1 + 1;
			}
		}
	}
	for(i = 1; i < set+1+OTset; i++){
		for(j = 0; j < $('#player2 form')[i].length; j++){
			if(!$('#player2 form')[i][j].onclick){
				total_2 = total_2 + 1;
			}
		}
	}
	for(i = 1; i <=set; i++){
		acc10_1 += scoreTrack1[i][0];
		acc10_2 += scoreTrack2[i][0];
		acc30_1 += scoreTrack1[i][1];
		acc30_2 += scoreTrack2[i][1];
		acc50_1 += scoreTrack1[i][2];
		acc50_2 += scoreTrack2[i][2];
		bulleys1 += scoreTrack1[i][3];
		bulleys2 += scoreTrack2[i][3];
		for(j = 0; j < 4; j++){
			acc_1 += scoreTrack1[i][j];
			acc_2 += scoreTrack2[i][j];
		}

	}
	for(i = 0; i < rangeArray.length; i++){
		$(rangeArray[i]).empty();
	}
	catch1 = total_1 - (OTRoundCount + 7*set)
	catch2 = total_2 - (OTRoundCount + 7*set)
	
	$('.accuracy1').append((acc_1/total_1*100).toFixed(2));
	$('.accuracy2').append((acc_2/total_2*100).toFixed(2));
	$('.10accuracy1').append((acc10_1/total_1*100).toFixed(2));
	$('.10accuracy2').append((acc10_2/total_2*100).toFixed(2));
	$('.30accuracy1').append((acc30_1/total_1*100).toFixed(2));
	$('.30accuracy2').append((acc30_2/total_2*100).toFixed(2));
	$('.50accuracy1').append((acc50_1/total_1*100).toFixed(2));
	$('.50accuracy2').append((acc50_2/total_2*100).toFixed(2));
	$('.bullseye1').append((bulleys1/total_1*100).toFixed(2));
	$('.bullseye2').append((bulleys2/total_2*100).toFixed(2));
	$('.catch1').append((catch1/total_2*100).toFixed(2));
	$('.catch2').append((catch2/total_1*100).toFixed(2));
	$('.deadliness1').append(((acc10_1*10+acc30_1*30+acc50_1*50+bulleys1*100)/(total_1)).toFixed(2));
	$('.deadliness2').append(((acc10_2*10+acc30_2*30+acc50_2*50+bulleys2*100)/(total_2)).toFixed(2));
	
	var deadly1 = ((acc10_1*10+acc30_1*30+acc50_1*50+bulleys1*100)/(total_1)).toFixed(2)
	var deadly2 = ((acc10_2*10+acc30_2*30+acc50_2*50+bulleys2*100)/(total_2)).toFixed(2)
	// Accuracy //
	if((acc_1/total_1*100).toFixed(2) >= 80 && (acc_1/total_1*100).toFixed(2) < 90){
		annieOakley($('#player1Name')[0].value);
	}
	if((acc_2/total_2*100).toFixed(2) >= 80 && (acc_2/total_2*100).toFixed(2) < 90){
		annieOakley($('#player2Name')[0].value);
	}
	if((acc_1/total_1*100).toFixed(2) >= 90 && (acc_1/total_1*100).toFixed(2) < 100){
		williamTell($('#player1Name')[0].value);
	}
	if((acc_2/total_2*100).toFixed(2) >= 90 && (acc_2/total_2*100).toFixed(2) < 100){
		williamTell($('#player2Name')[0].value);
	}
	if((acc_1/total_1*100).toFixed(2) == 100){
		robinHood($('#player1Name')[0].value);
	}
	if((acc_2/total_2*100).toFixed(2) == 100){
		robinHood($('#player2Name')[0].value);
	}
	// Deadliness
	if(deadly1 >= 40 && deadly1 < 50){
		genghis($('#player1Name')[0].value);
	}
	if(deadly2 >= 40 && deadly2 < 50){
		genghis($('#player2Name')[0].value);
	}
	if(deadly1 >= 50 && deadly1 < 60){
		attila($('#player1Name')[0].value);
	}
	if(deadly2 >= 50 && deadly2 < 60){
		attila($('#player2Name')[0].value);
	}
	if(deadly1 >= 90 && deadly1 < 100){
		alexGreat($('#player1Name')[0].value);
	}
	if(deadly2 >= 90 && deadly2 < 100){
		alexGreat($('#player2Name')[0].value);
	}
	if(deadly1 == 100){
		deathDestroy($('#player1Name')[0].value);
	}
	if(deadly2 == 100){
		deathDestroy($('#player2Name')[0].value);
	}
	runFacyBox();
}

function submitPlayer1(){
	$('.player1').empty();
	$('.player1').append($('#player1Name')[0].value)
	$('.highScore1').empty();
	$('.highScore1').append(Players[$('#player1Name')[0].value].highScore);		
	$('#player1').css("background-color", Players[$('#player1Name')[0].value]['color'])	
}

function submitPlayer2(){
	$('.player2').empty();
	$('.player2').append($('#player2Name')[0].value)
	$('.highScore2').empty();
	$('.highScore2').append(Players[$('#player2Name')[0].value].highScore);		
	$('#player2').css("background-color", Players[$('#player2Name')[0].value]['color'])	
}

function addOverTime(){
	p1CatchPoints.push(0)
	window.displayNumber = 0;
	OTset = OTset + 1;
	$('#player1').append('<hr size="1" width="100%" color="black"> O.T. <hr size="1" width="100%" color="black">' +
		'<form id="otset'+OTset+'p1"> Set &nbsp;&nbsp;&nbsp;&nbsp;<select id = "set'+OTset+'round1player1" class ="roundInputp1" onChange = "colorChange1(this)"></select>' +
		'<button id="catch1s1r1" class = "OTbutton'+OTround+'" onClick = "newCatch()" > Catch! </button><br>' +
		'<button class="addOTRound'+OTset+'" onclick = "addOT()" > Add OT Round </button> ');
	$('#player2').append('<hr size="1" width="100%" color="black"> O.T. <hr size="1" width="100%" color="black">' +
		'<form id ="otset'+OTset+'p2"> Set &nbsp;&nbsp;&nbsp;&nbsp;<select id = "set'+OTset+'round1player1" class ="roundInputp1" onChange = "colorChange1(this)"></select>' +
		'<button id="catch1s1r1" class = "OTbutton'+OTround+'" onClick = "newCatch()" > Catch! </button><br>' +
		'<button class="addOTRound'+OTset+'" onclick = "addOT()" > Add OT Round </button> ');
	$('#player1').append('<div id = "player1Total"><span class="total_1ot'+OTset+'"> 0 </span></div>');
	$('#player2').append('<div id = "player2Total"><span class="total_2ot'+OTset+'"> 0 </span></div>');
	$("form").submit(function() {return false;});
	var playerset = "#otset" + parseFloat(OTset) + "p1 select"
	var playerset2 = "#otset" + parseFloat(OTset) + "p2 select"
	$('<option value = "-" id = "dash1"> - </option>').appendTo($(playerset));
	$('<option value = "0" id = "zero"> 0 </option>').appendTo($(playerset));
	$('<option value = "10" id = "ten"> 10 </option>').appendTo($(playerset));
	$('<option value = "30" id = "thirty"> 30 </option>').appendTo($(playerset));
	$('<option value = "50" id = "fifty"> 50 </option>').appendTo($(playerset));
	$('<option value = "100" id = "hundred"> 100 </option>').appendTo($(playerset));
	$('<option value = "-" id = "dash1"> - </option>').appendTo($(playerset2));
	$('<option value = "0" id = "zero"> 0 </option>').appendTo($(playerset2));
	$('<option value = "10" id = "ten"> 10 </option>').appendTo($(playerset2));
	$('<option value = "30" id = "thirty"> 30 </option>').appendTo($(playerset2));
	$('<option value = "50" id = "fifty"> 50 </option>').appendTo($(playerset2));
	$('<option value = "100" id = "hundred"> 100 </option>').appendTo($(playerset2));
	
	var catchOTround = '.OTbutton' + parseFloat(OTround);
	$(catchOTround).click(function(){
  		$(this).before('<select class = "catch" onChange = "colorChange1(this)"></select>');
  		this.previousSibling.add(Option("-", "-"));
  		this.previousSibling.add(Option("0", "0"));
  		this.previousSibling.add(Option(string10, string10));
  		this.previousSibling.add(Option(string30, string30));
  		this.previousSibling.add(Option(string50, string50));
  		this.previousSibling.add(Option(string100, string100));
  		this.previousSibling.add(Option("delete", "delete"));
	});
	$('.totalbutton').click(function(){
	  	var test = 0;
		for(var i = 0; i < $(this).prev('form')[0].length; i++){    
		    if(!$(this).prev('form')[0][i].onclick){
		        if(parseFloat($(this).prev('form')[0][i].value)){
		            test = test + parseFloat($(this).prev('form')[0][i].value);
		        }
		    }
		}
		$(this).next('span').empty();
		$(this).next('span').append(test);
	});
	total1Parse = '#otset' + parseFloat(OTset) + 'p1';
	total2Parse = '#otset' + parseFloat(OTset) + 'p2';
	totalSpan1 = '.total_1ot' + parseFloat(OTset);
	totalSpan2 = '.total_2ot' + parseFloat(OTset);
}

function addOT(){
	window.displayNumber = 0;
	OTround = OTround + 1;
	OTRoundCount = OTRoundCount + 1;
	var roundset = '.addOTRound' + parseFloat(OTset);
	$(roundset).before('Set &nbsp;&nbsp;&nbsp;&nbsp;<select class = "otset'+OTround+'round1player1" onChange = "colorChange1(this)"></select>' +
		'<button id="catch1s1r1" class = "OTbutton'+OTround+'" onClick = "newCatch()" > Catch! </button><br>');
	$("form").submit(function() {return false;});
	var playerset = ".otset" + parseFloat(OTround) + "round1player1";
	$('<option value = "-" id = "dash1"> - </option>').appendTo($(playerset));
	$('<option value = "0" id = "zero"> 0 </option>').appendTo($(playerset));
	$('<option value = "10" id = "ten"> 10 </option>').appendTo($(playerset));
	$('<option value = "30" id = "thirty"> 30 </option>').appendTo($(playerset));
	$('<option value = "50" id = "fifty"> 50 </option>').appendTo($(playerset));
	$('<option value = "100" id = "hundred"> 100 </option>').appendTo($(playerset));
	$('<option value = "delete" id = "delete"> Delete </option>').appendTo($(playerset));
	var catchOTround = '.OTbutton' + parseFloat(OTround);
	$(catchOTround).click(function(){
  		$(this).before('<select class = "catch" onChange = "colorChange1(this)"></select>');
  		this.previousSibling.add(Option("-", "-"));
  		this.previousSibling.add(Option("0", "0"));
  		this.previousSibling.add(Option(string10, string10));
  		this.previousSibling.add(Option(string30, string30));
  		this.previousSibling.add(Option(string50, string50));
  		this.previousSibling.add(Option(string100, string100));
  		this.previousSibling.add(Option("delete", "delete"));
	});
}

function newCatch(){	
}

function gameWinnerTest(){
	if(endGameNumber == 0){
		var popupHTML = '<div align="center" style="background-color: #00B366; width: 600px; font-size: 100px;; text-color: #AAAAAA;';
		popupHTML = popupHTML + 'border-radius: 3px; border: 3px solid #AAAAAA; font-family: Rockwell;">';
		if(player1Wins > player2Wins){
	    	popupHTML = popupHTML + $('#player1Name')[0].value +' takes the game!!';
		}else if(player2Wins > player1Wins){
			popupHTML = popupHTML + $('#player2Name')[0].value +' takes the game!!';
		} else {
			popupHTML += 'It\'s a tie?';
		}
		popupHTML = popupHTML + '</div>';
		$.facybox(popupHTML);
		setTimeout("removeFacyBox()", 4000);		
	}
	endGameNumber = 1;
}

function defenseCheck(object, number){
	var defCheck = true;
	if (object.id == "player1") {
		if (player2Def <= number){
			numberVal = number - player2Def;
			player2Def = 0;
			document.getElementById('player2').style.borderColor = "#000000";
			document.getElementById('player2').style.boxShadow = "inset 0px 0px 10px #000000";
			defCheck = false;
		} else {
			player2Def -= number;
			document.getElementById('player2').style.boxShadow = "inset 0px 0px "+player2Def*2+"px #ccffe6";
		}
	} else {
		if (player1Def <= number){
			numberVal = number - player1Def;
			player1Def = 0;
			document.getElementById('player1').style.borderColor = "#000000";
			document.getElementById('player1').style.boxShadow = "inset 0px 0px 10px #000000";
			defCheck = false;
		} else {
			player1Def -= number;
			document.getElementById('player1').style.boxShadow = "inset 0px 0px "+player1Def*2+"px #ccffe6";
		}
	}
	return [defCheck, numberVal];
}

function divMin(object, set){
	player1var = '#player1set'+set;
	player2var = '#player2set'+set;
	divClass = '.minButton'+set;
	if (object.getAttribute("status") == "hide"){
		$(divClass)[0].setAttribute("status", "show");
		$(divClass)[1].setAttribute("status", "show");
		$(divClass)[0].innerHTML = "-";
		$(divClass)[1].innerHTML = "-";
		$(player1var).show();
		$(player2var).show();			
	} else {
		$(divClass)[0].setAttribute("status", "hide");
		$(divClass)[1].setAttribute("status", "hide");
		$(divClass)[0].innerHTML = "+";
		$(divClass)[1].innerHTML = "+";
		$(player1var).hide();
		$(player2var).hide();	
	}
}
