/**
 * The blank page
 * Nou Noune (Amélie Barrette)
 * 
 * An exploration of the existential angst of a novelist
 * who must sit down at their purple desk and confront the
 * abyss that is the blank page of paper.
 * 
 * The program is non-interactive to convey the inability
 * to get started on the project. Try typing! Just try it!
 */

"use strict";

/**
 * Creates the canvas.
 */
function setup() {
    // Create the canvas at a standard resolution.
    createCanvas(640, 480);
}

/**
 * Draw's the writer's desktop and a blank piece of paper
 */
function draw() {
    // The purple desktop
    background(219, 18, 244);
    // The blank piece of paper
    rect(200, 80, 240, 320);
}