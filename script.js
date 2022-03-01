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
    this.y = Math.random() * 30 + 20;
    this.dx = -1;
    this.dy = birdMovement;
    this.speed = 1;
    this.size = 3;

    this.draw = function (canvasContext) {
      //tail
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
      //left wing
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x - 5,
        this.y - 4,
        this.size * 2,
        2,
        leftWing,
        0,
        Math.PI * 2,
        true
      );
      //right wing
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x + 5,
        this.y + 2,
        this.size * 3,
        2,
        rightWing,
        0,
        Math.PI * 2,
        true
      );
      //head
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x - 4,
        this.y + 3,
        this.size,
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
      this.x = canvasName.width + (Math.random() * 200 + 20);
      this.y = Math.random() * 30 + 20;
    };
  }
}

class Dinosaur {
  constructor() {
    this.x = dinoX;
    this.y = dinoY;
    this.dx = 0;
    this.dy = 0;
    this.speed = 1;
    this.size = 5;

    this.draw = function (canvasContext) {
      //tail
      drawEllipseObject(
        canvasContext,
        "#00ad37",
        this.x - 16,
        this.y - 9,
        this.size * 0.5,
        9,
        dinoTail,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x - 15,
        this.y - 10,
        this.size * 0.4,
        9,
        dinoTail,
        0,
        Math.PI * 2,
        true
      );
      //legs
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x - 11,
        this.y - 8,
        this.size * 0.7,
        dinoLegRight,
        dinoRightLegAngle,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00ad37",
        this.x - 4,
        this.y - 8,
        this.size * 0.7,
        dinoLegLeft,
        dinoLeftLegAngle,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x + 6,
        this.y - 8,
        this.size * 0.7,
        dinoLegRight,
        dinoRightLegAngle,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00ad37",
        this.x + 13,
        this.y - 8,
        this.size * 0.7,
        dinoLegLeft,
        dinoLeftLegAngle,
        0,
        Math.PI * 2,
        true
      );
      //neck
      drawRectObject(
        canvasContext,
        "#00ad37",
        this.x + 7.5,
        this.y - 10,
        this.size * 1.8,
        -25 - necklength
      );
      //body
      drawEllipseObject(
        canvasContext,
        "#00ad37",
        this.x,
        this.y - 13,
        this.size * 3,
        7,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x + 0.5,
        this.y - 12.2,
        this.size * 3,
        7,
        0,
        0,
        Math.PI * 2,
        true
      );
      //neck
      drawRectObject(
        canvasContext,
        "#00b439",
        this.x + 9.5,
        this.y - 10,
        this.size * 1.2,
        -25 - necklength
      );
      //ears
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x + 11,
        this.y - 40 - necklength,
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
        this.x + 17,
        this.y - 40 - necklength,
        this.size * 0.4,
        2,
        0,
        0,
        Math.PI * 2,
        true
      );
      //mouth
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x + dinoMouthX,
        this.y - 33 - necklength,
        this.size * 1.5,
        4,
        dinoMouthR,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#7a0000",
        this.x + dinoMouthX,
        this.y - 33 - 0.3 - necklength,
        this.size * 1.3,
        3,
        dinoMouthR,
        0,
        Math.PI * 2,
        true
      );
      //head
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x + 17.4,
        this.y - 35 - necklength,
        this.size * 2,
        5,
        0,
        0,
        Math.PI * 2,
        true
      );
      //face
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x + 15,
        this.y - 35 - necklength,
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
        this.x + 14.5,
        this.y - 36 - necklength,
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
        this.x + 23.5,
        this.y - 33.5 - necklength,
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
        this.x + 25.5,
        this.y - 33.5 - necklength,
        this.size * 0.1,
        0.4,
        0,
        0,
        Math.PI * 2,
        true
      );
    };

    this.turn = function (canvasContext) {
      //tail
      drawEllipseObject(
        canvasContext,
        "#00ad37",
        this.x + 16,
        this.y - 9,
        this.size * 0.5,
        9,
        dinoTail + 2,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x + 15,
        this.y - 10,
        this.size * 0.4,
        9,
        dinoTail + 2,
        0,
        Math.PI * 2,
        true
      );
      //legs
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x + 11,
        this.y - 8,
        this.size * 0.7,
        dinoLegRight,
        dinoRightLegAngle,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00ad37",
        this.x + 4,
        this.y - 8,
        this.size * 0.7,
        dinoLegLeft,
        dinoLeftLegAngle,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x - 6,
        this.y - 8,
        this.size * 0.7,
        dinoLegRight,
        dinoRightLegAngle,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00ad37",
        this.x - 13,
        this.y - 8,
        this.size * 0.7,
        dinoLegLeft,
        dinoLeftLegAngle,
        0,
        Math.PI * 2,
        true
      );
      //neck
      drawRectObject(
        canvasContext,
        "#00ad37",
        this.x - 16.5,
        this.y - 10,
        this.size * 1.8,
        -25 - necklength
      );
      //body
      drawEllipseObject(
        canvasContext,
        "#00ad37",
        this.x,
        this.y - 13,
        this.size * 3,
        7,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x - 0.5,
        this.y - 12.2,
        this.size * 3,
        7,
        0,
        0,
        Math.PI * 2,
        true
      );
      //neck
      drawRectObject(
        canvasContext,
        "#00b439",
        this.x - 14.5,
        this.y - 10,
        this.size * 1.2,
        -25 - necklength
      );
      //ears
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x - 10,
        this.y - 39 - necklength,
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
        this.x - 17,
        this.y - 40 - necklength,
        this.size * 0.4,
        2,
        0,
        0,
        Math.PI * 2,
        true
      );
      //mouth
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x - dinoMouthX,
        this.y - 33 - necklength,
        this.size * 1.5,
        4,
        dinoMouthL,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#7a0000",
        this.x - dinoMouthX,
        this.y - 33 - 0.3 - necklength,
        this.size * 1.3,
        3,
        dinoMouthL,
        0,
        Math.PI * 2,
        true
      );
      //head
      drawEllipseObject(
        canvasContext,
        "#00b439",
        this.x - 17.8,
        this.y - 35 - necklength,
        this.size * 2,
        5,
        0,
        0,
        Math.PI * 2,
        true
      );
      //face
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x - 15,
        this.y - 35 - necklength,
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
        this.x - 14.5,
        this.y - 36 - necklength,
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
        this.x - 23.5,
        this.y - 33.5 - necklength,
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
        this.x - 25.5,
        this.y - 33.5 - necklength,
        this.size * 0.1,
        0.4,
        0,
        0,
        Math.PI * 2,
        true
      );
    };

    this.blink = function (canvasContext) {
      drawEllipseObject(
        canvasContext,
        "#00ad37",
        this.x + 15,
        this.y - 35 - necklength,
        this.size * 0.4,
        1.5,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawRectObject(
        canvasContext,
        "#000000",
        this.x + 15,
        this.y - 35 - necklength,
        3,
        1
      );
    };

    this.move = function () {
      this.dx = -3;
    };

    this.back = function () {
      this.dx = 3;
    };

    this.still = function () {
      this.dx = 0;
    };
  }
}

