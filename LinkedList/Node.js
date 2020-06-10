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
  }

  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
    this.leftSide.x = x - this.width/2;
    this.leftSide.y = y;
    this.rightSide.x = x + this.width/2;
    this.rightSide.y = y;
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