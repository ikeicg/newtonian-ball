export default class Game {
  constructor(canvas) {
    this.canvas = canvas.element;
    this.canvas.width = canvas.gamewidth;
    this.canvas.height = canvas.gameheight;
    this.width = canvas.gamewidth;
    this.height = canvas.gameheight;
    this.ctx = this.canvas.getContext("2d");
    this.components = {};
  }

  addComponent(key, comp) {
    this.components[key] = comp;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  update(dTime) {
    this.clear();
    Object.keys(this.components).forEach((x) => {
      this.components[x].update(dTime);
    });
  }
}