class BackgroundTree {
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

class Tree {
  constructor(treeX) {
    this.x = treeX;
    this.y = 145;
    this.height = 140;
    this.width = 20;
    this.dx = -1;
    this.dy = 0;
    this.speed = 0;
    this.size = 5;

    this.draw = function (canvasContext) {
      //green
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 10,
        this.height - 57,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x + 15,
        this.height - 49,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 15,
        this.height - 47,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 10,
        this.height - 100,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x + 15,
        this.height - 60,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 15,
        this.height - 110,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x + 15,
        this.height - 100,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#11a928",
        this.x - 20,
        this.height - 57,
        5,
        5,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#11a928",
        this.x + 25,
        this.height - 49,
        5,
        5,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#11a928",
        this.x - 5,
        this.height - 47,
        5,
        5,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#11a928",
        this.x - 15,
        this.height - 100,
        5,
        5,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#11a928",
        this.x + 10,
        this.height - 60,
        5,
        5,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#11a928",
        this.x - 10,
        this.height - 110,
        5,
        5,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#11a928",
        this.x + 10,
        this.height - 100,
        5,
        5,
        0,
        0,
        Math.PI * 2,
        true
      );
      //stem
      drawRectObject(
        canvasContext,
        "#894c00",
        this.x - this.width / 2,
        this.y - this.height,
        this.width,
        this.height
      );
      drawEllipseObject(
        canvasContext,
        "#000000",
        this.x,
        this.height / 2,
        this.size,
        this.size * 2.5,
        0,
        0,
        Math.PI * 2,
        true
      );
      //greens
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 5,
        this.height - 40,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 10,
        this.height - 140,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 20,
        this.height - 140,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x + 5,
        this.height - 110,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 12,
        this.height - 115,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 16,
        this.height - 105,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x + 10,
        this.height - 70,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x + 5,
        this.height - 135,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 12,
        this.height - 125,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 16,
        this.height - 130,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x + 20,
        this.height - 140,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x + 25,
        this.height - 130,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x + 15,
        this.height - 120,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x + 25,
        this.height - 115,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 35,
        this.height - 130,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 28,
        this.height - 110,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x + 20,
        this.height - 125,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x - 25,
        this.height - 120,
        10,
        10,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#007a12",
        this.x - 8,
        this.height - 48,
        6,
        6,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#007a12",
        this.x - 22,
        this.height - 98,
        6,
        6,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#007a12",
        this.x - 6,
        this.height - 140,
        6,
        6,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#007a12",
        this.x - 10,
        this.height - 140,
        6,
        6,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#007a12",
        this.x - 9,
        this.height - 115,
        6,
        6,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#007a12",
        this.x - 16,
        this.height - 65,
        6,
        6,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#007a12",
        this.x + 16,
        this.height - 65,
        6,
        6,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#007a12",
        this.x + 8,
        this.height - 135,
        6,
        6,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#007a12",
        this.x - 18,
        this.height - 125,
        6,
        6,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#007a12",
        this.x - 26,
        this.height - 130,
        6,
        6,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#007a12",
        this.x + 20,
        this.height - 140,
        6,
        6,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#007a12",
        this.x + 16,
        this.height - 125,
        6,
        6,
        0,
        0,
        Math.PI * 2,
        true
      );
      drawEllipseObject(
        canvasContext,
        "#007a12",
        this.x - 25,
        this.height - 120,
        6,
        6,
        0,
        0,
        Math.PI * 2,
        true
      );
    };

