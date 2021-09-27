- Ordered lists of data (duplicates allowed) ==> use Arrays ex: array = [1,2,4,5,4]
- Unordered lists of data (duplicates not allowed) ==> use Set ex: new Set() set.add('Pizza')
- Key-Value pairs of data (Unordered) ==> use Object ex: {name: 'max' ,  age: 13}
- Key-Value pairs of data (Ordered Iterable) ==> use Map() ex: new Map() map.set('loc','germany')

Arrays: 
- Indexed : means we can access an item by using its index number.
- Iterable : means we can use loops to iterate over all items in the array.
- Size is dynamic increased when we add items and decreased when we remove items.
- Duplictes are allowed. 

Sets : are better than arrays in finding or deletion an element because order in a set is not matter.

Arrays: often used, order matters , duplicates wanted
vs 
sets : order doesn't matter , duplicates not allowed , fast for finding and deletion

Objects: 
- can have key-value pairs , methods.
- unordered key-value pairs.
- can access by using the key 
- not iterable (only for in loop)
- key is unique , value is not ex: you cant have multiple age property in the same object.

Maps : 
- can have key-value pairs , methods.
- ordered key-value pairs.
- can access by using the key 
- iterable 
- not iterable (only for in loop)
- key is unique , value is not ex: you cant have multiple age property in the same object.
- pure data storage can optimized for accessing data [maps are just data stores]

objects: use them to add extra functionality 
vs 
maps: focus on data storage and it can simplify data access