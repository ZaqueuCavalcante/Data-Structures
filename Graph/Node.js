class Node {
	constructor(data) {
		this.number = null;
		this.data = data;
		this.degree = 0;
		this.inDegree = 0;
		this.outDegree = 0;

		this.position = createVector(random(width), random(height));
		this.radius = 25;
		this.color = color(220);
		this.dataSize = this.radius * 1.5 - textWidth(this.data);
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
	turnOn() {
		this.color = color(255, 255, 0);
	}
	turnOff() {
		this.color = color(220);
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
	setNumber(number) {
		this.number = number;
	}
	addDegree() {
		this.degree ++;
	}
	removeDegree() {
		this.degree --;
	}
	getDegree() {
		return this.degree;
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
	setPosition(x, y) {
		this.position.x = x;
		this.position.y = y;
	}
	mouseAbove() {
		let radialDistance = dist(mouseX, mouseY, this.position.x, this.position.y);
		return (radialDistance < this.radius);
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
	show() {
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
		if (this.number !== null) {
			textSize(15);
			text(this.number, this.position.x, this.position.y - 1.4*this.radius);
		}
	}
}
