// Stack with array
class Stack {
  constructor() {
    this.stack = [];
  }
  add(element) {
    this.stack.push(element);
  }
  remove() {
    return this.stack.pop();
  }
}

// Stack with linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class StackWithLinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const nowNode = new Node(val);
    if (!this.head) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    const removedNode = this.head;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    this.size--;
    return removedNode.val;
  }
}