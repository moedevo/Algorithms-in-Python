// Stacks & Queues are both linear data structures. O(n).
// The only difference is how items get removed from those data structures.
// No rancdom access operation.
// Stacks only lookup O(n) and others are pop(), push(), peek() all are O(1).
// Queues only lookup O(n) and others are enqueue(), dequeue(), peek() all are O(1).
// Stacks Last in First Out.
// Queues First in First Out.
// We can use Linked Lists or Arrays to implement it.
// Both arrays and linkedlist are good for stacks.
// only linked list is good for queues. O(1)


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek (){
        return this.top;
    }
    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length ++
        return this;
    }
    pop() {
        if(!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        // const holdingPointer = this.top;
        this.top = this.top.next;
        this.length ++
        return this;
    }
    // is Empty
}
const myStack = new Stack ();
console.log(myStack.push('google'))