// Queue with array
class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(el) {
    this.queue.push(el);
  }
  dequeue() {
    this.queue.shift();
  }
}

// Queue with Linked List

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class QueueWithLinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
