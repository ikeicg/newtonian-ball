export default class Paddle {
  constructor(game) {
    this.game = game;
    this.position = {
      x: 200,
      y: 300,
    };
    this.width = Math.floor(this.game.width / 10);
    this.height = Math.floor(this.game.width / 10);
    this.img = new Image();
    this.img.src = "../assets/paddle.png";
  }

  draw() {
    this.game.ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    // this.position.x += 3;
    // this.position.y += 4;
    this.draw();
  }
}
