// Last in first out (LIFO)

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
