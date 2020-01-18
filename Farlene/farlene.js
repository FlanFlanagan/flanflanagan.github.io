// Farlene Functions and variables//


function weapons(){
	$('#vizFrame').empty();
	var div = document.createElement('div');
	div.id = 'weapons';
	$('#vizFrame').append(div);
	$('#weapons').append("Harmony");
}

function jobs(){
	$('#vizFrame').empty();
	var jobsDiv = document.createElement("div");
	/*jobsDiv.id = 'jobs';*/
	jobsDiv.className = 'board board--type-bulletin bulletin'
	jobsList = data['jobs'];
	for(var key in jobsList){
		var div1 = document.createElement("div");
		div1.className = 'job ' + jobsList[key]['employer']
		p = document.createElement('p');
		p1 = document.createElement('p');
		p.append(key)
		p.className = 'jobTitle';
		p1.className = 'jobDesc';
		p.style.marginBottom = "0em";
		p1.append(jobsList[key]['job']);
		div1.append(p, p1);
		jobsDiv.append(div1)
		
	}
	$("#vizFrame").append(jobsDiv);
	return;	
}

function shops(){
	$('#vizFrame').empty();
	var itemsDiv = document.createElement("div");
	itemsDiv.className = 'items';
	for(var key in items){
		itemsDiv.append(weaponItem(items, key))
	}
	$("#vizFrame").append(itemsDiv);
	return;	
}

function weaponItem(itemDict, name){
	var div = document.createElement('div');
	div.className = "item " + itemDict[name]['type']
	p_array = [];
	p = document.createElement('p');
	p.append(name);
	div.append(p)
	newDict = itemDict[name]
	for(key in newDict){
		if(key=='type'){
			continue
		}
		p = document.createElement('p');
		p.append(key+": "+ itemDict[name][key])
		div.append(p)
	}
	return div
}