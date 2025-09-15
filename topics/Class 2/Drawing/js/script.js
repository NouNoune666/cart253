/**
 * Drawing Module
 * Nou Noune (Module)
 * 
 * Practicing and learning drawing functions in p5
 */

"use strict";

/**
 * Creates canvas.
*/
function setup() {
createCanvas(640, 640,);
}


/**
 * Creates colorful shapes
*/
function draw() {
    background(0, 240, 0)

    push()
    fill(106, 212, 205)
    stroke(255)
    ellipse(320, 320, 400, 480)
    pop()

    // The rectangle
    push()
    fill(106, 212, 205)
    stroke(255)
    rect(30, 20, 55, 55)
    pop()

    push()
    fill(106, 212, 205)
    noStroke()
    ellipse(400, 400, 140, 20)
    pop ()

    push()
    fill(106, 212, 205)
    noStroke()
    ellipse(100, 200, 140, 30)
    pop ()
}