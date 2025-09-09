/**
 * Instructions challenge
 * Amélie Barrette and Ray Hernaez
 * 
 * A fun in class landscape challenge!
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas (600,400);


}


/**
 * Draws the landscape
*/
function draw() {
    // Blue background (sky)
    background("#72bddb");

    drawLand();

}

function drawLand() {
    push();
    fill("#8cdb72");
    noStroke();
    rect(0,230,600,170);
    pop();
}