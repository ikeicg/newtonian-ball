export default class Input {
  constructor(game) {
    const canvas = game.canvas;

    const handleMouseMove = (e) => {
      const canvasRectangle = canvas.getBoundingClientRect();
      let touchX, touchY;

      if (e.type === "touchmove") {
        touchX = e.touches[0].clientX;
        touchY = e.touches[0].clientY;
      } else {
        touchX = e.clientX;
        touchY = e.clientY;
      }

      const paddle = game.components.paddle;

      paddle.position.x = touchX - canvasRectangle.left - paddle.width / 2;
      paddle.position.y = touchY - canvasRectangle.top - paddle.height / 2;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleMouseMove);
  }
}
