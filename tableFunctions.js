function newStatTable(){
	/// Totaling the values ///
	var acc_1 = 0, acc_2 = 0, acc10_1 = 0, acc10_2 = 0, acc30_1 = 0, acc30_2 = 0, acc50_1 = 0, acc50_2 = 0, bulleys1 = 0, bulleys2 = 0, total_1 = 0, total_2 = 0, catch1 = 0, catch2 = 0;
	for(j = 0; j < $('#player1 form')[set+OTset].length; j++){
		if(!$('#player1 form')[set+OTset][j].onclick){
			total_1 = total_1 + 1;
		}
	}
	acc_1 = parseFloat(bulleys1) + parseFloat(acc10_1) + parseFloat(acc30_1) + parseFloat(acc50_1);
	for(j = 0; j < $('#player2 form')[set+OTset].length; j++){
		if(!$('#player2 form')[set+OTset][j].onclick){
			total_2 = total_2 + 1;
		}
	}			
	acc10_1 += scoreTrack1[set][0];
	acc10_2 += scoreTrack2[set][0];
	acc30_1 += scoreTrack1[set][1];
	acc30_2 += scoreTrack2[set][1];
	acc50_1 += scoreTrack1[set][2];
	acc50_2 += scoreTrack2[set][2];
	bulleys1 += scoreTrack1[set][3];
	bulleys2 += scoreTrack2[set][3];
	acc_1 = parseFloat(bulleys1) + parseFloat(acc10_1) + parseFloat(acc30_1) + parseFloat(acc50_1);
	acc_2 = parseFloat(bulleys2) + parseFloat(acc10_2) + parseFloat(acc30_2) + parseFloat(acc50_2);
	player1 = $('#player1Name')[0].value
	player2 = $('#player2Name')[0].value
	catch1 = total_1-7;
	catch2 = total_2-7;
	/// Catching Statistics Achievements ///
	catchPointManager(catch1, catch2);
	/// Storing Deadliness ///
	var deadly1 = ((acc10_1*10+acc30_1*30+acc50_1*50+bulleys1*100)/(total_1)).toFixed(2)
	var deadly2 = ((acc10_2*10+acc30_2*30+acc50_2*50+bulleys2*100)/(total_2)).toFixed(2)
	/// Adding the statistics table ///
	$('#statistics').append('&#13;' +
		'<table border = "1" id = "set'+(set)+'Table">'+
			'<tr>'+
				'<th colspan="3"> Statistics Set '+(set)+'</th>'+
			'</tr>'+
			'<tr>'+
				'<th> Statistic </th>'+
				'<th><span> '+player1+' </span></th>'+
				'<th><span> '+player2+' </span></th>'+
			'</tr>'+
			'<tr>'+
				'<th> Accuracy </th>'+
				'<td><span> '+(acc_1/total_1*100).toFixed(2)+' </span></td>'+
				'<td><span> '+(acc_2/total_2*100).toFixed(2)+' </span></td>'+
			'</tr>'+
			'<tr>'+
				'<th> 10 - Accuracy </th>'+
				'<td><span> '+(acc10_1/total_1*100).toFixed(2)+' </span></td>'+
				'<td><span> '+(acc10_2/total_2*100).toFixed(2)+' </span></td>'+
			'</tr>'+
			'<tr>'+
				'<th> 30 - Accuracy </th>'+
				'<td><span> '+(acc30_1/total_1*100).toFixed(2)+' </span></td>'+
				'<td><span> '+(acc30_2/total_2*100).toFixed(2)+' </span></td>'+
			'</tr>'+
			'<tr>'+
				'<th> 50 - Accuracy </th>'+
				'<td><span> '+(acc50_1/total_1*100).toFixed(2)+' </span></td>'+
				'<td><span> '+(acc50_2/total_2*100).toFixed(2)+' </span></td>'+
			'</tr>'+
			'<tr>'+
				'<th> Bullseye </th>'+
				'<td><span> '+(bulleys1/total_1*100).toFixed(2)+' </span></td>'+
				'<td><span> '+(bulleys2/total_2*100).toFixed(2)+' </span></td>'+
			'</tr>'+
			'<tr>'+
				'<th> Catches</th>'+
				'<td><span> '+(catch1/total_2*100).toFixed(2)+' </span></td>'+
				'<td><span> '+(catch2/total_1*100).toFixed(2)+' </span></td>'+
			'</tr>'+
			'<tr>'+
				'<th> Deadliness</th>'+
				'<td><span> '+deadly1+' </span></td>'+
				'<td><span> '+deadly2+' </span></td>'+
			'</tr>'+
		'</table>');
	/// Pushing the Achievements ///
	// Accuracy //
	if((acc_1/total_1*100).toFixed(2) >= 80 && (acc_1/total_1*100).toFixed(2) < 90){
		marksMen($('#player1Name')[0].value);
	}
	if((acc_2/total_2*100).toFixed(2) >= 80 && (acc_2/total_2*100).toFixed(2) < 90){
		marksMen($('#player2Name')[0].value);
	}
	if((acc_1/total_1*100).toFixed(2) >= 90 && (acc_1/total_1*100).toFixed(2) < 100){
		sharpShooter($('#player1Name')[0].value);
	}
	if((acc_2/total_2*100).toFixed(2) >= 90 && (acc_2/total_2*100).toFixed(2) < 100){
		sharpShooter($('#player2Name')[0].value);
	}
	if((acc_1/total_1*100).toFixed(2) == 100){
		assassin($('#player1Name')[0].value);
	}
	if((acc_2/total_2*100).toFixed(2) == 100){
		assassin($('#player2Name')[0].value);
	}
	// Deadliness
	if(deadly1 >= 40 && deadly1 < 50){
		justAScratch($('#player1Name')[0].value);
	}
	if(deadly2 >= 40 && deadly2 < 50){
		justAScratch($('#player2Name')[0].value);
	}
	if(deadly1 >= 50 && deadly1 < 60){
		biteMark($('#player1Name')[0].value);
	}
	if(deadly2 >= 50 && deadly2 < 60){
		biteMark($('#player2Name')[0].value);
	}
	if(deadly1 >= 90 && deadly1 < 100){
		mauling($('#player1Name')[0].value);
	}
	if(deadly2 >= 90 && deadly2 < 100){
		mauling($('#player2Name')[0].value);
	}
	if(deadly1 == 100){
		headShot($('#player1Name')[0].value);
	}
	if(deadly2 == 100){
		headShot($('#player2Name')[0].value);
	}
}
