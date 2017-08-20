<a name="StackList"></a>

## StackList
**Kind**: global class  
**Export**:   

* [StackList](#StackList)
    * [new StackList()](#new_StackList_new)
    * [.length](#StackList+length)
    * [.push(item)](#StackList+push) ⇒ <code>void</code>
    * [.pop()](#StackList+pop) ⇒ <code>any</code>
    * [.peek()](#StackList+peek) ⇒ <code>any</code>
    * [.isEmpty()](#StackList+isEmpty) ⇒ <code>boolean</code>
    * [.map(callback)](#StackList+map) ⇒ <code>void</code>
    * [.toArray()](#StackList+toArray) ⇒ <code>Array.&lt;any&gt;</code>
    
<a name="new_StackList_new"></a>

### new DsLib.StackList()
StackList Class

<a name="StackList+length"></a>

### stackList.length
The length of the Stack

**Kind**: instance property of [<code>StackList</code>](#StackList)  
**Read only**: true  
<a name="StackList+push"></a>

### stackList.push(item) ⇒ <code>void</code>
Adds an item into the stack, performs push operation on stack

**Kind**: instance method of [<code>StackList</code>](#StackList)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>any</code> | Item to push into stack |

<a name="StackList+pop"></a>

### stackList.pop() ⇒ <code>any</code>
Removes the top item from the stack, performs pop operation on stack

**Kind**: instance method of [<code>StackList</code>](#StackList)  
**Returns**: <code>any</code> - The top element of stack  
<a name="StackList+peek"></a>

### stackList.peek() ⇒ <code>any</code>
Returns the top element of the stack

**Kind**: instance method of [<code>StackList</code>](#StackList)  
**Returns**: <code>any</code> - The top element of stack  
<a name="StackList+isEmpty"></a>

### stackList.isEmpty() ⇒ <code>boolean</code>
Checks if the stack is empty

**Kind**: instance method of [<code>StackList</code>](#StackList)  
**Returns**: <code>boolean</code> - True if stack is empty, false otherwise  
<a name="StackList+map"></a>

### stackList.map(callback) ⇒ <code>void</code>
Map function on the stack used to iterate each element

**Kind**: instance method of [<code>StackList</code>](#StackList)  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="StackList+toArray"></a>

### stackList.toArray() ⇒ <code>Array.&lt;any&gt;</code>
Returns the stack as an array

**Kind**: instance method of [<code>StackList</code>](#StackList)  
<a name="StackList.StackList"></a>


