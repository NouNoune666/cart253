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
    drawSun();
    drawBirds();

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
   drawDoor();
}

function drawRoof() {
    push();
    fill("#d62700");
    noStroke();
    triangle(440, 180, 510, 180, 475, 150);
    pop();
}
function drawBodyHouse() {
    push();
    fill("#b07d53");
    noStroke();
    rect(440, 180, 70, 50)
    pop();
}
function drawDoor() {
    push();
    fill("#d62700");
    noStroke();
    rect(470, 210, 10, 20)
    pop();
}

function drawSun() {
    push();
    fill("yellow");
    noStroke();
    ellipse(300, 100, 75,);
    pop();
}
function drawBirds() {
    drawWingLeft1();
    drawWingRight1();
    drawWingLeft2();
    drawWingRight2();
}

function drawWingLeft1() {
    push();
    stroke("black");
    line(50, 50, 60, 60)
    pop();
}

function drawWingRight1() {
    push();
    stroke("black");
    line(60, 60, 70, 50)
    pop();
}

function drawWingLeft2() {
    push();
    stroke("black");
    line(80, 80, 90, 90)
    pop();
}

function drawWingRight2() {
    push();
    stroke("black");
    line(90, 90, 100, 80)
    pop();
}