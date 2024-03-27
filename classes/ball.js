export default class Ball {
  constructor(game) {
    this.game = game;
    this.position = {
      x: 100,
      y: 100,
    };
    this.speed = [0, 0];
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

  wallCollision() {
    let ballLeft = this.position.x;
    let ballTop = this.position.y;
    let ballRight = ballLeft + this.width;
    let ballBottom = ballTop + this.width;

    if (ballLeft < 0) {
      this.position.x = 1;
      this.speed[0] = -1 * this.speed[0];
    } else if (ballRight > this.game.width) {
      this.position.x = this.game.width - this.width - 1;
      this.speed[0] = -1 * this.speed[0];
    }
    if (ballTop < 0) {
      this.position.y = 1;
      this.speed[1] = -1 * this.speed[1];
    } else if (ballBottom > this.game.height) {
      this.position.y = this.game.height - this.height - 1;
      this.speed[1] = -1 * this.speed[1];
    }
  }

  applyFriction() {
    const FRICTION = 0.1;

    let magnitude = Math.sqrt(this.speed[0] ** 2 + this.speed[1] ** 2);

    if (magnitude > 0) {
      const scale = Math.max(0, magnitude - FRICTION) / magnitude;

      this.speed[0] *= scale;
      this.speed[1] *= scale;
    }
  }

  update(dTime) {
    this.speed[0] = Math.max(Math.min(this.speed[0], 10), -10);
    this.speed[1] = Math.max(Math.min(this.speed[1], 10), -10);

    this.position.x += this.speed[0];
    this.position.y += this.speed[1];
    this.applyFriction();
    this.wallCollision();

    this.draw();
  }
}
