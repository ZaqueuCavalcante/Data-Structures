class Link {
  constructor(nodeA, nodeB) {
    this.nodeA = nodeA;
    this.nodeB = nodeB;
    this.color = color(0);
  }
  
  show() {
    push();
    stroke(this.color);
    strokeWeight(3);
    fill(this.color);
    line(this.nodeA.rightSide.x, this.nodeA.rightSide.y, 
         this.nodeB.leftSide.x, this.nodeB.leftSide.y);
    let direction = createVector(this.nodeB.leftSide.x - this.nodeA.rightSide.x,
                                 this.nodeB.leftSide.y - this.nodeA.rightSide.y);
    let tipSize = 10;
    translate(this.nodeB.leftSide.x, this.nodeB.leftSide.y);
    rotate(direction.heading());
    triangle(-tipSize, tipSize/2, -tipSize, -tipSize/2, 0, 0);
    pop();
  }
}