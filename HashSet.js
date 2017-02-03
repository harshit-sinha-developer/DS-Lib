function Set(){
	var set = {};
	this.add = function(element){
		if(set[element] != undefined || typeof element == "undefined" || typeof element == "function"){
			return false;
		}
		else if(typeof element == "object" && element != null){
			set[JSON.stringify(element)] = "object";
		}
		else
			set[element] = typeof element;
		return true;
	}

	this.testSet = function(){
		return set;
	}

	this.remove = function(element){
		if(typeof element == "object" && element != null){
			element = JSON.stringify(element)
		}
		else if(typeof set[element] == "undefined" || typeof element == "undefined" || typeof element == "function"){
			return false;
		}
		delete set[element];
		return true;
	}

	this.contains = function(element){
		if(typeof set[element] == "undefined"){
			return false;
		}
		return true;
	}

	this.toArray = function(){
		var setArray = [];
		for(var i in set){
			var iConverted = null;
			switch(set[i]){
				case "number":
					iConverted = Number(i);
					break;
				case "string":
					iConverted = String(i);
					break;
				case "boolean":
					iConverted = Boolean(i);
					break;
				case "object":
					iConverted = JSON.parse(i);
					break;
			}
			setArray.push(iConverted);
		}
		return setArray;
	}
}