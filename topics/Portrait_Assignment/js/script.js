/**
 * Title: Self portrait in code
 * Nou Noune (Amélie Barrette)
 * 
 * Here's a self portrait with things I enjoy: my grandmother's cottage, outdoors,starry nights, Sims-related stuff and Brigitte the cat. Also features my real teeth. There's some interactivity so have fun!
 * 
 * Controls:
 * - click on mouth to activate sound
 * - release mouse to stop sound
 * 
 * Uses:
 * p5.js
 * https://p5js.org
 */

"use strict";

// VARIABLES AND OBJECTS (っ ᵔ◡ᵔ)っ

// Katy Perry simlish cover audio.
let mySound;

// The blue sky.
let sky = {
    color: {
        red: 0,
        green: 30,
        blue: 60,
    }
};

// The two mountains.
let mountain = {
    one: {
        fill: "#22e329ff",
        stroke: "#386949ff",
        strokeWeight: 4,
        x1: 600 * 0.10,
        y1: 500 * 0.85,
        x2: 600 * 0.27,
        y2: 500 * 0.5,
        x3: 600 * 0.50,
        y3: 500 * 0.85,
    },
    two: {
        fill: "#22e329ff",
        stroke: "#386949ff",
        strokeWeight: 4,
        x1: 600 * 0.25,
        y1: 500 * 0.85,
        x2: 600 * 0.37,
        y2: 500 * 0.6,
        x3: 600 * 0.58,
        y3: 500 * 0.85,

    },
};

// The stars (image).
let starImage = undefined;
let starWidth = 60;
let starHeight = 60;

// The chalet.
let chalet = {
    body: {
        fill: "#855959",
        stroke: "#574646ff",
        strokeWeight: 4,
        x: 145,
        y: 240,
        size: {
            width: 40,
            height: 40,
        },
    },
    chimney: {
        fill: "#F05B5B",
        stroke: "#ae6161ff",
        x: 169,
        y: 215,
        size: {
            width: 10,
            height: 15,
        },
    },
    roof: {
        fill: "#F05B5B",
        stroke: "#ae6161ff",
        strokeWeight: 4,
        x1: 144,
        y1: 240,
        x2: 164,
        y2: 215,
        x3: 186,
        y3: 240,
    },
    door: {
        fill: "#F05B5B",
        stroke: "#ae6161ff",
        x: 158.3,
        y: 250,
        size: {
            width: 13.3,
            height: 28,
        },
    },
}

// The sun.
let sun = {
    stroke: "#574646ff",
    strokeWeight: 4,
    fill: {
        red: 240,
        green: 0, // This property will change later on...
        blue: 80,
    },
    x: undefined,
    y: 0,
    size: {
        width: 300,
        height: 290,
    },
}

// The green grass.
let grass = {
    fill: "#22e329ff",
    stroke: "#386949ff",
    strokeWeight: 4,
    x: 0,
    y: undefined, // This property will be based on the canvas' Y.
    size: {
        width: undefined,
        height: undefined,
    },
}

// Brigitte the cat (image).
let brigitteImage = undefined;
let brigitteWidth = 60;
let brigitteHeight = 60;

// The face.
let face = {
    head: {
        stroke: "#997C7D",
        strokeWeight: 4,
        fill: "#f3b4b6ff",
        x: 450,
        y: 310,
        width: 220,
        height: 275,
    },
    eyes: {
        pupil: {
            stroke: "#434343ff",
            strokeWeight: 4,
            fill: "#000000ff",
            width: 20,
            height: 20,
            left: {
                x: 415,
                y: 260,
            },
            right: {
                x: 485,
                y: 260,
            },

        },
        iris: {
            stroke: "#537d9bff",
            strokeWeight: 4,
            fill: "#4BB3FE",
            width: 55,
            height: 50,
            left: {
                x: 415,
                y: 260,
            },
            right: {
                x: 485,
                y: 260,
            },

        },
    },
};

// The neck.
let neck = {
    x: 420,
    y: 440,
    width: 60,
    height: 100,
}

// The ears.
let ears = {
    width: 30,
    height: 45,
};

