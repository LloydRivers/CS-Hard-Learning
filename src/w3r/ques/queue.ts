class QueueNode<T> {
  data: T;
  constructor(data: T) {
    this.data = data;
  }
}

class Queue<T> {
  length: number;
  queue: Array<QueueNode<T>>;
  start: number;
  end: number;
  constructor() {
    this.length = 0;
    this.queue = [];
    this.start = 0;
    this.end = 0;
  }
  enQueue(value: T) {
    const queue = new QueueNode<T>(value);
    this.queue[this.end] = queue;
    this.end += 1;
    this.length += 1;
  }
  deQueue() {
    if (this.isEmpty()) {
      console.log("The queue is empty");
    } else {
      delete this.queue[this.start];
      this.start += 1;
      this.length -= 1;
    }
  }
  size() {
    return this.length;
  }
  isEmpty() {
    return this.length === 0;
  }
  peek() {
    return this.queue[0];
  }
  printQue() {
    if (!this.isEmpty()) {
      for (let index = this.start; index < this.end; index++) {
        console.log("inside loop");
        const element = this.queue[index];
        console.log(element);
      }
    }
  }
}

const q = new Queue<string>();
q.enQueue("Hello World");
q.size();
q.peek();
q.enQueue("Jimmy");
q.enQueue("Jim");
q.printQue();
q.size();
q.deQueue();
