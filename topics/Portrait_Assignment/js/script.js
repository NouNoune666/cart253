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

let starImage = undefined;

function preload() {
    // This is how you load an image!
    // Note that loadImage() needs the PATH to your image inside your project
    // Note that the path is CASE SENSITIVE
    // Note that the filename is CASE SENSITIVE
    // Note the QUOTE MARKS around the path
    starImage = loadImage("assets/images/1_étoile.png");

}
/**
 * Creates my portrait.
 */

function draw() {
    background(0, 30, 60);

    // Draws grass
    push();
    fill("#1ED760");
    stroke("#386949ff");
    strokeWeight(4);
    rect(0, height * 0.85, width, height * 0.25);
    pop();

    // Draws the stars
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

    // Draws the moutains
    //Moutain 1
    push();
    fill("#966638ff");
    stroke("#5a4531ff");
    strokeWeight(4);
    triangle(width * 0.10, height * 0.85, width * 0.27, height * 0.5, width * 0.50, height * 0.85);
    pop();
    // Moutain 2
    push();
    fill("#966638ff");
    stroke("#5a4531ff");
    strokeWeight(4);
    triangle(width * 0.10, height * 0.85, width * 0.27, height * 0.5, width * 0.50, height * 0.85);
    pop();
}