/**
 * LinkedList constructor
 *
 * @class      LinkedList (name)
 * @return     {number}  { description_of_the_return_value }
 */
function LinkedList(){
	var start = null;
	var end = null;
	var length = 0;

	function getstart(){
		return start;
	}
	function setstart(value){
		start = value;
	}
	
	function getend(){
		return end;
	}
	function setend(value){
		end = value;
	}
	
	function getlength(){
		return length;
	}
	function setlength(value){
		length = value;
	}

	this.getItem = function(index){
		if(index >= getlength() || getstart() == null){
			return null;
		}
		else{
			var currentNode = getstart();
			for(var i=0;i<index;i++){
				currentNode = currentNode.next;
			}
			return currentNode.data;
		}
	}

	this.getNode = function(index){
		if(index >= getlength() || getstart() == null){
			return null;
		}
		else{
			var currentNode = getstart();
			for(var i=0;i<index;i++){
				currentNode = currentNode.next;
			}
			return currentNode;
		}
	}

	this.addItem = function(dataItem){
		this.addItemAtIndex(this.getLength(), dataItem);
	}

	this.addItemAtIndex = function(index, dataItem){
		var newNode = new Object;
		newNode.data = dataItem;
		newNode.next = null;
		if(index > getlength()){
			return null;
		}
		else if(getstart() == null){
			setstart(newNode);
			setend(newNode);
		}
		else if(index == getlength()){
			getend().next = newNode;
			setend(newNode);
		}
		else if(index == 0){
			newNode.next = getstart();
			setstart(newNode);
		}
		else{
			var currentNode = getstart();
			for(var i=0;i<index-1;i++){
				currentNode = currentNode.next;
			}
			var temp = currentNode.next;
			currentNode.next = newNode;
			newNode.next = temp;
		}
		setlength(getlength()+1);
	}

	this.removeItem = function(index){
		if(index >= getlength()){
			return null;
		}
		else if(getlength() == 1){
			setstart(null);
			setend(null);
		}
		else if(index == 0){
			setstart(getstart().next);
		}
		else{
			var currentNode = getstart();
			for(var i=0;i<index-1;i++){
				currentNode = currentNode.next;
			}
			var deleteNode = currentNode.next;
			currentNode.next = deleteNode.next;
		}
		setlength(getlength()-1);
	}

	this.map = function(callback){
		var currentNode = getstart();
		while(currentNode !== null){
			callback(currentNode.data);
			currentNode = currentNode.next;
		}
	}

	this.getLength = function(){
		return getlength();
	}

	this.toArray = function(){
		var listArray = [];
		this.map(function(data){
			listArray.push(data);
		});
		return listArray;
	}

	this.contains = function(dataItem){
		var currentNode = getstart();
		var containsFlag = false;
		while(currentNode !== null){
			if(currentNode.data == dataItem){
				containsFlag = true;
				break;
			}
			currentNode = currentNode.next;
		}
		return containsFlag;
	}

	this.indexOf = function(dataItem){
		var currentNode = getstart();
		var itemIndex = -1;
		var currentIndex = 0;
		while(currentNode !== null){
			if(currentNode.data == dataItem){
				itemIndex = currentIndex;
				break;
			}
			currentNode = currentNode.next;
			currentIndex++;
		}
		return itemIndex;
	}

	this.lastIndexOf = function(dataItem){
		var currentNode = getstart();
		var itemIndex = -1;
		var currentIndex = 0;
		while(currentNode !== null){
			if(currentNode.data == dataItem){
				itemIndex = currentIndex;
			}
			currentNode = currentNode.next;
			currentIndex++;
		}
		return itemIndex;
	}
}