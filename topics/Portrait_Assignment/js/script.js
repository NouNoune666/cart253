/**
 * Title: Self portrait in code
 * Nou Noune
 * 
 * Here's me!
 */

"use strict";

// Why undefined??? VARIABLE
let starImage = undefined;
let smoke1Image = undefined;
let smoke2Image = undefined;
let brigitteImage = undefined;
let dentsImage = undefined;

/** 
 * Preloads the images. FUNCTION
 */
function preload() {
    // Loads stars and smoke.
    starImage = loadImage("assets/images/star.png");
    smoke1Image = loadImage("assets/images/smoke_01.png");
    smoke2Image = loadImage("assets/images/smoke_02.png");
    brigitteImage = loadImage("assets/images/brigitte.png");
    dentsImage = loadImage("assets/images/dents.png");
}

/** 
 * Creates canvas. FUNCTION
 */
function setup() {
    // Creates our canvas.
    createCanvas(600, 500);
}

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
}

/**
 * Creates my portrait.
 */
function draw() {
    drawBackground();
    placeBrigitte();
    drawFace();
    placeDents();
    drawText();
}

/**
 * Creates the background (everything but the face).
 */
function drawBackground() {
    drawSky();
    drawMountains();
    placeStars();
    drawChalet();
    drawSun();
    drawGrass();
}

/**
 * Creates the sky.
 */
function drawSky() {
    // Makes the sky dark blue.
    background(0, 30, 60);
}

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
}

/**
 * Places the stars (images).
 */
function placeStars() {
    // Determines position of each star using it's center.
    push();
    imageMode(CENTER);
    image(starImage, width * 0.10, height * 0.10, 60, 60);
    image(starImage, width * 0.20, height * 0.30, 60, 60);
    image(starImage, width * 0.30, height * 0.10, 60, 60);
    image(starImage, width * 0.40, height * 0.30, 60, 60);
    image(starImage, width * 0.50, height * 0.10, 60, 60);
    image(starImage, width * 0.60, height * 0.30, 60, 60);
    image(starImage, width * 0.70, height * 0.10, 60, 60);
    image(starImage, width * 0.80, height * 0.30, 60, 60);
    image(starImage, width * 0.90, height * 0.10, 60, 60);
    pop();

}

/**
 * Creates chalet.
 */
function drawChalet() {
    //Calls to placeSmoke function
    placeSmoke();
    // Creates the body part of the house.
    push();
    fill("#855959");
    stroke("#574646ff");
    strokeWeight(4);
    rect(145, 240, 40, 40);
    pop();
    // Creates the chimney of the house.
    push();
    fill("#F05B5B");
    stroke("#ae6161ff");
    rect(169, 215, 10, 15);
    pop();
    // Creates the roof of the house.
    push();
    fill("#F05B5B");
    stroke("#ae6161ff")
    strokeWeight(4);
    triangle(144, 240, 164, 215, 186, 240);
    pop();
    // Creates the door of the house.
    push();
    fill("#F05B5B");
    stroke("#ae6161ff");
    rect(158.3, 250, 13.3, 28);
    pop();
}

/**
 * Places the images of the smoke.
 */
function placeSmoke() {
    push();
    // Smoke 1
    imageMode(CENTER);
    image(smoke1Image, 175, 200, 30, 30);
    // Smoke 2
    image(smoke2Image, 178, 165, 30, 30);
    // Smoke 1
    image(smoke1Image, 175, 130, 30, 30);
    // Smoke 2
    image(smoke2Image, 178, 95, 30, 30);
    // Smoke 1
    image(smoke1Image, 175, 60, 30, 30);
    // Smoke 2
    image(smoke2Image, 178, 25, 30, 30);
    pop();
}

/**
 * Creates the sun.
 */
function drawSun() {
    push();
    stroke("#574646ff");
    strokeWeight(4);
    // Uses mouse's X to determine the green.
    fill(255, mouseX, 70);
    ellipse(width, height - height, 300, 290);
    pop();
}

/**
 * Creates the grass.
 */
function drawGrass() {
    push();
    fill("#22e329ff");
    stroke("#386949ff");
    strokeWeight(4);
    rect(0, height * 0.85, width, height * 0.25);
    pop();
}

/**
 * Places Brigitte the cat where the mouse is.
 */
function placeBrigitte() {
    push();
    imageMode(CENTER);
    image(brigitteImage, mouseX, mouseY, 60, 60);
    pop();
}

/**
 * Creates the face.
 */
function drawFace() {
    drawHead();
    // drawNose();
    // drawEars();
    // drawEyes();
}

/**
 * Draws the head.
 */
function drawHead() {
    push();
    stroke("#997C7D");
    strokeWeight(4);
    fill("#f3b4b6ff");
    ellipse(450, 400, 220, 275)
    pop();
}

/**
 * Places the teeth.
 */
function placeDents() {
    push();
    imageMode(CENTER);
    image(dentsImage, 450, 420, 150, 150);
    pop();
}

/**
 * Draws the text.
 */
function drawText() {
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text('hi', 50, 50);
}