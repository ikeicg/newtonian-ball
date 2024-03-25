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

  paddleCollision() {
    let paddleLeft = this.game.components.paddle.position.x;
    let paddleTop = this.game.components.paddle.position.y;
    let paddleXMid = paddleLeft + this.game.components.paddle.width / 2;
    let paddleYMid = paddleTop + this.game.components.paddle.height / 2;
    let paddleSpeed = this.game.components.paddle.speed;

    let ballLeft = this.position.x;
    let ballTop = this.position.y;
    let ballXMid = ballLeft + this.width / 2;
    let ballYMid = ballTop + this.height / 2;

    let distanceBtwRadii = Math.sqrt(
      Math.pow(paddleXMid - ballXMid, 2) + Math.pow(paddleYMid - ballYMid, 2)
    );
    let radiiSum = (this.game.components.paddle.width + this.width) / 2;

    // Detect collision
    if (distanceBtwRadii - radiiSum < 1) {
      this.speed[0] += paddleSpeed[0];
      this.speed[1] += paddleSpeed[1];
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
    this.position.x += this.speed[0];
    this.position.y += this.speed[1];
    this.applyFriction();
    this.paddleCollision();
    this.draw();
  }
}
