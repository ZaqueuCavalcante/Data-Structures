class Game {
  constructor() {

  }

  setInitialDisks(amount, firtsPeg) {
    for (let c = 0; c < amount; c++) {
      let disk = new Disk(width*0.32 - 30*c);
      disk.setPosition(firtsPeg.position.x, height*0.90 - 35*c);
      firtsPeg.disks.push(disk);
    }
  }

  
}