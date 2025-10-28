/**
 * Flies flies
 * Pippin Barr
 * 
 * A program for drawing flies on the canvas. The flies are stored
 * in an array. We display them with a for...of loop
 */

"use strict";

// Our array of flies (specifically "fly data" really)
// Each fly has a position and a size
let flies = [
    {
        x: 100,
        y: 125,
        size: 10,
        // NEW
        buzziness: 4,
        fill: 'blue',
    },
    {
        x: 160,
        y: 170,
        size: 14,
        // NEW
        buzziness: 2,
        fill: 'pink',
    },
    {
        x: 180,
        y: 50,
        size: 5,
        // NEW
        buzziness: 3,
        fill: 'purple',
    },
    {
        x: 100,
        y: 125,
        size: 20,
        // NEW
        buzziness: 2,
        fill: 'yellow',
    },
];

/**
 * Create the canvas
 */
function setup() {
    // Let's make it tiny for some reason
    createCanvas(200, 200);
}

/**
 * Display the flies in the array
 */
function draw() {
    background("#87ceed");

    // Go through all the flies
    for (let fly of flies) {
        moveFly(fly);
        drawFly(fly);
    }
}

/**
 * Draws the provided fly to the canvas
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(fly.fill);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Moves the fly by changing its position randomly
 * according to its buzziness
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}