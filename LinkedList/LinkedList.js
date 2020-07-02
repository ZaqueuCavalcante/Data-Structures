class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(data) {
    if (this.head == null) {
      this.head = new Node(data);
      return;
    }
    let currentNode = this.head;
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    let newNextNode = new Node(data);
    currentNode.linkTo(newNextNode);
  }
  
  prepend(data) {
    let newHead = new Node(data);
    newHead.linkTo(this.head);
    this.head = newHead;
  }
  
  popHead() {
    if (this.head == null) {
      return console.log("popHead() -> LinkedList is empty!");
    }
    let oldHead = this.head;
    this.head = this.head.nextNode;
    if (this.head != null) {
    }
    return oldHead;
  }
  
  popTail() {
    if (this.head == null) {
      return console.log("popTail() -> LinkedList is empty!");
    }
    let preTail = this.head;
    let tail = preTail.nextNode;
    if (preTail.nextNode == null) {
      this.popHead();
      return;
    } else {
      while (tail.nextNode != null) {
        preTail = preTail.nextNode;
        tail = preTail.nextNode;
      }
      preTail.nextNode = null;
      preTail.link = null;
      return tail;
    }
  }
  
  contains(data) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.data == str(data)) {
         return true;   
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  
  updatePositions() {
    let currentNode = this.head;
    let origin = -25;
    let distance = 35;
    while (currentNode != null) {
      let x = origin + distance + currentNode.width/2;
      origin = x + currentNode.width/2;
      let y = height/2;
      currentNode.setPosition(x, y);
      currentNode = currentNode.nextNode;
    }
  }
  
  show() {
    this.updatePositions();
    let currentNode = this.head;
    while (currentNode != null) {
      currentNode.show();
      currentNode = currentNode.nextNode;
    }
  }
}
