/**
 * Title: Self portrait in code
 * Nou Noune
 * 
 * Here's me!
 */

"use strict";

// The blue sky.
let sky = {
    color: {
        red: 0,
        green: 30,
        blue: 60,
    }
};

// The two mountains.
let mountain = {
    one: {
        fill: "#22e329ff",
        stroke: "#386949ff",
        strokeWeight: 4,
        x1: 600 * 0.10,
        y1: 500 * 0.85,
        x2: 600 * 0.27,
        y2: 500 * 0.5,
        x3: 600 * 0.50,
        y3: 500 * 0.85,
    },
    two: {
        fill: "#22e329ff",
        stroke: "#386949ff",
        strokeWeight: 4,
        x1: 600 * 0.25,
        y1: 500 * 0.85,
        x2: 600 * 0.37,
        y2: 500 * 0.6,
        x3: 600 * 0.58,
        y3: 500 * 0.85,

    },
};

// The stars.
let starImage = undefined;
let starWidth = 60;
let starHeight = 60;

// The chalet.
let chalet = {
    body: {
        fill: "#855959",
        stroke: "#574646ff",
        strokeWeight: 4,
        x: 145,
        y: 240,
        size: {
            width: 40,
            height: 40,
        },
    },
    chimney: {
        fill: "#F05B5B",
        stroke: "#ae6161ff",
        x: 169,
        y: 215,
        size: {
            width: 10,
            height: 15,
        },
    },
    roof: {
        fill: "#F05B5B",
        stroke: "#ae6161ff",
        strokeWeight: 4,
        x1: 144,
        y1: 240,
        x2: 164,
        y2: 215,
        x3: 186,
        y3: 240,
    },
    door: {
        fill: "#F05B5B",
        stroke: "#ae6161ff",
        x: 158.3,
        y: 250,
        size: {
            width: 13.3,
            height: 28,
        },
    },
}

// The sun.
let sun = {
    stroke: "#574646ff",
    strokeWeight: 4,
    fill: {
        red: 255,
        green: undefined,
        blue: 70,
    },
    x: undefined,
    y: 0,
    size: {
        width: 300,
        height: 290,
    },
}

// The green grass
let grass = {
    fill: "#22e329ff",
    stroke: "#386949ff",
    strokeWeight: 4,
    x: 0,
    y: undefined,
    size: {
        width: undefined,
        height: undefined,
    },
}

// Brigitte.
let brigitteImage = undefined;
let brigitteWidth = 60;
let brigitteHeight = 60;

//My face
let face = {
    head: {
        stroke: "#997C7D",
        strokeWeight: 4,
        fill: "#f3b4b6ff",
        x: 450,
        y: 400,
        width: 220,
        height: 275,
    }
};

// My teeth.
let dentsImage = undefined;
let dentsWidth = 150;
let dentsHeight = 150;

// The text.
let textSized = 32;
let textFill = 255;
let textStroke = 0;
let textStrokeWeight = 4;

// The smoke.
let smokeImg = undefined;
let smokeImgY = 175;
let smokeImgVelocity = 0.5;
// let smokeImgHeight = 60;
// let smokeImgWidth = 30;
// let smokeImgX = 175;
// let smokeImgY = 200;
// let smokeImgVelocityY = 1;

/** 
 * Preloads the images. FUNCTION
 */
function preload() {
    // Loads stars and smoke.
    starImage = loadImage("assets/images/star.png");
    smokeImg = loadImage("assets/images/smoke.png");
    brigitteImage = loadImage("assets/images/brigitte.png");
    dentsImage = loadImage("assets/images/dents.png");
};

/** 
 * Creates canvas. FUNCTION
 */
function setup() {
    // Creates our canvas.
    createCanvas(600, 500);
};

/**
 * Creates my portrait.
 */
function draw() {
    drawBackground();
    placeBrigitte();
    drawFace();
    drawText();
};

/**
 * Creates the background (everything but the face).
 */
function drawBackground() {
    drawSky();
    placeSmoke();
    drawMountains();
    placeStars();
    drawChalet();
    drawSun();
    drawGrass();
};

/**
 * Creates the sky.
 */
function drawSky() {
    // Makes the sky dark blue.
    background(sky.color.red, sky.color.green, sky.color.blue);
};

/**
 * Creates the moutains.
 */
