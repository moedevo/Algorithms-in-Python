// Linked List is a list that is linked. 
// There's two types of linked lists : 1. Singly 2. Doubly
// Singly Linked lists contain a set of nodes. every node has two blocks the value and the pointer to the next node.
// The first node calls Head and the last node calls Tail.
// We can determine the tail when it points to Null.
// It can be sorted or unsorted and contains different data types.
// JavaScript doesn't come with pre-built linked list but we can build it.
// Iteartes through a linked lists is usually slower than an array
// Insertion in the middle of linked list is better than an array.
// Deletion is better in linked list than array.
// Linked list is ordered but hash tables is not.
// Linked List Big O (prepend O(1), append O(1), lookup O(n),insert O(n) ,delete O(n))
// Pointer is a reference to another node.
// Example: 

let obj1 = {a: true}
let obj2 = obj1    // This is a pointer
// obj1.a = 'hey' // this will change both objects
// delete obj1 // this will delete obj1
console.log('1', obj1)
console.log('2', obj2)
