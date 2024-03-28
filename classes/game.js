export default class Game {
  // set game properties here
  constructor(canvas) {
    this.canvas = canvas.element;
    this.canvas.width = canvas.gamewidth;
    this.canvas.height = canvas.gameheight;
    this.width = canvas.gamewidth;
    this.height = canvas.gameheight;
    this.gameSpeed = 10;
    this.ctx = this.canvas.getContext("2d");
    this.components = {};
    gameResize(this);
  }

  addComponent(key, comp) {
    this.components[key] = comp;
  }

  // clear the canvas
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  resize(dimensions) {
    const width = parseInt(dimensions.width);
    const height = parseInt(dimensions.height);

    this.canvas.width = width;
    this.canvas.height = height;
    this.width = width;
    this.height = height;

    for (let component of Object.values(this.components)) {
      if (
        component.hasOwnProperty("resize") &&
        typeof component.resize === "function"
      ) {
        component.resize();
      }
    }
  }

  // clear the canvas and update all components
  update(dTime) {
    this.clear();
    Object.keys(this.components).forEach((x) => {
      this.components[x].update(dTime);
    });
  }
}

function gameResize(game) {
  window.addEventListener("resize", (e) => {
    let canvasRect = window.getComputedStyle(game.canvas);
    game.resize(canvasRect);
  });
}
