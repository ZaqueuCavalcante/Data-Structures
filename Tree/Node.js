class Node {
  constructor(data) {
    this.data = data;
    this.leftNode = null;
    this.rightNode = null;
    this.leftLink = null;
    this.rightLink = null;
    this.depth = 0;

    this.position = createVector();
    this.radius = 25;
    this.color = color(220);
    this.dataSize = this.radius * 1.5 - textWidth(this.data);
  }

  turnOn() {
    this.color = color(255, 255, 0);
  }
  turnOff() {
    this.color = color(220);
  }

  linkToLeft(node) {
    this.leftNode = node;
    this.leftNode.depth = this.depth + 1;
    let x = this.position.x - 20*this.radius / (1+this.leftNode.depth)**1.7;
    let y = this.position.y + this.radius * (2+this.leftNode.depth);
    this.leftNode.setPosition(x, y);
    this.leftLink = new Link(this, this.leftNode);
  }

  linkToRight(node) {
    this.rightNode = node;
    this.rightNode.depth = this.depth + 1;
    let x = this.position.x + 20*this.radius / (1+this.rightNode.depth)**1.7;
    let y = this.position.y + this.radius * (2+this.rightNode.depth);
    this.rightNode.setPosition(x, y);
    this.rightLink = new Link(this, this.rightNode);
  }

  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  show() {
    if (this.leftLink) {
      this.leftLink.show();
      this.leftNode.show();
    }
    if (this.rightLink) {
      this.rightLink.show();
      this.rightNode.show();
    }
    stroke(0);
    strokeWeight(4);
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(this.position.x, this.position.y, this.radius);
    fill(0);
    strokeWeight(1.5);
    textSize(this.dataSize);
    textAlign(CENTER, CENTER);
    text(this.data, this.position.x, this.position.y);
  }
}