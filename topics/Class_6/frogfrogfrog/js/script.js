/**
 * Frogfrogfrog
 * Nou Noune
 * 
 * A game of catching frog with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our frog
const frog = {
    // Frog's body
    body: {
        x: 320,
        y: 500,
        size: 150,
    },
    // Frog's tongue
    tongue: {
        x: undefined, // will match body
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue will move each phrase
        state: "idle", // State can be idle, outbound, inbound
    },

};

// The fly
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3,

};

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // Give the fly its first random position
    resetFly();
}

/**
 * Draws everything (background, fly, frog and tongue)
 */
function draw() {
    background("blue");
    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();
}

/**
 * Moves the fly according to speed and resets it if it gets all the way to the right
 */
function moveFly() {
    fly.x += fly.speed;
    // Handle the fly going off canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("black");
    ellipse(fly.x, fly.y, fly.size)
    pop();

}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * Moves the frogs
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draws the tongue (tip)
    push();
    noStroke();
    fill("red");
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size)
    pop();

    // Draw the rest of the tongue
    push();
    stroke("red");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y)
    pop();

    // Draws the frog's body
    push();
    noStroke();
    fill("green");
    ellipse(frog.body.x, frog.body.y, frog.body.size)
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        // Resets the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

/**
 * Launches tongue on click if not launched yet
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}



