/**
 * Introducing variables
 * Nou Noune (Amélie Barrette)
 * 
 * Learning about variables for class 3!
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
    createCanvas(400,400);
}


/**
 * Draws circle in the centre of the canva
*/
function draw() {
background(0)

    //Draw the circle
    push();
    fill(255,255,0);
    noStroke();
    rect(width/2,height/2,100,100)
    pop();

    //Creates texte
    textSize(32);
    fill('pink');
    stroke(0);
    strokeWeight(4);
    text('hi', 50, 50);
}