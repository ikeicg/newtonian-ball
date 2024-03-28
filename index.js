import Game from "./classes/game.js";
import Paddle from "./classes/paddle.js";
import Ball from "./classes/ball.js";
import Input from "./classes/input.js";

// grab the canvas and it's dimensions
let element = document.getElementById("gameboard");
let canvasStyles = window.getComputedStyle(element);
let gamewidth = parseInt(canvasStyles.width);
let gameheight = parseInt(canvasStyles.height);

// Create a new Game object, paddle and ball objects then add them as game components
const game = new Game({ element, gamewidth, gameheight });
const paddle = new Paddle(game);
game.addComponent("paddle", paddle);
const ball = new Ball(game);
game.addComponent("ball", ball);

// use an inputHandler to control the paddle
const inputHandler = new Input(game);

let prevTime = 0;

// The game loop that runs before frame updates
function gameloop(timestamp) {
  let dTime = timestamp - prevTime;
  prevTime = timestamp;

  game.update(dTime);
  requestAnimationFrame(gameloop);
}

requestAnimationFrame(gameloop);
