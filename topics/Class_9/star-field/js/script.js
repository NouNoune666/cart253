/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Number of stars displayed
const NUM_STARS = 10000;

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}


/**
 * Creates background and stars
 */
function draw() {
    background(15);

    // randomSeed() allows us to make random() more predictable
    // When we set the random seed we make it so that all the
    // random() functions we call from here will have the same
    // (random) return values in a sequence
    // (Try removing it and seeing what happens!)
    randomSeed(1);

    for (let i = 0; i < NUM_STARS; i++) {
        drawStar();
    }
    // Once we get here (with the for-loop done) we will have
    // drawn NUM_STARS stars.
}

/** 
 * Draws a star at a random position
 */

function drawStar() {
    push();
    const x = random(0, width);
    const y = random(0, height);
    const diameter = random(2, 5);
    const color = random(10, 200);
    fill(color);
    ellipse(x, y, diameter);
    pop();

}