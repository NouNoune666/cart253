/**
 * 3d Model exploration
 * 
 * Nou Noune
 */

"use strict";

let cat;
// let catUV;


function preload() {
    cat = loadModel('assets/images/CatModel.obj', true);
    // catUV = loadImage('assets/images/Cat_diffuse.jpg');
}

function setup() {
    createCanvas(500, 500, WEBGL);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('pink');
    orbitControl();
    // texture(catUV);
    model(cat);

    cursor(CROSS);
}