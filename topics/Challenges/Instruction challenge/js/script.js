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
    drawMountain();
    drawHouse();

}

function drawLand() {
    push();
    fill("#8cdb72");
    noStroke();
    rect(0,230,600,170);
    pop();
}

function drawMountain() {
    push();
    fill("#969696");
    noStroke();
    triangle(75, 230, 320, 230, 197, 75);
    pop();
}

function drawHouse() {
   drawRoof();
   drawBodyHouse();
}

function drawRoof() {
    push();
    fill("#d62700");
    noStroke();
    triangle(440, 180, 510, 180, 475, 150);
    pop();
}