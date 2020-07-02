class Stack {

  constructor() {
    this.elements = [];
    this.top = -1;
    this.maximumCapacity = int(height / 50) - 1;
  }

  push(data) {
    if (this.isFull()) {
      return console.log("push() -> stackoverflow.com")
    } 
    else {
      this.top ++;
      let element = new Element(data);
      this.elements[this.top] = element;
      this.updatePositions();
    }
  }
  pop() {
    if (this.isEmpty()) {
      return console.log("pop() -> Stack is empty!");
    } 
    else {
      this.top --;
      return this.elements.pop().data;
    }
  }

  size() {
    return this.elements.length;
  }

  peek() {
    if (this.isEmpty()) {
      return console.log("peek() -> Stack is empty!");
    } 
    else {
      return this.elements[this.top].data;
    }
  }

  isEmpty() {
    return this.top == -1;
  }
  isFull() {
    return this.top == this.maximumCapacity - 1;
  }

  updatePositions() {
    for (let c = 0; c <= this.top; c++) {
      let currentElement = this.elements[c];
      let x = width / 2;
      let y = height - ((c + 1) * (currentElement.height + 3));
      currentElement.setPosition(x, y);
    }
  }

  show() {
    this.elements.forEach(element => {
      element.show();
    });
  }

}