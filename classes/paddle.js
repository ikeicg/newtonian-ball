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
    this.displacedTime = 0;
    this.displacedDist = {
      x: 0,
      y: 0,
    };
    this.prevPos = {
      x: this.position.x,
      y: this.position.y,
    };
    this.speed = [0, 0];
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

  getPaddleSpeed(dTime) {
    this.speed = [
      this.position.x - this.prevPos.x,
      this.position.y - this.prevPos.y,
    ];

    this.prevPos.x = this.position.x;
    this.prevPos.y = this.position.y;
  }

  update(dTime) {
    this.getPaddleSpeed(dTime);
    this.draw();
  }
}
