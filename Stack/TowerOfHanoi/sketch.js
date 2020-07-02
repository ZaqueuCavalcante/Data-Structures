function setup() {
  createCanvas(1400, 650);
  game = new Game();
  player = new Player();

  A = new Peg("A", width*0.17);
  B = new Peg("B", width*0.50);
  C = new Peg("C", width*0.83);

  game.setInitialDisks(14, A);
  player.recursiveSolution(14, A, B, C);
}

function draw() {
  frameRate();
  background(220);
  A.show();
  B.show();
  C.show();
}