// Stars in the eyes (image).
let eyestarImage = undefined;
let eyestarWidth = 40;
let eyestarHeight = 40;
let eyestarRightX = 485; // Right eye.
let eyestarRightY = 255; // Right eye.
let eyestarLeftX = 410; // Left eye.
let eyestarLeftY = 255; // Left eye.

// The teeth (image).
let dentsImage = undefined;
let dentsX = face.head.x;
let dentsY = face.head.y;
let dentsWidth = 150;
let dentsHeight = 150;

// The hair and it's border (images).
let hairImage = undefined;
let hairBorderImage = undefined;
let hairImageX = 444;
let hairImageY = 250;
let hairImageWidth = 540;
let hairImageHeight = 490;

// The text.
let textSized = 32;
let textFill = "#001E3C";
let textStroke = "#749ec9ff";
let textStrokeWeight = 2;
let textX = 12;
let textY = 430;

// The smoke (images).
// Smoke 1.
let smokeImage = undefined;
let smokeImageY = 175;
let smokeImageX = 175;
let smokeImageVelocity = 0.7;
let smokeImageWidth = 18;
let smokeImageHeight = 100;
// Smoke 2.
let smokeImage2 = undefined;
let smokeImage2Y = smokeImageY + 200;

// FUNCTIONS 	(っ ᵔ◡ᵔ)っ

/** 
 * Preloads the image and audio files. 
 */
function preload() {
    // Stars.
    starImage = loadImage("assets/images/star.png");
    // Smoke.
    smokeImage = loadImage("assets/images/smoke.png");
    smokeImage2 = loadImage("assets/images/smoke2.png");
    // Brigitte the cat.
    brigitteImage = loadImage("assets/images/brigitte.png");
    // Teeth.
    dentsImage = loadImage("assets/images/dents.png");
    // Eye star.
    eyestarImage = loadImage("assets/images/eyestar.png");
    // Hair and hair "border".
    hairImage = loadImage("assets/images/hair.png");
    hairBorderImage = loadImage("assets/images/hairBorder.png");
    // Audio.
    // soundFormats('mp3', 'ogg');
    console.log("loadingsound")
    mySound = loadSound('assets/audio/KatyPerrySimlish.mp3');
}

/** 
 * Creates canvas. 
 */
function setup() {
    // Creates the canvas.
    createCanvas(600, 500);
}

/**
 * Creates my portrait.
 */
function draw() {
    drawBackground();
    drawFace();
    drawText();
    placeHair();
    placeBrigitte();
}

/**
 * Creates the background (everything but the face).
 */
function drawBackground() {
    drawSky();
    placeSmoke();
    drawMountains();
    placeStars();
    drawChalet();
    drawSun();
    drawGrass();
}

/**
 * Creates the sky.
 */
function drawSky() {
    // Makes the sky dark blue.
    background(sky.color.red, sky.color.green, sky.color.blue);
}

/**
 * Creates the moutains.
 */
function drawMountains() {
    //Mountain 1.
    push();
    fill(mountain.one.fill);
    stroke(mountain.one.stroke);
    strokeWeight(mountain.one.strokeWeight);
    triangle(mountain.one.x1, mountain.one.y1, mountain.one.x2, mountain.one.y2, mountain.one.x3, mountain.one.y3);
    pop();
    // Mountain 2.
    push();
    fill(mountain.two.fill);
    stroke(mountain.two.stroke);
    strokeWeight(mountain.two.strokeWeight);
    triangle(mountain.two.x1, mountain.two.y1, mountain.two.x2, mountain.two.y2, mountain.two.x3, mountain.two.y3);
    pop();
}

/**
 * Places the stars (images).
 */
function placeStars() {
    // Determines position of each star using it's center.
    push();
    imageMode(CENTER);
    image(starImage, width * 0.10, height * 0.20, starWidth, starHeight);
    image(starImage, width * 0.18, height * 0.40, starWidth, starHeight);
    image(starImage, width * 0.30, height * 0.24, starWidth, starHeight);
    image(starImage, width * 0.44, height * 0.40, starWidth, starHeight);
    image(starImage, width * 0.50, height * 0.16, starWidth, starHeight);
    image(starImage, width * 0.60, height * 0.36, starWidth, starHeight);
    image(starImage, width * 0.70, height * 0.10, starWidth, starHeight);
    image(starImage, width * 0.80, height * 0.30, starWidth, starHeight);
    image(starImage, width * 0.95, height * 0.50, starWidth, starHeight);
    pop();
}

