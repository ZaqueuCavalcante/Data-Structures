function setup() {
  createCanvas(600, 420);
  stack = new Stack();
  console.log("Está vazia ? ", stack.isEmpty());
  
  stack.push("Base da Pilha");
  stack.push("Palito");
  stack.push("Panasonic");
  stack.push("Duracell");
  stack.push(" AAA ");
  stack.push("Alcalina");
  
  console.log("Está cheia ? ", stack.isFull());
  stack.push("Topo da Pilha");
  console.log("Está cheia ? ",stack.isFull());
  
  console.log("Pop -> ", stack.pop());
  console.log("Size -> ", stack.size());
  console.log("Peek -> ", stack.peek());
  
  //stack.push("Novo Topo da Pilha");
  //console.log(stack.pop());
  //stack.push("Novo Novo Topo da Pilha");
}

function draw() {
  background(220);
  stack.show();
}
