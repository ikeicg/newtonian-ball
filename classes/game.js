export default class Game {
  constructor(canvas) {
    this.canvas = canvas.element;
    this.canvas.width = canvas.gamewidth;
    this.canvas.height = canvas.gameheight;
    this.width = canvas.gamewidth;
    this.height = canvas.gameheight;
    this.ctx = this.canvas.getContext("2d");
    this.components = [];
  }

  addComponent(comp) {
    this.components.push(comp);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  update() {
    this.clear();
    this.components.forEach((x) => {
      x.update();
    });
  }
}
