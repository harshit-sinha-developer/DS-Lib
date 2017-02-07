function Stack(){
	var stackList = new LinkedList();
	this.push = function(dataItem){
		stackList.addItem(dataItem);
	}
	this.pop = function(){
		stackList.removeItem(this.size()-1);
	}
	this.size = function(){
		return stackList.getLength();
	}
	this.map = function(callback){
		return stackList.map(callback);	
	}
	this.toArray = function(){
		return stackList.toArray();
	}
	this.peek = function(){
		return stackList.getItem(this.size()-1);
	}
	this.contains = function(dataItem){
		return stackList.contains(dataItem);
	}
	this.indexOf = function(dataItem){
		return stackList.indexOf(dataItem);
	}
	this.lastIndexOf = function(dataItem){
		return stackList.lastIndexOf(dataItem);
	}
}