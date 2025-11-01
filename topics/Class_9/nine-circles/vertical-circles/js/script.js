/**
 * Vertical circles
 * Nou Noune
 * 
 * Draws a series of circles from the top to the bottom of the canvas.
 * Arguably not in the most efficient way.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw circles from the top to the bottom of the canvas
 */
function draw() {
    background(0);

    let x = width / 2;
    let startY = 0;
    let diameter = 50;

    for (let i = 0; i < 9; i++) {
        let y = startY + i * diameter;
        ellipse(x, y, diameter);
    }


    // Draw a series of 50-pixel diameter circles
    // Starting at the top of the canvas
    // And ending at the bottom
    // ellipse(200, 0, 50);
    // ellipse(200, 50, 50);
    // ellipse(200, 100, 50);
    // ellipse(200, 150, 50);
    // ellipse(200, 200, 50);
    // ellipse(200, 250, 50);
    // ellipse(200, 300, 50);
    // ellipse(200, 350, 50);
    // ellipse(200, 400, 50);
}