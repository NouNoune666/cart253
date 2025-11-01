/**
 * Gradiant
 * Nou Noune
 */

"use strict";

/**
 * 
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * 
*/
function draw() {
    background(0);

    for (let x = 0; x <= width; x += 8) {
        push();
        let strokeColour = map(x, 0, width, 0, 255);
        stroke(strokeColour);
        // angleMode(DEGREES);
        // rotate(3);
        translate(100, 200);
        line(x, 0, x, height);
        pop();
    }
}