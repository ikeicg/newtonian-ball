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

  ballCollision() {
    let paddle = this;
    let paddleXMid = paddle.position.x + paddle.width / 2;
    let paddleYMid = paddle.position.y + paddle.height / 2;

    let ball = this.game.components.ball;
    let ballXMid = ball.position.x + ball.width / 2;
    let ballYMid = ball.position.y + ball.height / 2;

    // Calculate the distance between the centers of the paddle and the ball
    let dx = ballXMid - paddleXMid;
    let dy = ballYMid - paddleYMid;
    let distance = Math.sqrt(dx * dx + dy * dy);

    // Check if the distance is less than the sum of the radii (half widths) of the paddle and the ball
    if (distance < paddle.width / 2 + ball.width / 2) {
      // Determine the angle of collision
      let angle = Math.atan2(dy, dx);

      // Calculate the total magnitude of velocities of the ball and the paddle
      let totalMagnitudeBall = Math.sqrt(
        ball.speed[0] * ball.speed[0] + ball.speed[1] * ball.speed[1]
      );
      let totalMagnitudePaddle = Math.sqrt(
        paddle.speed[0] * paddle.speed[0] + paddle.speed[1] * paddle.speed[1]
      );

      // Calculate the average magnitude of velocities
      let averageMagnitude = (totalMagnitudeBall + totalMagnitudePaddle) / 2;

      // Calculate the new velocities after collision based on average magnitude
      ball.speed[0] = averageMagnitude * Math.cos(angle);
      ball.speed[1] = averageMagnitude * Math.sin(angle);

      // Separate the ball and the paddle to prevent overlap
      let overlap = paddle.width / 2 + ball.width / 2 - distance;
      let separationX = overlap * Math.cos(angle);
      let separationY = overlap * Math.sin(angle);

      ball.position.x += separationX;
      ball.position.y += separationY;
    }
  }

  wallContact() {
    let paddleTop = this.position.y;
    let paddleBottom = this.position.y + this.height;
    let paddleLeft = this.position.x;
    let paddleRight = this.position.x + this.width;

    if (paddleTop <= 0) {
      this.position.y = 1;
    } else if (paddleBottom > this.game.height) {
      this.position.y = this.game.height - this.height - 1;
    }

    if (paddleLeft <= 0) {
      this.position.x = 1;
    } else if (paddleRight >= this.game.width) {
      this.position.x = this.game.width - this.width - 1;
    }
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
    this.ballCollision();
    this.wallContact();
    this.draw();
  }
}
