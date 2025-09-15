/**
 * Introducing variables
 * Nou Noune (Amélie Barrette)
 * 
 * Learning about variables for class 3!
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
    createCanvas(1000,10000);
}


/**
 * Draws circle in the centre of the canva
*/
function draw() {
background(0)

    //Draw the circle
    push();
    fill(255,255,0);
    noStroke();
    ellipse(width/2, height/2,100,100)
    pop();
}