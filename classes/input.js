export default class Input {
  constructor(game) {
    game.canvas.addEventListener("mousemove", (e) => {
      let cRect = game.canvas.getBoundingClientRect();

      game.components.paddle.position.x =
        e.clientX - cRect.left - game.components.paddle.width / 2;
      game.components.paddle.position.y =
        e.clientY - cRect.top - game.components.paddle.height / 2;
    });
  }
}
