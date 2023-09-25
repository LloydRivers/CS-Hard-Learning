class LinkedListNode {
  data: string;
  next: LinkedListNode | null;
  constructor(data: string) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: LinkedListNode | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  peek(): LinkedListNode | null {
    return this.head;
  }

  addToHead(value: string): void {
    let node = new LinkedListNode(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  addToTail(data: string): void {
    let node = new LinkedListNode(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  remove(data: string): void {
    if (this.isEmpty()) {
      console.log("Nothing to delete.");
    }

    let previous = null;
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (previous === null) {
          this.head = current.next;
        } else {
          console.log("inside else");
          previous.next = current.next;
        }
        this.size--;
        this.listSize();
        break;
      }
      previous = current;
      current = current.next;
    }
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  listSize(): void {
    console.log(this.size);
  }

  printList(): void {
    let currentNode = this.head;
    let output = "<head> ";

    while (currentNode) {
      output += currentNode.data + " ";
      currentNode = currentNode.next;
    }
    output = output + "<tail>";
    console.log(output);
  }
}

const linkedList = new LinkedList();
linkedList.addToTail("Hello");
linkedList.addToTail("Hello Pakistan");
linkedList.printList();
linkedList.remove("Hello Pakistan");
linkedList.printList();
