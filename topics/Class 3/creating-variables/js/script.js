/**
 * Creating sick variables
 * Amélie Barrette (Nou Noune)
 * 
 * A project in which I create variables!
 */

"use strict";

let cheeseRed = 255;
let cheeseGreen = 255;
let cheeseBlue = 0;

let holeSize = 120;
let holeShade = 0;
let holeX = 140;
let holeY = 175;

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(480,480)
}

/**
 * Draws a hole in a piece of cheese
*/
function draw() {
    // The cheese
    background(cheeseRed,cheeseGreen,cheeseBlue)

    // The hole
    push();
    noStroke();
    fill(holeShade);
    ellipse(holeX,holeY,holeSize)
    pop();
}