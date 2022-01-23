class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        const temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = temp.prev;
            this.tail.next = null;
        }
        this.length--;
        return temp;
    }
    shift() {
        if (this.length === 0) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        const middle = this.length / 2
        let node;
        if (index > middle) {
            node = this.tail;
            let current = this.length - 1;
            while (current !== index) {
                node = this.tail.prev
                current--
            }
        }
        else {
            let current = 0;
            node = this.head;
            while (current !== index) {
                node = this.head.next;
                current++
            }
        }
        return node;
    }
    set(val, index) {
        const node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        } else {
            return false;
        }
    }
}


const list = new DoublyLinkedList()

list.push('hello')
list.push('not hello')
list.push('bye')

console.log(list.get(2));