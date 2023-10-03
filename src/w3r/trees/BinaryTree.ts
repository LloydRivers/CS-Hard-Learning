class BinaryTree {
  value: number;
  depth: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  constructor(value: number, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    // If the target value is less than the root node’s value, we will need to place it in a left child node.
    if (value < this.value) {
      //  Before doing so, we need to check if a left child node already exists.
      if (this.left) {
        //  If so, we will call the .insert() method for the left child node.
        this.left.insert(value);
      } else {
        //  If not, we will add another level to our binary tree by creating a left binary tree with the target value and a new depth.
        // Did you instantiate a new BinaryTree class with arguments value and this.depth+1 and assign it to this.left?
        this.left = new BinaryTree(value, this.depth + 1);
        this.depth += 1;
      }
    } else {
    }
  }
  // prettier-ignore
  getNodeByValue(value: number): BinaryTree | null  {
    if (this.value === value) {
      return this;
    } else if ((this.left) && (value < this.value)) {
        return this.left.getNodeByValue(value);
    } else if (this.right) {
        return this.right.getNodeByValue(value);
    } else {
      return null;
    }
  }

  depthFirstTraversal() {
    if (this.left) {
      this.left.depthFirstTraversal();
      console.log(this.value, this.depth);
    }
    if (this.right) {
      this.right.depthFirstTraversal();
      console.log(this.value, this.depth);
    }
  }
}

const bt = new BinaryTree(100);

// insert values to the BinaryTree
bt.insert(50);
bt.insert(125);
bt.insert(75);
bt.insert(25);
