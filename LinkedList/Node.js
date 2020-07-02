class Node {
  constructor(data) {
    this.data = data;
    this.position = createVector();
    this.leftSide = createVector();
    this.rightSide = createVector();
    this.width = textWidth(data)*3;
    this.height = 50;
    this.color = color(255, 255, 0);
    this.nextNode = null;
    this.link = null;
  }

  linkTo(newNextNode) {
    this.nextNode = newNextNode;
    this.link = new Link(this, this.nextNode);
  }
  
  setData(data) {
    this.data = str(data);
    this.width = textWidth(data)*3;
  }

  setPosition(x, y) {
    this.position.set(x, y);
    this.leftSide.set(x - this.width/2, y);
    this.rightSide.set(x + this.width/2, y);
  }

  show() {
    stroke(0);
    fill(this.color);
    rectMode(CENTER);
    rect(this.position.x, this.position.y, 
         this.width, this.height, 5);
    fill(0);
    textSize(this.height/1.5);
    textAlign(CENTER, CENTER);
    text(this.data, this.position.x, this.position.y);
    if (this.link != undefined) {
      this.link.show();   
    }
  }
}