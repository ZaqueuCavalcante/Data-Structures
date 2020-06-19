class Link {
  constructor(nodeA, nodeB) {
    this.nodeA = nodeA;
    this.nodeB = nodeB;
    this.color = color(0);
  }
  
  turnOn() {
    this.color = color(255, 255, 0);
  }
  turnOff() {
    this.color = color(0);
  }
  
  show() {
    stroke(this.color);
    strokeWeight(4);
    fill(this.color);
    line(this.nodeA.position.x, this.nodeA.position.y, 
         this.nodeB.position.x, this.nodeB.position.y);
  }
}