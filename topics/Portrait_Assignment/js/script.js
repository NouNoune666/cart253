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
    background(0,30,60);

    push();
    fill("#1ED760");
    noStroke();
    rect(0, 2 * height / 3, width, height / 3);
    pop();

    push();
    imageMode(CENTER);
    // Now the CENTER of the star image will be at (100, 50)
    image(starImage, 100, 50);
    pop();

    push();
    imageMode(CENTER);
    // Now the CENTER of the star image will be at (100, 50)
    image(starImage, 110, 70);
    pop();

    push();
    fill("#1ED760");
    noStroke();
    ellipse(width/4, 300, 100, 100);
    pop();
}