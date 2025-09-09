/**
 * Drawing Module
 * Nou Noune (Module)
 * 
 * Practicing and learning drawing functions in p5
 */

"use strict";

/**
 * A simple square canvas.
*/
function setup() {
createCanvas(640, 640,);
}


/**
 * A colorful design.
*/
function draw() {
    background(0, 240, 0)

    push()
    fill(106, 212, 205)
    stroke(255)
    ellipse(320, 320, 400, 480)
    pop()

    push()
    fill(106, 212, 205)
    stroke(255)
    rect(30, 20, 55, 55)
    pop()
}