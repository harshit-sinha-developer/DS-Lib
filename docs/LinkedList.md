## Classes

<dl>
<dt><a href="#LinkedList">LinkedList</a></dt>
</dl>

## LinkedList
**Kind**: global class  

* [LinkedList](#LinkedList)
    * [.length](#LinkedList+length)
    * [.addItem(itemValue)](#LinkedList+addItem) ⇒ <code>void</code>
    * [.addItemAtStart(itemValue)](#LinkedList+addItemAtStart) ⇒ <code>void</code>
    * [.addItemAtIndex(index, data)](#LinkedList+addItemAtIndex) ⇒ <code>void</code>
    * [.getLastItem()](#LinkedList+getLastItem) ⇒ <code>any</code>
    * [.getFirstItem()](#LinkedList+getFirstItem) ⇒ <code>any</code>
    * [.getItemAtIndex(index)](#LinkedList+getItemAtIndex) ⇒ <code>any</code>
    * [.removeFirstItem()](#LinkedList+removeFirstItem) ⇒ <code>void</code>
    * [.removeLastItem()](#LinkedList+removeLastItem) ⇒ <code>void</code>
    * [.removeItemAtIndex(index)](#LinkedList+removeItemAtIndex) ⇒ <code>void</code>
    * [.updateItem(index, value)](#LinkedList+updateItem) ⇒ <code>void</code>
    * [.map(callback)](#LinkedList+map) ⇒ <code>void</code>
    * [.toArray()](#LinkedList+toArray) ⇒ <code>Array.&lt;any&gt;</code>
    
<a name="LinkedList+length"></a>

### LinkedList.length
The length of the linked list

**Kind**: instance property of [<code>LinkedList</code>](#LinkedList)  
**Read only**: true  
<a name="LinkedList+addItem"></a>

### LinkedList.addItem(itemValue) ⇒ <code>void</code>
Adds a new item in the tail of linked list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param | Type | Description |
| --- | --- | --- |
| itemValue | <code>any</code> | Item to be added |

<a name="LinkedList+addItemAtStart"></a>

### LinkedList.addItemAtStart(itemValue) ⇒ <code>void</code>
Adds an item at the head of the linked list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param | Type | Description |
| --- | --- | --- |
| itemValue | <code>any</code> | Item to be added |

<a name="LinkedList+addItemAtIndex"></a>

### LinkedList.addItemAtIndex(index, data) ⇒ <code>void</code>
Adds an item in the linked list at the given index

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index |
| data | <code>any</code> | Item to be added |

<a name="LinkedList+getLastItem"></a>

### LinkedList.getLastItem() ⇒ <code>any</code>
Gets the last item of the linked list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>any</code> - The last item  
<a name="LinkedList+getFirstItem"></a>

### LinkedList.getFirstItem() ⇒ <code>any</code>
Gets the first item of the linked list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>any</code> - The first item  
<a name="LinkedList+getItemAtIndex"></a>

### LinkedList.getItemAtIndex(index) ⇒ <code>any</code>
Gets an item from the linked list at the given index

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
**Returns**: <code>any</code> - The item  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index |

<a name="LinkedList+removeFirstItem"></a>

### LinkedList.removeFirstItem() ⇒ <code>void</code>
Removes the first item from the linked list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
<a name="LinkedList+removeLastItem"></a>

### LinkedList.removeLastItem() ⇒ <code>void</code>
Removes the last item from the linked list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
<a name="LinkedList+removeItemAtIndex"></a>

### LinkedList.removeItemAtIndex(index) ⇒ <code>void</code>
Removes an item at the given index of linked list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param | Type |
| --- | --- |
| index | <code>number</code> | 

<a name="LinkedList+updateItem"></a>

### LinkedList.updateItem(index, value) ⇒ <code>void</code>
Updates an item of the linked list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index |
| value | <code>any</code> | New value |

<a name="LinkedList+map"></a>

### LinkedList.map(callback) ⇒ <code>void</code>
Map function for the linked list

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="LinkedList+toArray"></a>

### LinkedList.toArray() ⇒ <code>Array.&lt;any&gt;</code>
Returns the linked list in the form of an array


