function setup() {
  createCanvas(700, 500);
  bst = new BinarySearchTree();

  bst.add(50);
  bst.add(25);
  bst.add(75);
  bst.add(15);
  bst.add(35);
  bst.add(65);
  bst.add(85);
  bst.add(10);
  bst.add(20);
  bst.add(30);
  bst.add(40);
  bst.add(60);
  bst.add(70);
  bst.add(80);
  bst.add(90);

  console.log(bst.isPresent(75));

  bst.root.turnOn();
  bst.root.leftLink.turnOn();
  bst.root.leftNode.turnOn();
  bst.root.leftNode.rightLink.turnOn();
  bst.root.leftNode.rightNode.turnOn();
  bst.root.leftNode.rightNode.rightLink.turnOn();
  bst.root.leftNode.rightNode.rightNode.turnOn();
}

function draw() {
  background(100);
  bst.show();
}