function drawMountains() {
    //Creates mountain 1.
    push();
    fill(mountain.one.fill);
    stroke(mountain.one.stroke);
    strokeWeight(mountain.one.strokeWeight);
    triangle(mountain.one.x1, mountain.one.y1, mountain.one.x2, mountain.one.y2, mountain.one.x3, mountain.one.y3);
    pop();
    // Mountain 2.
    push();
    fill(mountain.two.fill);
    stroke(mountain.two.stroke);
    strokeWeight(mountain.two.strokeWeight);
    triangle(mountain.two.x1, mountain.two.y1, mountain.two.x2, mountain.two.y2, mountain.two.x3, mountain.two.y3);
    pop();
};

/**
 * Places the stars (images).
 */
function placeStars() {
    // Determines position of each star using it's center.
    push();
    imageMode(CENTER);
    image(starImage, width * 0.10, height * 0.20, starWidth, starHeight);
    image(starImage, width * 0.20, height * 0.30, starWidth, starHeight);
    image(starImage, width * 0.30, height * 0.10, starWidth, starHeight);
    image(starImage, width * 0.40, height * 0.30, starWidth, starHeight);
    image(starImage, width * 0.50, height * 0.10, starWidth, starHeight);
    image(starImage, width * 0.60, height * 0.30, starWidth, starHeight);
    image(starImage, width * 0.70, height * 0.10, starWidth, starHeight);
    image(starImage, width * 0.80, height * 0.30, starWidth, starHeight);
    image(starImage, width * 0.90, height * 0.10, starWidth, starHeight);
    pop();

};

/**
 * Creates chalet.
 */
function drawChalet() {
    // Creates the body part of the house.
    push();
    fill(chalet.body.fill);
    stroke(chalet.body.stroke);
    strokeWeight(chalet.body.strokeWeight);
    rect(chalet.body.x, chalet.body.y, chalet.body.size.width, chalet.body.size.height);
    pop();
    // Creates the chimney of the house.
    push();
    fill(chalet.chimney.fill);
    stroke(chalet.chimney.stroke);
    rect(chalet.chimney.x, chalet.chimney.y, chalet.chimney.size.width, chalet.chimney.size.height);
    pop();
    // Creates the roof of the house.
    push();
    fill(chalet.roof.fill);
    stroke(chalet.roof.stroke);
    strokeWeight(chalet.roof.strokeWeight);
    triangle(chalet.roof.x1, chalet.roof.y1, chalet.roof.x2, chalet.roof.y2, chalet.roof.x3, chalet.roof.y3);
    pop();
    // Creates the door of the house.
    push();
    fill(chalet.door.fill);
    stroke(chalet.door.stroke);
    rect(chalet.door.x, chalet.door.y, chalet.door.size.width, chalet.door.size.height);
    pop();
};

/**
 * Places the images of the smoke.
 */
function placeSmoke() {
    push();
    // The smoke
    imageMode(CENTER);
    image(smokeImg, 175, smokeImgY, 28, 100);
    pop();

    // Move the smoke
    push();
    smokeImgY -= 0.5;
    pop();

    if (smokeImgY < 0) {
        smokeImgY = 400;
    };
};

/**
 * Creates the sun.
 */
function drawSun() {
    push();
    stroke(sun.stroke);
    strokeWeight(sun.strokeWeight);
    // Uses mouse's X to determine the green.
    fill(sun.fill.red, mouseX, sun.fill.blue);
    ellipse(width, sun.y, sun.size.width, sun.size.height);
    pop();
};

/**
 * Creates the grass.
 */
function drawGrass() {
    push();
    fill(grass.fill);
    stroke(grass.stroke);
    strokeWeight(grass.strokeWeight);
    rect(grass.x, height * 0.75, width, height * 0.25);
    pop();
};

/**
 * Places Brigitte the cat where the mouse is.
 */
function placeBrigitte() {
    push();
    imageMode(CENTER);
    image(brigitteImage, mouseX, mouseY, brigitteWidth, brigitteHeight);
    pop();
};

/**
 * Creates the face.
 */
function drawFace() {
    drawHead();
    placeDents();
    // drawNose();
    // drawEars();
    // drawEyes();
};

/**
 * Draws the head.
 */
function drawHead() {
    push();
    stroke(face.head.stroke);
    strokeWeight(face.head.strokeWeight);
    fill(face.head.fill);
    ellipse(face.head.x, face.head.y, face.head.width, face.head.height);
    pop();
};

/**
 * Places the teeth.
 */
function placeDents() {
    push();
    imageMode(CENTER);
    image(dentsImage, face.head.x, face.head.y + 40, dentsWidth, dentsHeight);
    pop();
};

/**
 * Draws the text.
 */
function drawText() {
    textSize(textSized);
    fill(textFill);
    stroke(textStroke);
    strokeWeight(textStrokeWeight);
    text('Hi, I am Nou Noune', 50, 50);
}