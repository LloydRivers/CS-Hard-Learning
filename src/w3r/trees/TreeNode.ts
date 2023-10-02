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
rootNode.depthFirstTraversal();
