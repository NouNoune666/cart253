/**
 * Title: Self portrait in code
 * Nou Noune
 * 
 * Here's me!
 */

"use strict";

/** 
 * Creates canvas.
 */

function setup() {
    createCanvas(600, 500)
}

/**
 * Creates my portrait.
 */

function draw() {
    background(0,30,60)

    push()
    fill("#1ED760")
    noStroke()
    rect(0, 300, 400, 100)
    pop()


}