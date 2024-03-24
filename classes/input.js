export default class Input {
  constructor(game) {
    game.canvas.addEventListener("mousemove", (e) => {
      let cRect = game.canvas.getBoundingClientRect();
      console.log(e.clientX - cRect.left, e.clientY - cRect.top);

      game.components[0].position.x =
        e.clientX - cRect.left - game.components[0].width / 2;
      game.components[0].position.y =
        e.clientY - cRect.top - game.components[0].height / 2;
    });
  }
}
