// First in first out (FIFO)

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
