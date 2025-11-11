/**
 * 3d Model exploration
 * 
 * Nou Noune
 */

"use strict";


let frog;
let material;
let cam;
let delta = 0.001;

let froggy = {
    x: 0, // will change
    y: 0, // will change
    z: 0, // will change
    speed: 2,
};

function preload() {
    frog = loadModel('assets/images/frog.obj', true)
    material = loadImage('assets/images/frog_diff.jpg')
}

function setup() {
    createCanvas(1000, 1000, WEBGL);
    cam = createCamera();
    cam.setPosition(0, -400, 800);
    cam.lookAt(0, 0, 0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('pink');
    orbitControl();

    noStroke();
    texture(material);

    translate(froggy.x, froggy.y, froggy.z);
    scale(2);
    model(frog);

    cursor(CROSS);

    console.log(froggy.x);

    // froggy.x += froggy.speed;
    // froggy.y += froggy.speed;
    // froggy.z += froggy.speed;
    push();
    // Turn the camera left and right, called "panning".
    cam.pan(delta);

    // Switch directions every 120 frames.
    if (frameCount % 120 === 0) {
        delta *= -1;
    }
    pop();
}
