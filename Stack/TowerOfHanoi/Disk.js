class Disk {
  constructor(diameter) {
    this.position = createVector(width/2, height*0.08);
    this.diameter = diameter;
    this.height = 30;
    this.color = color(random(255), random(255), random(255));
  }

  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  show() {
    stroke(0);
    fill(this.color);
    rectMode(CENTER);
    rect(this.position.x, this.position.y, this.diameter, this.height, 10);
    fill(0);
  }
}
