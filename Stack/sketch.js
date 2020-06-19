let input, button, greeting;

function setup() {
  createCanvas(500, 450);
  background(100);

  input = createInput();
  input.size(50);
  input.position(350, 65);

  button = createButton('push');
  button.position(input.x + input.width, input.y);
  button.mousePressed(greet);

  greeting = createElement('h2', 'PILHA');
  greeting.position(20, 5);
  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}
