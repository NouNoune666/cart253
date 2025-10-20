/**
 * Buzzy the parameter
 * Nou Noune
 * 
 * A fly that buzzes around on the canvas
 */

"use strict";

// Our fly that will buzz around
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 30,
    buzziness: 4
};

let bussyTheFly = {
    x: 300,
    y: 250,
    size: 20,
    buzziness: 9
};

/**
 * Create a canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");

    // Move buzzy
    moveFly(buzzyTheFly);
    moveFly(bussyTheFly);

    // Draw buzzy
    drawfly(buzzyTheFly);
    drawfly(bussyTheFly);
}

function moveFly(thing) {
    thing.x += random(-thing.buzziness, thing.buzziness);
    thing.y += random(-thing.buzziness, thing.buzziness);
}

function drawfly(thing) {
    push();
    noStroke();
    fill(0);
    ellipse(thing.x, thing.y, thing.size);
    pop();
}
