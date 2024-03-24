import Game from "./classes/game.js";
import Paddle from "./classes/paddle.js";
import Ball from "./classes/ball.js";
import Input from "./classes/input.js";

let element = document.getElementById("gameboard");
let canvasStyles = window.getComputedStyle(element);
let gamewidth = parseInt(canvasStyles.width);
let gameheight = parseInt(canvasStyles.height);

const game = new Game({ element, gamewidth, gameheight });
const paddle = new Paddle(game);
game.addComponent(paddle);
const ball = new Ball(game);
game.addComponent(ball);
const inputHandler = new Input(game);

let prevTime = 0;

function gameloop(timestamp) {
  let dTime = timestamp - prevTime;
  prevTime = timestamp;

  game.update();
  requestAnimationFrame(gameloop);
}

requestAnimationFrame(gameloop);
