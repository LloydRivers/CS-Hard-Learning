/*
Binary Search
When given a sorted array of data, binary search is a way of searching through that data to find an element in O(log n) time using a divide and conquer approach. It doesn’t require you to look through the entire array in a linear way, which would have a linear big O runtime of O(n).

Binary Search Trees
Binary search trees are a type of tree data structure with the added condition that each element to the left of a node must be less than that parent node, and each element to the right of a node must be greater than that parent node. Each left and right subtree is also itself a binary search tree, which makes searching for elements more efficient.
*/

class TreeNode<T> {
  data: T;
  children: TreeNode<T>[];
  constructor(data: T) {
    this.data = data;
    this.children = [];
  }

  addChild(child: TreeNode<T>) {
    this.children.push(child);
  }
  removeChild(childToRemove: number | TreeNode<T>) {
    const length = this.children.length;
    this.children = this.children.filter((child) => {
      return childToRemove instanceof TreeNode
        ? child !== childToRemove
        : child.data !== childToRemove;
    });

    if (length === this.children.length) {
      this.children.forEach((child) => child.removeChild(childToRemove));
    }
  }

  depthFirstTraversal() {
    console.log(this.data);
    this.children.forEach((child) => child.depthFirstTraversal());
  }

  breadthFirstTraversal() {
    let queue: TreeNode<T>[] = [this];
    while (queue.length !== 0) {
      const current = queue.shift();
      if (current) {
        console.log(current.data);
        queue = queue.concat(current.children);
      }
    }
  }
}

// 1. Create the root node
const rootNode = new TreeNode<number>(30);

// 2. Create children of the root node
const childNode1 = new TreeNode<number>(12);
const childNode2 = new TreeNode<number>(45);
const childNode3 = new TreeNode<number>(25);

// 3. Add children nodes to the root node
rootNode.addChild(childNode1);
rootNode.addChild(childNode2);
rootNode.addChild(childNode3);

// 4. Create nested children
const nestedChild1 = new TreeNode<number>(8);
const nestedChild2 = new TreeNode<number>(15);

// 5. Add nested children to childNode1
childNode1.addChild(nestedChild1);
childNode1.addChild(nestedChild2);

// call depthFirstTraversal
console.log(rootNode.depthFirstTraversal());
