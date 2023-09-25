class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  peek() {
    return this.head;
  }
  addToHead(value) {
    this.head = new LinkedListNode(value, this.head);
  }

  addToTail(data) {
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

  remove(data) {
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

  isEmpty() {
    return this.size === 0;
  }

  listSize() {
    console.log(this.size);
  }

  printList() {
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

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const linkedList = new LinkedList();
linkedList.addToTail("Hello");
linkedList.addToTail("Hello Pakistan");
linkedList.printList();
linkedList.remove("Hello Pakistan");
linkedList.printList();
