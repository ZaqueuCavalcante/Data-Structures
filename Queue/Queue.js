class Queue {
  constructor(limit = 5) {
    this.elements = [];
    this.head = 0;
    this.tail = -1;
    this.maximumCapacity = limit;
  }

  enqueue(data) {
    if (this.isFull()) {
      return console.log("enqueue() -> Queue is full!")
    } else {
      this.tail ++;
      let element = new Element(data);
      this.elements[this.tail] = element;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return console.log("dequeue() -> Queue is empty!");
    } else {
      this.tail --;
      return this.elements.shift().data;
    }
  }

  isEmpty() {
    return this.tail == -1;
  }
  isFull() {
    return this.tail == this.maximumCapacity - 1;
  }
  getSize() {
    return this.elements.length;
  }

  getHead() {
    return this.elements[this.head].data;
  }
  getTail() {
    return this.elements[this.tail].data;
  }

  updatePositions() {
    let origin = 0;
    for (let c = 0; c < this.getSize(); c++) {
      let currentElement = this.elements[c];
      let x = origin + 10 + currentElement.width/2;
      origin = x + currentElement.width/2;
      let y = height/2;
      currentElement.setPosition(x, y);
    }
  }
  
  show() {
    this.updatePositions();
    for (let element of this.elements) {
      element.show();
    }
  }
}