    this.move = function () {
      this.speed = 3;
    };

    this.back = function () {
      this.dx = 3;
    };

    this.still = function () {
      this.speed = 0;
    };

    this.reset = function (canvasName) {
      this.x = canvasName.width - 20;
      this.y = 140;
    };
  }
}

class Berry {
  constructor(maxX, minX, maxY, minY) {
    this.x = Math.random() * maxX + minX;
    this.y = Math.random() * maxY + minY;
    this.height = 140;
    this.width = 20;
    this.dx = -1;
    this.dy = 0;
    this.speed = 0;
    this.size = 2.5;

    this.draw = function (canvasContext) {
      drawRoundObject(
        canvasContext,
        "#ff2b2f",
        this.x,
        this.y,
        this.size,
        1,
        10
      );
    };
    this.eaten = function (canvasContext) {
      this.x = -10;
      this.y = -10;
    };

    this.move = function () {
      this.speed = 3;
    };

    this.back = function () {
      this.dx = 3;
    };

    this.still = function () {
      this.speed = 0;
    };
  }
}

class SmallRock {
  constructor(canvasName) {
    this.x = 140;
    this.y = 140;
    this.dx = -1;
    this.dy = 0;
    this.speed = 0;
    this.size = 1;
    this.height = 6;
    this.width = 40;

    this.draw = function (canvasContext) {
      drawRectObject(
        canvasContext,
        "#b16100",
        this.x - this.width / 2,
        this.y,
        this.width,
        this.height
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x,
        this.y,
        this.width / 2,
        this.height * 0.2,
        0,
        0,
        Math.PI * 2,
        true
      );
    };

    this.reset = function () {
      this.x = canvasName.width + (Math.random() * 200 + 20);
      this.y = 140;
    };

    this.move = function () {
      this.speed = 3;
    };

    this.back = function () {
      this.dx = 3;
    };

    this.still = function () {
      this.speed = 0;
    };
  }
}

