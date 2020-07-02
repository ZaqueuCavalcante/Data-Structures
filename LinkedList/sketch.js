function setup() {
  createCanvas(1200, 300);
  linkedList = new LinkedList();
  
  linkedList.append("Head");
  linkedList.append(42);
  linkedList.append(65);
  
  linkedList.prepend("New Head");
  linkedList.prepend("New² Head");

  linkedList.append("Tail");

  console.log("Contain 42 ?", linkedList.contains(42));
  // let oldHead = linkedList.popHead();
  // console.log(oldHead);
  
  // let oldTail = linkedList.popTail();
  // console.log(oldTail);
}

function draw() {
  background(220);
  linkedList.show();
}
