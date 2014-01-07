// Total Functions //
function totalTally(selectObj){
	parentDivID = selectObj.parentNode.parentNode.id;
	if (selectObj.oldValue == '-' || selectObj.oldValue == 'TB' || selectObj.oldValue == 'DB'){
		if (parentDivID == 'player1'){
			totalVal = parseFloat($(totalSpan1).text());
			if (parseFloat(selectObj.value) >= player1Sink){
				totalVal = totalVal + parseFloat(selectObj.value) - player1Sink;
				player1Sink = 0;
			} else {
				player1Sink = player1Sink - parseFloat(selectObj.value);
			}
			$(totalSpan1).empty();
			$(totalSpan1).append(totalVal);
		} else {
			totalVal = parseFloat($(totalSpan2).text());
			if (parseFloat(selectObj.value) >= player2Sink){
				totalVal = totalVal + parseFloat(selectObj.value) - player2Sink;
				player2Sink = 0;
			} else {
				player2Sink = player2Sink - parseFloat(selectObj.value);
			}
			$(totalSpan2).empty();
			$(totalSpan2).append(totalVal);
		}
	} else {
		if (parentDivID == 'player1'){
			totalVal = parseFloat($(totalSpan1).text());
			totalVal = totalVal - parseFloat(selectObj.oldValue)
			if (parseFloat(selectObj.value) >= player1Sink){
				totalVal = totalVal + parseFloat(selectObj.value) - player1Sink;
				player1Sink = 0;
			} else {
				player1Sink = player1Sink - parseFloat(selectObj.value);
			}
			$(totalSpan1).empty();
			$(totalSpan1).append(totalVal);
		} else {
			totalVal = parseFloat($(totalSpan2).text());
			totalVal = totalVal - parseFloat(selectObj.oldValue)
			if (parseFloat(selectObj.value) >= player2Sink){
				totalVal = totalVal + parseFloat(selectObj.value) - player2Sink;
				player2Sink = 0;
			} else {
				player2Sink = player2Sink - parseFloat(selectObj.value);
			}
			$(totalSpan2).empty();
			$(totalSpan2).append(totalVal);
		}		
	}
	p1Diff = parseFloat($(totalSpan1).text()) - parseFloat($(totalSpan2).text());
	p2Diff = parseFloat($(totalSpan2).text()) - parseFloat($(totalSpan1).text());
}

function totalDelUpdate(selectObj){
	parentDivID = selectObj.parentNode.parentNode.id;
	if (selectObj.oldValue != '-'){
		if (parentDivID == 'player1'){
			totalVal = parseFloat($(totalSpan1).text());
			totalVal = totalVal - parseFloat(selectObj.oldValue)
			$(totalSpan1).empty();
			$(totalSpan1).append(totalVal);
		} else {
			totalVal = parseFloat($(totalSpan2).text());
			totalVal = totalVal - parseFloat(selectObj.oldValue)
			$(totalSpan2).empty();
			$(totalSpan2).append(totalVal);
		}
	} else {
		return;
	}
}

function comeBackTest(){
	var value1 = "";
	var value2 = "";
	var player1_name;
	var player2_name;
	if(set > 0){		
		for(var i = $('#player1 div')[set+OTset-1].innerHTML.search('>')+1; i < $('#player1 div')[set+OTset-1].innerHTML.search('</'); i++){
		    value1 = value1 + $('#player1 div')[set+OTset-1].innerHTML.charAt(i);
		}
		for(var i = $('#player2 div')[set+OTset-1].innerHTML.search('>')+1; i < $('#player2 div')[set+OTset-1].innerHTML.search('</'); i++){
		    value2 = value2 + $('#player2 div')[set+OTset-1].innerHTML.charAt(i);
		}
		if(parseInt(value1) > parseInt(value2)+75){
			if(player2CB150 != true || player2CB300 != true){
				player2CB75 = false;
			}else{
				player2CB75 = true;
			}
		}
		if(parseInt(value1) > parseInt(value2)+150){
			if(player2CB300 != true){
				player2CB150 = true;
				player2CB75 = false;
			}
			
		}
		if(parseInt(value1) > parseInt(value2)+300){
			player2CB300 = true;
			player2CB150 = false;
			player2CB75 = false;
		}		
		if(parseInt(value1)+75 < parseInt(value2)){
			if(player1CB150 != true || player1CB300 != true){
				player1CB75 = false;
			}else{
				player1CB75 = true;
			}
		}
		if(parseInt(value1)+150 < parseInt(value2)){
			if(player1CB300 != true){
				player1CB150 = true;
				player1CB75 = false;
			}
		}
		if(parseInt(value1)+300 < parseInt(value2)){
			player1CB300 = true;
			player1CB150 = false;
			player1CB75 = false;
		}
	}
}
function comeBackMessage1(){
	if(player1CB75 == true){
		comeBack75($('#player1Name')[0].value);
	}
	if(player1CB150 == true){
		comeBack150($('#player1Name')[0].value);
	}
	if(player1CB300 == true){
		comeBack300($('#player1Name')[0].value);
	}
}
function comeBackMessage2(){
	if(player2CB75 == true){
		comeBack75($('#player2Name')[0].value);
	}
	if(player2CB150 == true){
		comeBack150($('#player2Name')[0].value);
	}
	if(player2CB300 == true){
		comeBack300($('#player2Name')[0].value);
	}
}
