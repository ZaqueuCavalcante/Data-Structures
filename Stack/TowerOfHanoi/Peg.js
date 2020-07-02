class Peg {
  constructor(name, x) {
    this.name = name;
    this.position = createVector(x, height*0.15);
    this.height = height*0.80;
    this.color = color(30);

    this.disks = [];
  }

  push(disk) {
    if (this.disks.length) {
      let oldTop = this.disks[this.disks.length-1];
      disk.setPosition(oldTop.position.x, oldTop.position.y-35);
      this.disks.push(disk);
    }
    else {
      disk.setPosition(this.position.x, height*0.90);
      this.disks.push(disk);
    }
  }
  pop() {
    return this.disks.pop();
  }

  show() {
    stroke(0);
    fill(this.color);
    rectMode(CORNER);
    rect(this.position.x-15, this.position.y, 30, this.height, 10);
    fill(0);
    textSize(25);
    textAlign(CENTER, CENTER);
    text(this.name, this.position.x, this.position.y+this.height+15);

    this.disks.forEach(disk => {
      disk.show();
    });
  }
}