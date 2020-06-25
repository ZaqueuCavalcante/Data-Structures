class SimpleLink {
	constructor(nodeA, nodeB, w=null) {
		nodeA.addDegree();
		nodeB.addDegree();
		this.nodeA = nodeA;
		this.nodeB = nodeB;
		this.weight = w;
		this.color = color(0);
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
	turnOn() {
		this.color = color(255, 255, 0);
	}
	turnOff() {
		this.color = color(0);
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
	setWeight(w) {
		this.weight = w;
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
	show() {
		let xA = this.nodeA.position.x;
		let yA = this.nodeA.position.y;
		let xB = this.nodeB.position.x;
		let yB = this.nodeB.position.y;
		stroke(this.color);
		strokeWeight(4);
		fill(this.color);
		line(xA, yA, xB, yB);
		if (this.weight) {
			fill(255, 255, 0);
			stroke(0);
			textSize(30);
			textAlign(CENTER, CENTER);
			text(this.weight, (xA + xB)/2, (yA + yB)/2);
		}
	}
}