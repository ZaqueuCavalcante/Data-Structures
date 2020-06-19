class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - // 
  add(data) {
    if (this.root === null) {
      this.root = new Node(data);
      this.root.setPosition(width / 2, this.root.radius * 3);
      return;
    }
    let relativeRoot = this.root;
    let backup = null;
    while (relativeRoot !== null) {
      backup = relativeRoot;
      if (data < relativeRoot.data) {
        relativeRoot = relativeRoot.leftNode;
      } else {
        relativeRoot = relativeRoot.rightNode;
      }
    }
    relativeRoot = backup;
    if (data < relativeRoot.data) {
      relativeRoot.linkToLeft(new Node(data));
    } else {
      relativeRoot.linkToRight(new Node(data));
    }
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
  remove(data) {
    const removeNode = function(node, data) {
      
      if (node === null) {
        return null;
      }
      
      if (data === node.data) {  // There are 4 possibilities
        // node has no children
        if (node.leftNode === null && node.rightNode === null) {
          return null;
        }
        // node has no left child
        if (node.leftNode === null) {
          return node.rightNode;
        }
        // node has no right child
        if (node.rightNode === null) {
          return node.leftNode;
        }
        // node has two children, the most complicated case
        var tempNode = node.rightNode;
        while (tempNode.leftNode) {}
      }
      
      
    }
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
  isPresent(data) {
    let currentNode = this.root;
    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.leftNode;
      } else {
        currentNode = currentNode.rightNode;
      }
    }
    return false;
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
  show() {
    if (this.root) {
      this.root.show();
    }
  }
}