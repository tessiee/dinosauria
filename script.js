// OBJECT CLASSES

class Cloud {
  constructor() {
    this.x = 200;
    this.y = 80;
    this.dx = 0;
    this.dy = 0;
    this.speed = 1;
    this.size = 5;

    this.draw = function (canvasContext) {
      drawRoundObject(
        canvasContext,
        "#ffffff",
        this.x,
        this.y,
        this.size,
        0,
        Math.PI * 2
      );
      drawRoundObject(
        canvasContext,
        "#ffffff",
        this.x + 9,
        this.y - 4.5,
        this.size * 1.8,
        0,
        Math.PI * 2
      );
      drawRoundObject(
        canvasContext,
        "#ffffff",
        this.x + 18,
        this.y,
        this.size,
        0,
        Math.PI * 2
      );
    };

    this.move = function () {
      this.dx = -2;
    };
  }
}

class Bird {
  constructor() {
    this.x = 150;
    this.y = 80;
    this.dx = 0;
    this.dy = 0;
    this.speed = 1;
    this.size = 3;

    this.draw = function (canvasContext) {
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x,
        this.y,
        this.size * 1.4,
        4,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x + 4,
        this.y - 4,
        this.size * 0.6,
        4,
        2.1,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x - 5,
        this.y - 4,
        this.size * 2,
        2,
        0.7,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x + 6,
        this.y + 3,
        this.size * 2,
        2,
        3.4,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x - 5,
        this.y + 3,
        this.size * 0.5,
        2,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x - 7,
        this.y + 5,
        this.size * 0.08,
        2,
        1,
        0,
        Math.PI * 2,
        true
      );
    };

    this.move = function () {
      this.dx = -2;
    };
  }
}

class Dinosaur {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.dx = 0;
    this.dy = 0;
    this.speed = 1;
    this.size = 5;

    this.draw = function (canvasContext) {
      drawEllipseObject(
        canvasContext,
        "#05db05",
        this.x - 26,
        this.y + 27,
        this.size * 0.7,
        9,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#05db05",
        this.x - 19,
        this.y + 27,
        this.size * 0.7,
        9,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#05db05",
        this.x - 9,
        this.y + 27,
        this.size * 0.7,
        9,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#05db05",
        this.x - 2,
        this.y + 27,
        this.size * 0.7,
        9,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#05db05",
        this.x - 15,
        this.y + 22,
        this.size * 3,
        7,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#05db05",
        this.x - 3,
        this.y + 14,
        this.size * 1,
        15,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#05db05",
        this.x - 4,
        this.y - 2.5,
        this.size * 0.4,
        1,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#05db05",
        this.x + 2,
        this.y - 2.5,
        this.size * 0.4,
        1,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#05db05",
        this.x + 2,
        this.y + 3,
        this.size * 2,
        5,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x,
        this.y + 1,
        this.size * 0.4,
        1.5,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#ffffff",
        this.x + 0.5,
        this.y,
        this.size * 0.2,
        1,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x + 7.5,
        this.y + 2.5,
        this.size * 0.1,
        0.4,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x + 10.5,
        this.y + 2.5,
        this.size * 0.1,
        0.4,
        0,
        0,
        Math.PI * 2,
        true
      );
    };

    this.move = function () {
      this.dx = -2;
    };
  }
}

// ANIMATION OBJECTS

const animationBox = document.getElementById("animation-box");
const animationCanvas = document.getElementById("animation-canvas");
const ctxAnimation = animationCanvas.getContext("2d");
let requestIdAnimation;
let cloudsArray1 = [];
let dinosaursArray1 = [];
let birdsArray1 = [];

//ANIMATION STARTER FUNCTIONS

function fillAnimationArrays() {
  fillCloudsArray(ctxAnimation, cloudsArray1);
  fillBirdsArray(ctxAnimation, birdsArray1);
  fillDinosaursArray(ctxAnimation, dinosaursArray1);
}

