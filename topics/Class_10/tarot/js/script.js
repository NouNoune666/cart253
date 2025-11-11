/**
 * Tarot
 * Pippin Barr
 * 
 * Some experiments with data representing a Tarot deck
 */

"use strict";

// A global variable to store our data in
let tarot;
// A global variable to store our fortune in
let fortune;

function preload() {
    tarot = loadJSON("assets/data/tarot_interpretations.json");
}
/**
 * tbd.
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    // Choose a random card and random fortune
    let card = random(tarot.tarot_interpretations);
    fortune = random(card.fortune_telling);
    // Why can't you just go in fortune telling directly?
}


/**
 * tbd.
*/
function draw() {
    background(0);


    // Get the first shadow meaning into a variable by following the path through the tarot object
    // let firstShadowMeaning = tarot.tarot_interpretations[1].meanings.light[4];
    //Go inside tarot, then look inside its tarot_interpretations list, grab the first card [0], then open its meanings, then its shadow list, and finally get the first phrase [0].

    // Display the meaning

}

function mousePressed() {
    drawFortune();

}
function drawFortune() {
    push();
    textSize(18);
    textAlign(CENTER);
    fill(255, 255, 0);
    text(fortune, width / 2, height / 2);
    pop();
    randomSeed(1);
}

