class Player {
  constructor() {
    this.moves = 0;
  }

  recursiveSolution(n, A, C, B) {
    if (n == 1) {
      this.moveTop(A, C);
      return;
    }
    this.recursiveSolution(n-1, A, B, C);
    this.moveTop(A, C);
    this.recursiveSolution(n-1, B, C, A);
  }

  moveTop(originPeg, destinyPeg) {
    let disk = originPeg.pop();
    destinyPeg.push(disk);
  }

  moveToUp(disk) {
    while (disk.position.y > height*0.08) {
      disk.position.y += 0.1;
    }
  }
}
