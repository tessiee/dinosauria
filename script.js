// OBJECT CLASSES

class Cloud {
  constructor(canvasName) {
    this.x = canvasName.width + (Math.random() * 300 + 20);
    this.y = Math.random() * 60 + 20;
    this.dx = -Math.random() * 1.6 - 1.0;
    this.dy = 0;
    this.speed = Math.random() * 0.3 + 0.2;
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

    this.reset = function (canvasName) {
      this.x = canvasName.width + (Math.random() * 100 + 20);
      this.y = Math.random() * 60 + 20;
      this.speed = Math.random() * 0.3 + 0.2;
    };
  }
}

class Bird {
  constructor(canvasName) {
    this.x = canvasName.width + (Math.random() * 300 + 20);
    this.y = Math.random() * 40 + 20;
    this.dx = -1;
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

    this.reset = function (canvasName) {
      this.x = canvasName.width + (Math.random() * 100 + 20);
      this.y = Math.random() * 40 + 20;
    };
  }
}

class Dinosaur {
  constructor() {
    this.x = 100;
    this.y = dinoY;
    this.dx = 0;
    this.dy = 0;
    this.speed = 1;
    this.size = 5;

    this.draw = function (canvasContext) {
      drawEllipseObject(
        canvasContext,
        "#00ad37",
        this.x - 32,
        this.y + 27,
        this.size * 0.5,
        9,
        0.5,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x - 31,
        this.y + 25,
        this.size * 0.4,
        9,
        0.55,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00b439",
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
        "#00ad37",
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
        "#00b439",
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
        "#00ad37",
        this.x - 2,
        this.y + 27,
        this.size * 0.7,
        9,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawRectObject(
        canvasContext,
        "#00ad37",
        this.x - 7.5,
        this.y + 25,
        this.size * 1.8,
        -25 - necklength
      );
      drawEllipseObject(
        canvasContext,
        "#00ad37",
        this.x - 15,
        this.y + 22,
        this.size * 3,
        9,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x - 14.5,
        this.y + 22.8,
        this.size * 3,
        9,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawRectObject(
        canvasContext,
        "#00b439",
        this.x - 5.5,
        this.y + 25,
        this.size * 1.2,
        -25 - necklength
      );
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x - 5,
        this.y - 4 - necklength,
        this.size * 0.4,
        2,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00ad37",
        this.x + 2,
        this.y - 4 - necklength,
        this.size * 0.4,
        2,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x + 2,
        this.y + 1 - necklength,
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
        this.y - necklength,
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
        this.x - 0.5,
        this.y - 1 - necklength,
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
        this.x + 8.5,
        this.y + 1.5 - necklength,
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
        this.y + 1.5 - necklength,
        this.size * 0.1,
        0.4,
        0,
        0,
        Math.PI * 2,
        true
      );
    };
  }
}

class Tree {
  constructor(canvasName) {
    this.x = canvasName.width + (Math.random() * 300 + 20);
    this.y = Math.random() * -40 + 140;
    this.dx = -0.5;
    this.dy = 0;
    this.speed = 1;
    this.size = (Math.random() - 4) * 1;

    this.draw = function (canvasContext) {
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 3,
        this.y - 17,
        3,
        4,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x + 1,
        this.y - 9,
        3,
        4,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 5,
        this.y - 7,
        3,
        4,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawRectObject(
        canvasContext,
        "#894c00",
        this.x,
        this.y,
        this.size,
        this.size * 4
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x,
        this.y - 15,
        3,
        4,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 2,
        this.y - 12,
        3,
        3,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 6,
        this.y - 13,
        3,
        3,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x,
        this.y - 7,
        3,
        3,
        0,
        0,
        Math.PI * 2,
        true
      );
    };

    this.move = function (direction) {
      this.speed = 1 * direction;
    };

    this.still = function () {
      this.speed = 0;
    };

    this.reset = function (canvasName) {
      this.x = canvasName.width + (Math.random() * 100 + 20);
      this.y = Math.random() * -40 + 140;
    };
  }
}

class SmallRock {
  constructor(canvasName) {
    this.x = 150;
    this.y = canvasName.height - 5;
    this.dx = 0;
    this.dy = 0;
    this.speed = 0;
    this.size = 1;

    this.draw = function (canvasContext) {
      drawRectObject(
        canvasContext,
        "#b16100",
        this.x,
        canvasName.height - 10,
        40,
        10
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x + 20,
        canvasName.height - 10,
        20,
        1,
        0,
        0,
        Math.PI * 2,
        true
      );
    };

    this.reset = function () {
      this.x = 50;
      this.y = canvasName.height - 5;
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
let maxClouds = 10;
let maxBirds = 3;

//ANIMATION STARTER FUNCTIONS

function fillAnimationArrays() {
  fillCloudsArray(animationCanvas, cloudsArray1);
  fillBirdsArray(animationCanvas, birdsArray1);
}
fillAnimationArrays();

function drawAnimation() {
  emptyCanvas(ctxAnimation, animationCanvas);
  drawArrayOnCanvas(ctxAnimation, cloudsArray1);
  drawArrayOnCanvas(ctxAnimation, birdsArray1);
}

function animationAction() {
  drawAnimation();
  moveCloudsArray(animationCanvas, cloudsArray1);
  moveBirdsArray(animationCanvas, birdsArray1);
  requestIdAnimation = requestAnimationFrame(animationAction);
}
animationAction();

// GAME OBJECTS

const gameBox = document.getElementById("game-box");
const gameCanvas = document.getElementById("game-canvas");
const ctxGame = gameCanvas.getContext("2d");
let requestIdGame;
let cloudsArray2 = [];
let birdsArray2 = [];
let treesArray2 = [];
let smallRocksArray = [];
let maxTrees = 20;
maxSmallRocks = 2;
let dino;
let necklength = 0;
let dinoY = 110;
let dinoTurn = 0;
let dinoJump = 0;

//GAME STARTER FUNCTIONS

function fillGameArrays() {
  fillTreesArray(gameCanvas, treesArray2);
  fillCloudsArray(gameCanvas, cloudsArray2);
  fillBirdsArray(gameCanvas, birdsArray2);
  fillSmallRocksArray(gameCanvas, smallRocksArray);
  createDinosaur(ctxGame);
}
fillGameArrays();

function drawGame() {
  emptyCanvas(ctxGame, gameCanvas);
  drawEarth(ctxGame, gameCanvas);
  drawArrayOnCanvas(ctxGame, treesArray2);
  drawArrayOnCanvas(ctxGame, cloudsArray2);
  drawArrayOnCanvas(ctxGame, birdsArray2);
  drawArrayOnCanvas(ctxGame, smallRocksArray);
  drawDinosaur(ctxGame);
}

function gameAction() {
  drawGame();
  moveTreesArray(gameCanvas, treesArray2);
  moveCloudsArray(gameCanvas, cloudsArray2);
  moveBirdsArray(gameCanvas, birdsArray2);
  moveSmallRocksArray(gameCanvas, smallRocksArray);
  moveDinosaur(gameCanvas);
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

// BACKGROUND ITEMS

function fillCloudsArray(canvasName, cloudsArray) {
  for (var i = 0; i < maxClouds; i++) {
    cloudsArray[i] = new Cloud(canvasName);
  }
}

function moveCloudsArray(canvasName, cloudsArray) {
  for (var i = 0; i < cloudsArray.length; i++) {
    cloudsArray[i].x += cloudsArray[i].dx * cloudsArray[i].speed;
    if (cloudsArray[i].x < -20) {
      cloudsArray[i].reset(canvasName);
    }
  }
}

function fillBirdsArray(canvasName, birdsArray) {
  for (var i = 0; i < maxBirds; i++) {
    birdsArray[i] = new Bird(canvasName);
  }
}

function moveBirdsArray(canvasName, birdsArray) {
  for (var i = 0; i < birdsArray.length; i++) {
    birdsArray[i].x += birdsArray[i].dx;
    birdsArray[i].y += birdsArray[i].dy;
    if (birdsArray[i].x < -20) {
      birdsArray[i].reset(canvasName);
    }
  }
}

function fillDinosaursArray(canvasContext, dinosaursArray) {
  for (var i = 0; i < maxDinosaurs; i++) {
    dinosaursArray[i] = new Dinosaur(canvasContext);
  }
}

function moveDinosaursArray(canvasName, dinosaursArray) {
  for (var i = 0; i < dinosaursArray.length; i++) {
    dinosaursArray[i].x += dinosaursArray[i].dx;
    if (dinosaursArray[i].x > canvasName.width + 20) {
      dinosaursArray[i].reset(canvasName);
    }
  }
}

function fillTreesArray(canvasContext, treesArray) {
  for (var i = 0; i < maxTrees; i++) {
    treesArray[i] = new Tree(canvasContext);
  }
}

function moveTreesArray(canvasName, treesArray) {
  for (var i = 0; i < treesArray.length; i++) {
    treesArray[i].x += treesArray[i].dx * treesArray[i].speed;
    if (treesArray[i].x < -20) {
      treesArray[i].reset(canvasName);
    }
  }
}

function drawEarth(canvasContext, canvasName) {
  drawRectObject(
    canvasContext,
    "#2d822f",
    0,
    canvasName.height - 50,
    canvasName.width,
    45
  );
  drawRectObject(
    canvasContext,
    "#b16100",
    0,
    canvasName.height - 4,
    canvasName.width,
    4
  );
  drawRectObject(
    canvasContext,
    "#005e02",
    0,
    canvasName.height - 5,
    canvasName.width,
    1
  );
}

// IN GAME ITEMS

function fillSmallRocksArray(canvasContext, smallRocksArray) {
  for (var i = 0; i < maxSmallRocks; i++) {
    smallRocksArray[i] = new SmallRock(canvasContext);
  }
}

function moveSmallRocksArray(canvasName, smallRocksArray) {
  for (var i = 0; i < smallRocksArray.length; i++) {
    smallRocksArray[i].x += smallRocksArray[i].dx * smallRocksArray[i].speed;
    if (smallRocksArray[i].x < -20) {
      smallRocksArray[i].reset(canvasName);
    }
  }
}

// DINOSAUR PLAYER

function createDinosaur(canvasContext) {
  dino = new Dinosaur(canvasContext);
}

function drawDinosaur(canvasContext) {
  dino.draw(canvasContext);
}

function moveDinosaur(canvasName) {
  dino.x += dino.dx;
  dino.y -= dinoJump;
  dinoTurn += dinoJump;
  if (dino.x > canvasName.width - 20) {
    dino.x = canvasName.width - 20;
  } else if (dino.x < 40) {
    dino.x = 40;
  } else if (dinoTurn == 0) {
    dinoJump = 0;
  } else if (dinoTurn == 10) {
    dinoJump = -1;
  }
}

function keyDown(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    dino.dx = dino.speed;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    dino.dx = -dino.speed;
  }

  if (e.key === "Up" || e.key === "ArrowUp") {
    if (necklength < 80) {
      necklength = necklength + 3;
    }
  }
  if (e.key === "Down" || e.key === "ArrowDown") {
    if (necklength > 0) {
      necklength = necklength - 3;
    }
  }
  if (e.code === "Space" || e.code === "32") {
    if (dinoJump == 0) {
      dinoJump = 1;
    }
  }
}

function keyUp(e) {
  if (
    e.key === "Right" ||
    e.key === "ArrowRight" ||
    e.key === "Left" ||
    e.key === "ArrowLeft"
  ) {
    dino.dx = 0;
  }
  if (
    e.key === "Up" ||
    e.key === "ArrowUp" ||
    e.key === "Down" ||
    e.key === "ArrowDown"
  ) {
    necklength = necklength;
  }
}

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
