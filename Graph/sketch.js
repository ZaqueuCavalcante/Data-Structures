function setup() {
    createCanvas(700, 500);

    ug = new UndirectedGraph();

    ug.addNode("A");
    ug.addNode("B");
    ug.addNode("C");
    ug.addNode("D");
    ug.addNode("E");

    ug.connectNodes(0, 1, 12);
    ug.connectNodes(0, 2, 11);
    ug.connectNodes(0, 3, 5);
    ug.connectNodes(1, 2, 22);
    ug.connectNodes(1, 3, 55);
    ug.connectNodes(1, 4, 69);
    ug.connectNodes(2, 3, 10);
    ug.connectNodes(2, 4, 9);
    ug.connectNodes(3, 4, 1);
}
  
function draw() {
    background(100);
    ug.show();
    if (mouseIsPressed) {
        for (let node of ug.nodes)
        if (node.mouseAbove()) {
            node.setPosition(mouseX, mouseY);
        }
    }
}
