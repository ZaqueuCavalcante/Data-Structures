class Element {
  constructor(data) {
    this.data = str(data);
    this.position = createVector();
    this.width = textWidth(data)*3;
    this.height = 50;
    this.colour = color(255, 255, 0);
  }
  
  setData(data) {
    this.data = data;
  }
  
  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  show() {
    stroke(0);
    fill(this.colour);
    rectMode(CENTER);
    rect(this.position.x, this.position.y, this.width, this.height, 10);
    fill(0);
    textSize(this.height/1.5);
    textAlign(CENTER, CENTER);
    text(this.data, this.position.x, this.position.y);
  }
}
