class _Node<T> {
  data: T;
  next: _Node<T> | null;
  previous: _Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
  setPreviousNode(node: _Node<T> | null) {
    this.previous = node;
  }
  setNextNode(node: _Node<T> | null) {
    this.next = node;
  }

  getNextNode() {
    return this.next;
  }

  getPreviousNode() {
    return this.previous;
  }
}

class _LinkedList<T> {
  head: _Node<T> | null;
  tail: _Node<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToHead(data: T) {
    const newHead = new _Node<T>(data);
    if (this.head) {
      const currentHead = this.head;
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    } else {
      this.tail = newHead;
    }
    this.head = newHead;
    this.size += 1;
  }

  addToTail(data: T) {
    const newTail = new _Node<T>(data);
    if (this.tail) {
      const currentTail = this.tail;
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    } else {
      this.head = newTail;
    }
    this.tail = newTail;
    this.size += 1;
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) return;
    this.head = removedHead.getNextNode();

    if (this.head) {
      this.head.setPreviousNode(null);
    }

    if (removedHead === this.tail) {
      this.removeTail();
    }
    this.size -= 1;
    return removedHead.data;
  }
  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) return;
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead();
    }
    this.size -= 1;
    return removedTail.data;
  }

  removeByData(data: T) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }

    if (nodeToRemove.data === this.head?.data) {
      this.removeHead();
    } else if (nodeToRemove.data === this.tail?.data) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();

      nextNode?.setPreviousNode(previousNode);
      previousNode!.setNextNode(nextNode);
    }
    this.size -= 1;
    return nodeToRemove;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(`size: ${this.size}`, output);
  }
}

const subway = new _LinkedList<string>();
subway.addToHead("TimesSquare");
subway.addToHead("GrandCentral");
subway.addToHead("CentralPark");
subway.addToHead("42nd Street");

subway.addToTail("PennStation");
subway.addToTail("WallStreet");
subway.addToTail("BrooklynBridge");

subway.removeHead();
subway.removeTail();

subway.removeByData("TimesSquare");

subway.printList();
