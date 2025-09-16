/**
 * Mr. Furious
 * Nou Noune and Ray
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  },
  rage:0 //In the range of 0...1
};

// Our friend the sky
    //Colour
    let sky= {
        fill: {
            r: 160,
            g: 180,
            b: 200
        }
    
}

// Our friend the bird
let bird = {
    //Position and size
    x: 0,
    y: 150,
    size: 25,

    //Colour
    fill: 255
}
    


/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(sky.fill.r, sky.fill.g, sky.fill.b);

   // mrFurious.rage += 0.1
   // const colorChange = map(mrFurious.rage, 0, 1, 255, 0)
  //Make Mr.furious more and more red!
    mrFurious.fill.g += -1
    mrFurious.fill.b += -1

 //Make the sky darker
    sky.fill.r += -1
    sky.fill.g += -1
    sky.fill.b += -1

 // Move the bird
    bird.x += 2

 // Make Mr. Furious vibrate
    mrFurious.x += random(-10,10);
    mrFurious.x = constrain(mrFurious.x, 190, 210)

    mrFurious.y += random(-10,10);
    mrFurious.y = constrain(mrFurious.y, 190, 210)

 // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();

 // Draw the bird
  push();
  noStroke();   
  fill (bird.fill);
  ellipse(bird.x, bird.y, bird.size)
  pop();



}