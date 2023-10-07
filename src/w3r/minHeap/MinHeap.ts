import { getParent, getLeft, getRight } from "./helpers";

type HeapValue = number | null;

class MinHeap {
  heap: HeapValue[] = [];
  size = 0;
  constructor() {
    this.heap = [null];
    this.size = 0;
  }
  exists(index: number) {
    return index <= this.size;
  }
  canSwap(current: number, leftChild: number, rightChild: number) {
    const currentVal = this.heap[current];
    const leftChildVal = this.heap[leftChild];
    const rightChildVal = this.heap[rightChild];
    return (
      (this.isNotNull(leftChildVal) &&
        currentVal !== null &&
        currentVal > leftChildVal) ||
      (this.isNotNull(rightChildVal) &&
        currentVal !== null &&
        currentVal > rightChildVal)
    );
  }
  heapify() {
    let current = 1;
    let leftChild = getLeft(current);
    let rightChild = getRight(current);
    while (this.canSwap(current, leftChild, rightChild)) {
      if (this.exists(leftChild) && this.exists(rightChild)) {
        if (this.heap[leftChild]! < this.heap[rightChild]!) {
          this.swap(current, leftChild);
          current = leftChild;
        } else {
          this.swap(current, rightChild);
          current = rightChild;
        }
      } else {
        this.swap(current, leftChild);
        current = leftChild;
      }
      leftChild = getLeft(current);
      rightChild = getRight(current);
    }
  }
  popMin() {
    if (this.size === 0) {
      return null;
    }
    console.log(
      `\n.. Swap ${this.heap[1]} with last element ${this.heap[this.size]}`
    );
    this.swap(1, this.size);
    const min = this.heap.pop();
    this.size--;
    console.log(`.. Removed ${min} from heap`);
    console.log("..", this.heap);
    this.heapify();
    return min;
  }
  add(value: HeapValue) {
    // pushes it to the heap array
    this.heap.push(value);
    // increases the size
    this.size += 1;
    // calls bubble up
    this.bubbleUp();

    // logs to the console
    console.log(`Adding ${value}`);
    console.log("Current heap:", this.heap);
    return this.heap;
  }
  isNotNull(value: HeapValue): value is number {
    return value !== null;
  }
  swap(a: number, b: number) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  bubbleUp() {
    let current = this.size;
    while (
      current > 1 &&
      this.isNotNull(this.heap[current]) &&
      this.isNotNull(this.heap[getParent(current)])
    ) {
      console.log("..", this.heap);
      console.log(`.. swap index ${current} with ${getParent(current)}`);
      this.swap(current, getParent(current));
      current = getParent(current);
    }
  }
}

const minHeap = new MinHeap();

// helper function to return a random integer
function randomize() {
  return Math.floor(Math.random() * 40);
}

// populate minHeap with random numbers
for (let i = 0; i < 6; i++) {
  minHeap.add(randomize());
}

// display the bubbled up numbers in the heap
console.log("Bubbled Up", minHeap.heap);

// remove the minimum value from heap
for (let i = 0; i < 6; i++) {
  minHeap.popMin();
  console.log("Heapified", minHeap.heap);
}