/**
 * Creates the chalet.
 */
function drawChalet() {
    // Creates the body part of the house.
    push();
    fill(chalet.body.fill);
    stroke(chalet.body.stroke);
    strokeWeight(chalet.body.strokeWeight);
    rect(chalet.body.x, chalet.body.y, chalet.body.size.width, chalet.body.size.height);
    pop();
    // Creates the chimney of the house.
    push();
    fill(chalet.chimney.fill);
    stroke(chalet.chimney.stroke);
    rect(chalet.chimney.x, chalet.chimney.y, chalet.chimney.size.width, chalet.chimney.size.height);
    pop();
    // Creates the roof of the house.
    push();
    fill(chalet.roof.fill);
    stroke(chalet.roof.stroke);
    strokeWeight(chalet.roof.strokeWeight);
    triangle(chalet.roof.x1, chalet.roof.y1, chalet.roof.x2, chalet.roof.y2, chalet.roof.x3, chalet.roof.y3);
    pop();
    // Creates the door of the house.
    push();
    fill(chalet.door.fill);
    stroke(chalet.door.stroke);
    rect(chalet.door.x, chalet.door.y, chalet.door.size.width, chalet.door.size.height);
    pop();
}

/**
 * Places the images of the smoke and makes them move.
 */
function placeSmoke() {
    push();
    // Smoke 1.
    imageMode(CENTER);
    image(smokeImage, smokeImageX, smokeImageY, smokeImageWidth, smokeImageHeight);
    // Move the smoke.
    smokeImageY -= smokeImageVelocity;
    if (smokeImageY < -50) {
        smokeImageY = 300;
    };
    pop();
    // Smoke 2.
    push();
    imageMode(CENTER);
    image(smokeImage2, smokeImageX, smokeImage2Y, smokeImageWidth, smokeImageHeight);
    // Move the smoke.
    smokeImage2Y -= smokeImageVelocity;
    if (smokeImage2Y < -50) {
        smokeImage2Y = 300;
    };
    pop();
}

/**
 * Creates the sun.
 */
function drawSun() {
    push();
    stroke(sun.stroke);
    strokeWeight(sun.strokeWeight);
    fill(sun.fill.red, sun.fill.green, sun.fill.blue);
    ellipse(width, sun.y, sun.size.width, sun.size.height);
    pop();

    // The sun's green changes over time.
    sun.fill.green += 0.5;
    if (sun.fill.green >= 255) {
        sun.fill.green = 0;
    };

};

/**
 * Creates the grass.
 */
function drawGrass() {
    push();
    fill(grass.fill);
    stroke(grass.stroke);
    strokeWeight(grass.strokeWeight);
    rect(grass.x, height * 0.75, width, height * 0.25);
    pop();
}

/**
 * Places Brigitte the cat where the mouse is.
 */
function placeBrigitte() {
    push();
    imageMode(CENTER);
    image(brigitteImage, mouseX, mouseY, brigitteWidth, brigitteHeight);
    pop();
}

/**
 * Creates the face.
 */
function drawFace() {
    drawNeck();
    drawEars();
    drawHead();
    placeDents();
    drawEyes();
    placeEyestar();
    drawNose();

}

/**
 * Draws the head.
 */
function drawHead() {
    push();
    stroke(face.head.stroke);
    strokeWeight(face.head.strokeWeight);
    fill(face.head.fill);
    ellipse(face.head.x, face.head.y, face.head.width, face.head.height);
    pop();
}

/**
 * Places the teeth and makes them move.
 */
function placeDents() {
    push();
    imageMode(CENTER);
    image(dentsImage, dentsX, dentsY + 60, dentsWidth, dentsHeight);
    pop();

    // Makes teeth Vibrate.
    dentsX += random(-2, 2);
    dentsX = constrain(dentsX, 448, 453);
    dentsY += random(-2, 2);
    dentsY = constrain(dentsY, 308, 313);
}

/**
 * Draws the eyes.
 */