function drawAnimation() {
  emptyCanvas(ctxAnimation, animationCanvas);
  fillAnimationArrays();
  drawArrayOnCanvas(ctxAnimation, cloudsArray1);
  drawArrayOnCanvas(ctxAnimation, birdsArray1);
  drawArrayOnCanvas(ctxAnimation, dinosaursArray1);
}

function animationAction() {
  drawAnimation();
  moveCloudsArray(animationCanvas);
  moveBirdsArray(animationCanvas);
  moveDinosaursArray(animationCanvas);
  requestIdAnimation = requestAnimationFrame(animationAction);
}
animationAction();

// GAME OBJECTS

const gameBox = document.getElementById("game-box");
const gameCanvas = document.getElementById("game-canvas");
const ctxGame = gameCanvas.getContext("2d");
let requestIdGame;
let cloudsArray2 = [];
let dinosaursArray2 = [];
let birdsArray2 = [];

//GAME STARTER FUNCTIONS

function fillGameArrays() {
  fillCloudsArray(ctxGame, cloudsArray2);
  fillBirdsArray(ctxGame, birdsArray2);
  fillDinosaursArray(ctxGame, dinosaursArray2);
}

function drawGame() {
  emptyCanvas(ctxGame, gameCanvas);
  fillGameArrays();
  drawArrayOnCanvas(ctxGame, cloudsArray2);
  drawArrayOnCanvas(ctxGame, birdsArray2);
  drawArrayOnCanvas(ctxGame, dinosaursArray2);
}

function gameAction() {
  drawGame();
  moveCloudsArray(gameCanvas);
  moveBirdsArray(gameCanvas);
  moveDinosaursArray(gameCanvas);
  requestIdGame = requestAnimationFrame(gameAction);
}
gameAction();

// DRAWING FUNCTIONS

function emptyCanvas(canvasContext, canvasName) {
  canvasContext.clearRect(0, 0, canvasName.width, canvasName.height);
}

function drawArrayOnCanvas(canvasContext, arrayType) {
  for (i = 0; i < arrayType.length; i++) {
    arrayType[i].draw(canvasContext);
  }
}

function drawRoundObject(
  canvasContext,
  objectColour,
  objectX,
  objectY,
  radius,
  startAngle,
  endAngle,
  counterClockwise
) {
  canvasContext.beginPath();
  canvasContext.arc(
    objectX,
    objectY,
    radius,
    startAngle,
    endAngle,
    counterClockwise
  );
  canvasContext.fillStyle = objectColour;
  canvasContext.fill();
  canvasContext.closePath();
}

function drawEllipseObject(
  canvasContext,
  objectColour,
  objectX,
  objectY,
  radiusX,
  radiusY,
  rotation,
  startAngle,
  endAngle,
  counterClockwise
) {
  canvasContext.beginPath();
  canvasContext.ellipse(
    objectX,
    objectY,
    radiusX,
    radiusY,
    rotation,
    startAngle,
    endAngle,
    counterClockwise
  );
  canvasContext.fillStyle = objectColour;
  canvasContext.fill();
  canvasContext.closePath();
}

function drawRectObject(
  canvasContext,
  objectColour,
  objectX,
  objectY,
  objectW,
  objectH
) {
  canvasContext.beginPath();
  canvasContext.rect(objectX, objectY, objectW, objectH);
  canvasContext.fillStyle = objectColour;
  canvasContext.fill();
  canvasContext.closePath();
}

// OBJECT ARRAY FUNCTIONS

function fillCloudsArray(canvasContext, cloudsArray) {
  for (var i = 0; i < 10; i++) {
    cloudsArray[i] = new Cloud(canvasContext);
  }
}

function moveCloudsArray(canvasName) {}

function fillBirdsArray(canvasContext, birdsArray) {
  for (var i = 0; i < 10; i++) {
    birdsArray[i] = new Bird(canvasContext);
  }
}

function moveBirdsArray(canvasName) {}

function fillDinosaursArray(canvasContext, dinosaursArray) {
  for (var i = 0; i < 10; i++) {
    dinosaursArray[i] = new Dinosaur(canvasContext);
  }
}

function moveDinosaursArray(canvasName) {}
