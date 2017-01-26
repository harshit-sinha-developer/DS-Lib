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
		var newNode = new Object();
		newNode.data = dataItem;
		newNode.next = null;
		if(getstart() == null){
			setstart(newNode);
			setend(newNode);
		}
		else{
			getend().next = newNode;
			setend(newNode)
		}
		setlength(getlength()+1);
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
}