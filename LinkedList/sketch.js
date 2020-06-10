function setup() {
  createCanvas(800, 300);
  linkedList = new LinkedList();
  
  linkedList.append("Head");
  linkedList.append(42);
  linkedList.append(65);
  
  linkedList.prepend("New Head");
  linkedList.prepend("New² Head");
  
  let contain42 = linkedList.contains(42);
  console.log(contain42);
  // let oldHead = linkedList.popHead();
  // console.log(oldHead);
  
//   let oldTail = linkedList.popTail();
//   console.log(oldTail);
  
//   linkedList.popTail();
//   linkedList.popTail();
//   linkedList.popTail();

}

function draw() {
  background(220);
  //linkedList.head.setPosition(mouseX, mouseY);
  linkedList.show();
}