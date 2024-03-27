export default class Input {
  constructor(game) {
    game.canvas.addEventListener("mousemove", (e) => {
      let canvasRectangle = game.canvas.getBoundingClientRect();
      let touchX = e.clientX;
      let touchY = e.clientY;
      let paddle = game.components.paddle;

      paddle.position.x = touchX - canvasRectangle.left - paddle.width / 2;
      paddle.position.y = touchY - canvasRectangle.top - paddle.height / 2;
    });
  }
}
