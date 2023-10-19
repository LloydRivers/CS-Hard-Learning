/*
Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.
*/

class __Node__ {
  val: string;
  next: __Node__ | null;
  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head: __Node__ | null) => {
  let newArray = [];
  let current = head;
  while (current !== null) {
    newArray.push(current.val);
    current = current.next;
  }
  return newArray;
};

const a = new __Node__("a");
const b = new __Node__("b");
const c = new __Node__("c");
const d = new __Node__("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]
