/**
 * Creating sick variables
 * Amélie Barrette (Nou)
 * 
 * A project in which I create variables!
 */

"use strict";

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
    background(255,255,0)

    // The hole
    push();
    noStroke();
    fill(0);
    ellipse(140,175,180)
}