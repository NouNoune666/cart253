/**
 * Title: Self portrait in code
 * Nou Noune
 * 
 * Here's me!
 */

"use strict";

/** 
 * Creates canvas.
 */

function setup() {
    createCanvas(600, 500)
}

// Why undefined???
let starImage = undefined;
let smoke1Image = undefined;
let smoke2Image = undefined;

/** 
 * Creates canvas.
 */
function preload() {
    // Loads the images (stars and smoke)
    starImage = loadImage("assets/images/1_étoile.png");
    smoke1Image = loadImage("assets/images/smoke_01.png");
    smoke2Image = loadImage("assets/images/smoke_02.png");
}

/**
 * Creates my portrait.
 */

function draw() {
    background(0, 30, 60);

    // Draws grass
    push();
    fill("#22e329ff");
    stroke("#386949ff");
    strokeWeight(4);
    rect(0, height * 0.85, width, height * 0.25);
    pop();

    // Places image of the smoke (lines)
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

    // Places images of the stars
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


    // Draws the mountains
    //Mountain 1
    push();
    fill("#22e329ff");
    stroke("#386949ff");
    strokeWeight(4);
    triangle(width * 0.10, height * 0.85, width * 0.27, height * 0.5, width * 0.50, height * 0.85);
    pop();
    // Moutain 2
    push();
    fill("#22e329ff");
    stroke("#386949ff");
    strokeWeight(4);
    triangle(width * 0.25, height * 0.85, width * 0.37, height * 0.6, width * 0.58, height * 0.85);
    pop();

    // Draws the chalet
    // Draws the main part of the house
    push();
    fill("#855959");
    stroke("#574646ff");
    strokeWeight(4);
    rect(145, 240, 40, 40);
    pop();
    // Draws the chimney of the house
    push();
    fill("#F05B5B");
    stroke("#ae6161ff");
    rect(169, 215, 10, 15);
    pop();
    // Draws the roof of the house
    push();
    fill("#F05B5B");
    stroke("#ae6161ff")
    strokeWeight(4);
    triangle(144, 240, 164, 215, 186, 240);
    pop();
    // Draws the door of the house
    push();
    fill("#F05B5B");
    stroke("#ae6161ff");
    rect(158.3, 250, 13.3, 28);
    pop();



}