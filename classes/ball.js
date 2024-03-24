export default class Ball {
  constructor(game) {
    this.game = game;
    this.position = {
      x: 50,
      y: 50,
    };
    this.width = Math.floor(this.game.width / 15);
    this.height = Math.floor(this.game.width / 15);
    this.img = new Image();
    this.img.src = "../assets/ball.png";
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
    // this.position.x += 5;
    // this.position.y += 2;
    this.draw();
  }
}
