function setup() {
  createCanvas(900, 400);
  queue = new Queue(5);
  console.log(queue.isEmpty());
  
  queue.enqueue("First");
  queue.enqueue("2º");
  queue.enqueue("Terceiro");
  queue.enqueue("Four");
  queue.enqueue("Larst");
  console.log("Size =", queue.getSize());
  queue.enqueue("Fila cheia?");
  
  // queue.dequeue();
  // queue.dequeue();
  // queue.dequeue();
  // queue.dequeue();
  // queue.dequeue();

  console.log("Head =", queue.head);
  console.log("Tail =", queue.tail);
}

function draw() {
  background(220);
  queue.show();
}