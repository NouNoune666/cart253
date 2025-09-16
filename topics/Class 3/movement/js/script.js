/**
 * Movement
 * Nou Noune
 * 
 * Experimenting with movement
 */

"use strict";

let bird = {
    x: 120,
    y: 460,
    size: 50,
};

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(640, 480);
}


/**
 * Move the bird and display it
*/
function draw() {
    background(0);

    //Move the bird
    bird.x = bird.x + 1;
    bird.y = bird.y - 5;
    

    //Draw the bird
    push();
    fill('pink');
    noStroke();
    rect(bird.x, bird.y, bird.size);
    pop();

}