function drawEyes() {
    // Left iris.
    push();
    stroke(face.eyes.iris.stroke);
    strokeWeight(face.eyes.iris.strokeWeight);
    fill(face.eyes.iris.fill);
    ellipse(face.eyes.iris.left.x, face.eyes.iris.left.y, face.eyes.iris.width, face.eyes.iris.height);
    pop();
    // Right iris.
    push();
    stroke(face.eyes.iris.stroke);
    strokeWeight(face.eyes.iris.strokeWeight);
    fill(face.eyes.iris.fill);
    ellipse(face.eyes.iris.right.x, face.eyes.iris.right.y, face.eyes.iris.width, face.eyes.iris.height);
    pop();
    // Left pupil.
    push();
    stroke(face.eyes.pupil.stroke);
    strokeWeight(face.eyes.pupil.strokeWeight);
    fill(face.eyes.pupil.fill);
    ellipse(face.eyes.pupil.left.x, face.eyes.pupil.left.y, face.eyes.pupil.width, face.eyes.pupil.height);
    pop();
    // Right Pupil.
    push();
    stroke(face.eyes.pupil.stroke);
    strokeWeight(face.eyes.pupil.strokeWeight);
    fill(face.eyes.pupil.fill);
    ellipse(face.eyes.pupil.right.x, face.eyes.pupil.right.y, face.eyes.pupil.width, face.eyes.pupil.height);
    pop();

}

/**
 * Places eyestars on both eyes.
 */
function placeEyestar() {
    push();
    imageMode(CENTER);
    // Stars in left eye.
    image(eyestarImage, eyestarLeftX, eyestarLeftY, eyestarWidth, eyestarHeight);
    // Stars in right eye.
    image(eyestarImage, eyestarRightX, eyestarRightY, eyestarWidth, eyestarHeight);
    pop();
}

/**
 * Places the hair and hair border images.
 */
function placeHair() {
    // Hair border.
    push();
    imageMode(CENTER);
    image(hairBorderImage, hairImageX, hairImageY, hairImageWidth + 15, hairImageHeight + 15);
    pop();
    // Main hair.
    push();
    imageMode(CENTER);
    image(hairImage, hairImageX, hairImageY, hairImageWidth, hairImageHeight);
    pop();
}

/**
 * Draws the nose.
 */
function drawNose() {
    push();
    noFill();
    // Tells p5.js to use degrees.
    angleMode(DEGREES);
    arc(face.head.x, face.head.y, 30, 20, 0, 180, OPEN);
    pop();
}

/**
 * Draws the neck.
 */
function drawNeck() {
    push();
    stroke(face.head.stroke);
    strokeWeight(face.head.strokeWeight);
    fill(face.head.fill);
    rect(neck.x, neck.y, neck.width, neck.height);
    pop();
}

/**
 * Draws the ears.
 */
function drawEars() {
    // Right ear.
    push();
    stroke(face.head.stroke);
    strokeWeight(face.head.strokeWeight);
    fill(face.head.fill);
    ellipse(face.head.x + face.head.width / 2, face.head.y, ears.width, ears.height);
    pop();
    // Left ear.
    push();
    stroke(face.head.stroke);
    strokeWeight(face.head.strokeWeight);
    fill(face.head.fill);
    ellipse(face.head.x - face.head.width / 2, face.head.y, ears.width, ears.height);
    pop();
}

/**
 * Draws (or writes?) the text.
 */
function drawText() {
    push();
    textSize(textSized);
    fill(textFill);
    textFont('Courier New');
    stroke(textStroke);
    strokeWeight(textStrokeWeight);
    text('Hi, I am Nou Noune!', textX, textY);
    pop();
    push();
    textSize(textSized);
    fill(textFill);
    textFont('Courier New');
    stroke(textStroke);
    strokeWeight(textStrokeWeight);
    text('╰(*´︶`*)╯', textX + 40, textY + 40);
    pop();

}

/**
 * Plays audio if mouse pressed on mouth.
 *  */
function mousePressed() {
    if (mouseX >= 375 && mouseX <= 525 && mouseY > 330 && mouseY < 390) {
        mySound.play();
    };
}

/**
 * Stops audio if mouse released on mouth.
 *  */
function mouseReleased() {
    if (mouseReleased) {
        mySound.stop();
    };
}

