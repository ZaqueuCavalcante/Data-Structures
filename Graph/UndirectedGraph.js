class UndirectedGraph {
	constructor() {
		this.nodes = [];
		this.links = [];
	}

	addNode(data) {
		this.nodes.push(new Node(data));
		let index = this.nodes.length - 1;
		this.nodes[index].setNumber(index);
	}
	connectNodes(nodeAIndex, nodeBIndex, weight=null) {
		let nodeA = this.nodes[nodeAIndex];
		let nodeB = this.nodes[nodeBIndex];
		this.links.push(new SimpleLink(nodeA, nodeB, weight));
	}

	show() {
		for (let link of this.links) {
			link.show();
		}
		for (let node of this.nodes) {
			node.show();
		}
	}
}