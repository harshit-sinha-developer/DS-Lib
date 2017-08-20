<a name="QueueList"></a>

## QueueList
**Kind**: global class  
**Export**:   

* [QueueList](#QueueList)
    * [new QueueList()](#new_QueueList_new)
    * [.length](#QueueList+length)
    * [.enqueue(item)](#QueueList+enqueue) ⇒ <code>void</code>
    * [.dequeue()](#QueueList+dequeue) ⇒ <code>any</code>
    * [.isEmpty()](#QueueList+isEmpty) ⇒ <code>boolean</code>
    * [.peek()](#QueueList+peek) ⇒ <code>any</code>
    * [.map(callback)](#QueueList+map) ⇒ <code>void</code>
    * [.toArray()](#QueueList+toArray) ⇒ <code>Array.&lt;any&gt;</code>
    
<a name="new_QueueList_new"></a>

### new DsLib.QueueList()
Creates an instance of QueueList.

<a name="QueueList+length"></a>

### queueList.length
The length of queue

**Kind**: instance property of [<code>QueueList</code>](#QueueList)  
**Read only**: true  
<a name="QueueList+enqueue"></a>

### queueList.enqueue(item) ⇒ <code>void</code>
Inserts an element in the tail of queue

**Kind**: instance method of [<code>QueueList</code>](#QueueList)  

| Param | Type |
| --- | --- |
| item | <code>any</code> | 

<a name="QueueList+dequeue"></a>

### queueList.dequeue() ⇒ <code>any</code>
Removes an element from the head of queue

**Kind**: instance method of [<code>QueueList</code>](#QueueList)  
**Returns**: <code>any</code> - The Head of queue  
<a name="QueueList+isEmpty"></a>

### queueList.isEmpty() ⇒ <code>boolean</code>
Checks if the queue is empty

**Kind**: instance method of [<code>QueueList</code>](#QueueList)  
**Returns**: <code>boolean</code> - True if queue is empty, false otherwise  
<a name="QueueList+peek"></a>

### queueList.peek() ⇒ <code>any</code>
Returns the head element of queue, without removing it

**Kind**: instance method of [<code>QueueList</code>](#QueueList)  
**Returns**: <code>any</code> - The head element of queue  
<a name="QueueList+map"></a>

### queueList.map(callback) ⇒ <code>void</code>
Map function on the queue used to iterate each element

**Kind**: instance method of [<code>QueueList</code>](#QueueList)  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="QueueList+toArray"></a>

### queueList.toArray() ⇒ <code>Array.&lt;any&gt;</code>
Returns the queue in the form of an array

**Kind**: instance method of [<code>QueueList</code>](#QueueList)  
**Returns**: <code>Array.&lt;any&gt;</code> - The queue in array form  
<a name="QueueList.QueueList"></a>

### QueueList.QueueList
**Kind**: static class of [<code>QueueList</code>](#QueueList)  
<a name="new_QueueList.QueueList_new"></a>

#### new QueueList()
Creates an instance of QueueList.

