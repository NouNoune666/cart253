/**
 * Introducing Events
 * Nou Noune
 * 
 * Taking a look at how events work in JavaScript and p5.
 */

"use strict";

/**
 * Creates the canvas, black.
*/
function setup() {
    createCanvas(800, 800);
    background(0);
}


/**
 * Draws circle at mouse location.
*/
function draw() {

}

function mousePressed() {
    push();
    noStroke();
    fill("#EF8396");
    ellipse(mouseX, mouseY, 50);
    pop();
}

if (keyIsPressed) {
    background = background(255),
}