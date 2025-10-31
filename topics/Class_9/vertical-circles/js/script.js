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

    let x = 0;
    let y = 0;
    let diameter = 10;

    while (y <= height) {
        ellipse(x, y, diameter);
        y += diameter;
        x += diameter;
    }
}