class MediumRock {
  constructor(rockX) {
    this.x = rockX;
    this.y = 131;
    this.dx = -1;
    this.dy = 0;
    this.speed = 0;
    this.size = 1;
    this.height = 15;
    this.width = 40;

    this.draw = function (canvasContext) {
      drawRectObject(
        canvasContext,
        "#b16100",
        this.x - this.width / 2,
        this.y,
        this.width,
        this.height
      );
      drawEllipseObject(
        canvasContext,
        "#005e02",
        this.x,
        this.y,
        this.width / 2,
        this.height * 0.1,
        0,
        0,
        Math.PI * 2,
        true
      );
    };

    this.reset = function () {
      this.x = canvasName.width + (Math.random() * 200 + 20);
      this.y = 140;
    };

    this.move = function () {
      this.speed = 3;
    };

    this.back = function () {
      this.dx = 3;
    };

    this.still = function () {
      this.speed = 0;
    };
  }
}

// GAME OBJECTS

const gameBox = document.getElementById("game-box");
const gameCanvas = document.getElementById("game-canvas");
const ctxGame = gameCanvas.getContext("2d");
let requestIdGame;
let cloudsArray1 = [];
let maxClouds1 = 10;
let birdsArray1 = [];
let maxBirds1 = 3;
let backgroundTreesArray1 = [];
let maxBackgroundTrees1 = 20;
let treesArray1 = [];
let maxTrees1 = 2;
let smallRocksArray1 = [];
let maxSmallRocks1 = 1;
let mediumRocksArray1 = [];
let maxMediumRocks1 = 1;
let berriesArray1 = [];
let maxBerries1 = 8;
let berriesArray2 = [];
let maxBerries2 = 3;
let berriesArray3 = [];
let maxBerries3 = 8;
let berriesArray4 = [];
let maxBerries4 = 3;

let screenChange = 0;
let startScreen = 1;

//BIRD
let leftWing = 0.7;
let rightWing = 3.4;
let wingMovementLeft = 0;
let wingMovementRight = 0;
let birdMovement = 0.08;
let birdDirection = 0;

//DINOSAUR
let dino;
let necklength = 0;
let dinoMouthL = 3;
let dinoMouthR = 0.1;
let dinoMouthX = 18.8;
let openMouth = 0;
let dinoEating = 0;
let dinoY = 145;
let dinoX = 40;
let dinoDown = 0;
let dinoJump = 0;
let dinoHighJump = 0;
let dinoOnRock = 0;
let dinoOnMediumRock = 0;
let dinoFall = 0;
let dinoTurn = 0;
let dinoTail = 0.5;
let tailMovement = 0;
let dinoLegLeft = 9;
let dinoLegRight = 9;
let legMovementRight = 0;
let legMovementLeft = 0;
let walking = 0;
let dinoRightLegAngle = 3.1;
let dinoLeftLegAngle = 3.1;
let legAngleRight = -0.05;
let legAngleLeft = 0.05;

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

// BACKGROUND ITEMS

