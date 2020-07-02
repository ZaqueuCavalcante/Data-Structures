function setup() {
  createCanvas(900, 400);
  queue = new Queue(6);
  console.log("Fila vazia ?", queue.isEmpty());
  
  queue.enqueue("First");
  queue.enqueue(" 2º ");
  queue.enqueue("Terceiro");
  queue.enqueue("Four");
  queue.enqueue("Larst");

  console.log("Size =", queue.getSize());

  queue.enqueue("New last");
  
  // queue.dequeue();
  // queue.dequeue();
  // queue.dequeue();
  // queue.dequeue();
  // queue.dequeue();

  console.log("Head =", queue.getHead());
  console.log("Tail =", queue.getTail());
}

function draw() {
  background(220);
  queue.show();
}
