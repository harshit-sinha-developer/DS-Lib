function Queue(){
	var queueList = new LinkedList();
	this.enqueue = function(dataItem){
		queueList.addItem(dataItem);
	}
	this.dequeue = function(){
		queueList.removeItem(0);
	}
	this.size = function(){
		return queueList.getLength();
	}
	this.map = function(callback){
		return queueList.map(callback);	
	}
	this.toArray = function(){
		return queueList.toArray();
	}
	this.peek = function(){
		return queueList.getItem(0);
	}
	this.contains = function(dataItem){
		return queueList.contains(dataItem);
	}
	this.indexOf = function(dataItem){
		return queueList.indexOf(dataItem);
	}
	this.lastIndexOf = function(dataItem){
		return queueList.lastIndexOf(dataItem);
	}
}