function fillCloudsArray(canvasName, cloudsArray) {
  for (var i = 0; i < maxClouds1; i++) {
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
  for (var i = 0; i < maxBirds1; i++) {
    birdsArray[i] = new Bird(canvasName);
  }
}

function moveBirdsArray(canvasName, birdsArray) {
  for (var i = 0; i < birdsArray.length; i++) {
    birdsArray[i].x += birdsArray[i].dx;
    birdsArray[i].y += birdMovement;

    if (birdsArray[i].x < -20) {
      birdsArray[i].reset(canvasName);
    }

    birdDirection += birdMovement;
    if (birdDirection > 80) {
      birdMovement = -0.08;
    } else if (birdDirection < 0) {
      birdMovement = 0.08;
    }
  }
  leftWing += wingMovementLeft;
  rightWing += wingMovementRight;

  if (rightWing === 3.4) {
    wingMovementRight = -0.01;
    wingMovementLeft = 0.01;
  } else if (rightWing < 3.0) {
    wingMovementRight = 0.01;
    wingMovementLeft = -0.01;
  }
}

function fillBackgroundTreesArray(canvasContext, treesArray) {
  for (var i = 0; i < maxBackgroundTrees1; i++) {
    treesArray[i] = new BackgroundTree(canvasContext);
  }
}

function fillTreesArray(treeX, treeDistance, treesArray) {
  for (var i = 0; i < maxTrees1; i++) {
    treesArray[i] = new Tree(treeX);
    treeX += treeDistance;
  }
}

function moveTreesArray(treesArray) {
  for (var i = 0; i < treesArray.length; i++) {
    treesArray[i].x += treesArray[i].dx * treesArray[i].speed;

    if (screenChange === 0) {
      treesArray[i].still();
    } else if (screenChange === 1) {
      treesArray[i].move();
    } else if (screenChange === -1) {
      treesArray[i].back();
    }
  }
}

// IN GAME ITEMS

function fillSmallRocksArray(canvasContext, smallRocksArray) {
  for (var i = 0; i < maxSmallRocks1; i++) {
    smallRocksArray[i] = new SmallRock(canvasContext);
  }
}

function moveSmallRocksArray(smallRocksArray) {
  for (var i = 0; i < smallRocksArray.length; i++) {
    smallRocksArray[i].x += smallRocksArray[i].dx * smallRocksArray[i].speed;

    if (screenChange === 0) {
      smallRocksArray[i].still();
    } else if (screenChange === 1) {
      smallRocksArray[i].move();
    } else if (screenChange === -1) {
      smallRocksArray[i].back();
    }
  }
}

function fillMediumRocksArray(mediumRocksArray, rockX, rockDistance) {
  for (var i = 0; i < maxMediumRocks1; i++) {
    mediumRocksArray[i] = new MediumRock(rockX);
    rockX = rockX + rockDistance;
  }
}

function moveMediumRocksArray(mediumRocksArray) {
  for (var i = 0; i < mediumRocksArray.length; i++) {
    mediumRocksArray[i].x += mediumRocksArray[i].dx * mediumRocksArray[i].speed;

    if (screenChange === 0) {
      mediumRocksArray[i].still();
    } else if (screenChange === 1) {
      mediumRocksArray[i].move();
    } else if (screenChange === -1) {
      mediumRocksArray[i].back();
    }
  }
}

function fillBerriesArray(berriesArray, maxBerries, maxX, minX, maxY, minY) {
  for (var i = 0; i < maxBerries; i++) {
    berriesArray[i] = new Berry(maxX, minX, maxY, minY);
  }
}

function moveBerriesArray(berriesArray) {
  for (var i = 0; i < berriesArray.length; i++) {
    berriesArray[i].x += berriesArray[i].dx * berriesArray[i].speed;

    if (screenChange === 0) {
      berriesArray[i].still();
    } else if (screenChange === 1) {
      berriesArray[i].move();
    } else if (screenChange === -1) {
      berriesArray[i].back();
    }
  }
}

// DINOSAUR PLAYER

function createDinosaur(canvasContext) {
  dino = new Dinosaur(canvasContext);
}

function drawDinosaur(canvasContext) {
  if (dinoTurn === 0) {
    dino.draw(canvasContext);
  } else if (dinoTurn === 1) {
    dino.turn(canvasContext);
  }
}

function growDinoNeck() {
  if (necklength < 50) {
    necklength = necklength + 3;
  }
}

function lowerDinoNeck() {
  if (necklength > 0) {
    necklength = necklength - 3;
  }
}

function hitDinoNeck() {
  if (dino.y - necklength - 40 < 5) {
    let lower = 5 - (dino.y - necklength - 40);
    necklength = necklength - lower;
  }
}

function eatBerry(berriesArray) {
  for (var i = 0; i < berriesArray.length; i++)
    if (
      (dino.y - 33 - necklength < berriesArray[i].y + 5 &&
        dino.y - 33 - necklength > berriesArray[i].y - 5 &&
        dinoTurn === 0 &&
        dino.x + dinoMouthX + 5 < berriesArray[i].x + 5 &&
        dino.x + dinoMouthX + 5 > berriesArray[i].x - 5) ||
      (dino.y - 33 - necklength < berriesArray[i].y + 5 &&
        dino.y - 33 - necklength > berriesArray[i].y - 5 &&
        dinoTurn === 1 &&
        dino.x - dinoMouthX - 5 < berriesArray[i].x + 5 &&
        dino.x - dinoMouthX - 5 > berriesArray[i].x - 5)
    ) {
      berriesArray[i].eaten();
      dinoEating = 1;
    }
}

function moveDinoMouth() {
  dinoMouthL -= openMouth;
  dinoMouthR += openMouth;

  if (dinoEating === 1) {
    if (dinoMouthR < 0.2 || dinoMouthL > 2.9) {
      openMouth = 0.1;
    }
    setTimeout(() => {
      if (dinoMouthR > 0.8 || dinoMouthL < 2) {
        openMouth = -0.1;
        dinoEating = 0;
      }
    }, 100);
  }
  if (dinoEating === 0) {
    dinoMouthL = 3;
    dinoMouthR = 0.1;
    openMouth = 0;
  }
}

function moveDinoTail() {
  dinoTail += tailMovement;
  if (dinoTail === 0.5) {
    tailMovement = 0.005;
  } else if (dinoTail > 0.7) {
    tailMovement = -0.005;
  }
}

function moveDinoLegs() {
  if (walking === 1) {
    dinoRightLegAngle += legAngleRight;
    dinoLeftLegAngle += legAngleLeft;

    if (dinoRightLegAngle < 2.9) {
      legAngleRight = 0.05;
    } else if (dinoRightLegAngle > 3.4) {
      legAngleRight = -0.05;
    }

    if (dinoLeftLegAngle < 2.9) {
      legAngleLeft = 0.05;
    } else if (dinoLeftLegAngle > 3.4) {
      legAngleLeft = -0.05;
    }
  } else {
    dinoStand();
  }
}

function dinoTrample() {
  if (walking === 1) {
    dinoLegLeft += legMovementLeft;
    dinoLegRight += legMovementRight;

    if (dinoLegRight === 9) {
      legMovementRight = -0.5;
      if (dinoLegLeft < 6) {
        legMovementLeft = 0.5;
      } else {
        legMovementLeft = 0;
      }
    } else if (dinoLegRight < 6) {
      legMovementRight = 0.5;
      legMovementLeft = -0.5;
    }
  } else {
    dinoStand();
  }
}

function dinoStand() {
  dinoLegLeft = 9;
  dinoLegRight = 9;
  legMovementLeft = 0;
  legMovementRight = 0;
  dinoRightLegAngle = 3.1;
  dinoLeftLegAngle = 3.1;
  legAngleRight = -0.05;
  legAngleLeft = 0.05;
}

function jumpOnSmallRocks(smallRocksArray) {
  for (i = 0; i < smallRocksArray.length; i++) {
    if (
      dino.x < smallRocksArray[i].x + smallRocksArray[i].width / 2 &&
      dino.x > smallRocksArray[i].x - smallRocksArray[i].width / 2 &&
      dino.y == smallRocksArray[i].y
    ) {
      dino.y = smallRocksArray[i].y;
      dinoOnRock = 1;
      dinoDown = 0;
      dinoJump = 0;
      dinoHighJump = 0;
    }
  }
}

function jumpOnMediumRocks(mediumRocksArray) {
  for (i = 0; i < mediumRocksArray.length; i++) {
    if (
      dino.x < mediumRocksArray[i].x + mediumRocksArray[i].width / 2 &&
      dino.x > mediumRocksArray[i].x - mediumRocksArray[i].width / 2 &&
      dino.y == mediumRocksArray[i].y + 2
    ) {
      dino.y = mediumRocksArray[i].y;
      dinoOnMediumRock = 1;
      dinoOnRock = 0;
      dinoDown = 0;
      dinoJump = 0;
      dinoHighJump = 0;
    }
  }
}

function fallOffSmallRocks(smallRocksArray) {
  for (i = 0; i < smallRocksArray.length; i++) {
    if (
      (dino.x > smallRocksArray[i].x + smallRocksArray[i].width / 2 ||
        dino.x < smallRocksArray[i].x - smallRocksArray[i].width / 2) &&
      dinoOnRock === 1 &&
      dinoJump === 0 &&
      dinoHighJump === 0
    ) {
      dinoFall = smallRocksArray[i].height - 1;
      for (f = 0; f < dinoFall; f++) {
        dino.y += 1;
      }
      dinoOnRock = 0;
    }
  }
}

function fallOffMediumRocks(mediumRocksArray, smallRocksArray) {
  for (i = 0; i < mediumRocksArray.length; i++) {
    if (
      (dino.x > mediumRocksArray[i].x + mediumRocksArray[i].width / 2 ||
        dino.x < mediumRocksArray[i].x - mediumRocksArray[i].width / 2) &&
      dinoOnMediumRock === 1 &&
      dinoJump === 0 &&
      dinoHighJump === 0
    )
      for (s = 0; s < smallRocksArray.length; s++)
        if (
          dino.x < smallRocksArray[s].x + smallRocksArray[s].width / 2 &&
          dino.x > smallRocksArray[s].x - smallRocksArray[s].width / 2
        ) {
          dinoFall = mediumRocksArray[i].height - smallRocksArray[i].height;
          for (f = 0; f < dinoFall; f++) {
            dino.y += 1;
          }
          dinoOnMediumRock = 0;
          dinoOnRock = 1;
        } else {
          dinoFall = mediumRocksArray[i].height - 1;
          for (f = 0; f < dinoFall; f++) {
            dino.y += 1;
          }
          dinoOnMediumRock = 0;
        }
  }
}

function hitSmallRocks(smallRocksArray) {
  for (i = 0; i < smallRocksArray.length; i++) {
    if (
      dino.x + 18 > smallRocksArray[i].x - smallRocksArray[i].width / 2 &&
      dino.x + 18 < smallRocksArray[i].x + smallRocksArray[i].width / 2 &&
      dino.y > smallRocksArray[i].y + 4
    ) {
      dino.x = smallRocksArray[i].x - smallRocksArray[i].width / 2 - 20;
    } else if (
      dino.x - 18 > smallRocksArray[i].x - smallRocksArray[i].width / 2 &&
      dino.x - 18 < smallRocksArray[i].x + smallRocksArray[i].width / 2 &&
      dino.y > smallRocksArray[i].y + 4
    ) {
      dino.x = smallRocksArray[i].x + smallRocksArray[i].width / 2 + 20;
    }
  }
}

function hitMediumRocks(mediumRocksArray) {
  for (i = 0; i < mediumRocksArray.length; i++) {
    if (
      dino.x + 18 > mediumRocksArray[i].x - mediumRocksArray[i].width / 2 &&
      dino.x + 18 < mediumRocksArray[i].x + mediumRocksArray[i].width / 2 &&
      dino.y > mediumRocksArray[i].y + 4
    ) {
      dino.x = mediumRocksArray[i].x - mediumRocksArray[i].width / 2 - 20;
    } else if (
      dino.x - 18 > mediumRocksArray[i].x - mediumRocksArray[i].width / 2 &&
      dino.x - 18 < mediumRocksArray[i].x + mediumRocksArray[i].width / 2 &&
      dino.y > mediumRocksArray[i].y + 4
    ) {
      dino.x = mediumRocksArray[i].x + mediumRocksArray[i].width / 2 + 20;
    }
  }
}

function moveDinosaur(canvasName, smallRocksArray, mediumRocksArray) {
  dino.x += dino.dx;
  if (dino.x < 40) {
    dino.x = 40;
  }

  dino.y -= dinoJump;
  dinoDown += dinoJump;
  if (dinoDown === 0) {
    dinoJump = 0;
  } else if (dinoDown === 15 && dinoHighJump === 0) {
    dinoJump = -1;
  } else if (dinoDown === 30 && dinoHighJump === 1) {
    dinoJump = -1;
    dinoHighJump = 0;
  }

  if (screenChange === 1) {
    dino.move();
  } else if (screenChange === -1) {
    dino.back();
  }

  hitDinoNeck();
  moveDinoMouth();
  moveDinoTail();
  moveDinoLegs();
  jumpOnSmallRocks(smallRocksArray);
  jumpOnMediumRocks(mediumRocksArray);
  fallOffSmallRocks(smallRocksArray);
  fallOffMediumRocks(mediumRocksArray, smallRocksArray);
  hitSmallRocks(smallRocksArray);
  hitMediumRocks(mediumRocksArray);
}

// SCREEN MOVEMENT

function moveScreenForward(canvasName) {
  if (dino.x == canvasName.width - 40) {
    screenChange = 1;
    startScreen = 0;
  } else if (dino.x == 40) {
    screenChange = 0;
    // } else if (dino.x == 40 && startScreen === 0) {
    //   screenChange = -1;
    //   startScreen = 1;
  }
}

//GAME STARTER FUNCTIONS

function fillGameArrays() {
  fillBackgroundTreesArray(gameCanvas, backgroundTreesArray1);
  fillCloudsArray(gameCanvas, cloudsArray1);
  fillBirdsArray(gameCanvas, birdsArray1);
  fillTreesArray(250, 80, treesArray1);
  fillBerriesArray(berriesArray1, maxBerries1, 50, 220, 30, 10);
  fillBerriesArray(berriesArray2, maxBerries2, 40, 230, 30, 70);
  fillBerriesArray(berriesArray3, maxBerries3, 50, 300, 30, 10);
  fillBerriesArray(berriesArray4, maxBerries4, 40, 310, 30, 70);
  fillSmallRocksArray(gameCanvas, smallRocksArray1);
  fillMediumRocksArray(mediumRocksArray1, 180, 0);
  createDinosaur(ctxGame);
}
fillGameArrays();

function drawGame() {
  emptyCanvas(ctxGame, gameCanvas);
  drawEarth(ctxGame, gameCanvas);
  drawArrayOnCanvas(ctxGame, backgroundTreesArray1);
  drawArrayOnCanvas(ctxGame, cloudsArray1);
  drawArrayOnCanvas(ctxGame, birdsArray1);
  drawArrayOnCanvas(ctxGame, treesArray1);
  drawArrayOnCanvas(ctxGame, berriesArray1);
  drawArrayOnCanvas(ctxGame, berriesArray2);
  drawArrayOnCanvas(ctxGame, berriesArray3);
  drawArrayOnCanvas(ctxGame, berriesArray4);
  drawArrayOnCanvas(ctxGame, smallRocksArray1);
  drawArrayOnCanvas(ctxGame, mediumRocksArray1);
  drawDinosaur(ctxGame);
}

function gameAction() {
  drawGame();
  moveTreesArray(gameCanvas, backgroundTreesArray1);
  moveCloudsArray(gameCanvas, cloudsArray1);
  moveBirdsArray(gameCanvas, birdsArray1);
  moveSmallRocksArray(smallRocksArray1);
  moveMediumRocksArray(mediumRocksArray1);
  moveTreesArray(treesArray1);
  moveBerriesArray(berriesArray1);
  moveBerriesArray(berriesArray2);
  moveBerriesArray(berriesArray3);
  moveBerriesArray(berriesArray4);
  moveDinosaur(gameCanvas, smallRocksArray1, mediumRocksArray1);
  eatBerry(berriesArray1);
  eatBerry(berriesArray2);
  eatBerry(berriesArray3);
  eatBerry(berriesArray4);
  moveScreenForward(gameCanvas);
  requestIdGame = requestAnimationFrame(gameAction);
}
gameAction();

function keyDown(e) {
  if (e.key === "Right" || (e.key === "ArrowRight" && screenChange === 0)) {
    dinoTurn = 0;
    dino.dx = 1;
    walking = 1;
  } else if (
    e.key === "Left" ||
    (e.key === "ArrowLeft" && screenChange === 0)
  ) {
    dinoTurn = 1;
    dino.dx = -1;
    walking = 1;
  }

  if (e.key === "Up" || e.key === "ArrowUp") {
    growDinoNeck();
  }
  if (e.key === "Down" || e.key === "ArrowDown") {
    lowerDinoNeck();
  }
  if (e.code === "Space" || e.code === "32") {
    if (dinoJump === 0) {
      dinoJump = 1;
    } else if (dinoJump > 0 && dinoJump < 16) {
      dinoJump = 1;
      dinoHighJump = 1;
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
    walking = 0;
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
