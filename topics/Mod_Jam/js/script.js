/**
 * Frogfrogfrog (modified)
 * Nou Noune (Amélie Barrette)
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";


// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: undefined,
        y: undefined,
        size: 150,
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 30,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

let flies = []; // Empty list of fly quantity, array

let MENU = 0;
let menu;
// let font;
let hoverSound;
let frogImage;

function preload() {
    // font = loadFont('/assets/fonts/Jersey20-Regular.otf');
    hoverSound = loadSound('/assets/sounds/hover.wav');
    frogImage = loadImage('/assets/images/frog.png');
}

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(1200, 800);

    // Our flies
    // Has their position, size, and speed of horizontal movement
    for (let i = 0; i < 5; i++) { // Will make 5 flies
        flies.push({
            x: random(width),
            y: random(height - 200),
            size: 10,
            speed: random(2, 5),
        });
    }
    // // Give the fly its first random position
    // resetFlies();

    // Main menu design
    menu = {
        stroke: "black",
        strokeWeight: 10,
        sizeX: width * 0.8,
        sizeY: height * 0.4,
        start: {
            fill: undefined,
            fillRegular: "#FF0000",
            fillHover: "#604242ff",
            x: width * 0.5,
            y: height * 0.25,
        },

        instructions: {
            fill: undefined,
            fillRegular: "#00FF00",
            fillHover: "#3e4d3eff",
            x: width * 0.5,
            y: height * 0.75,
        },
        text: {
            size: 150,
            fill: "black",
            // font: font,
            // fontSize: 100,
            start: {
                x: width / 2,
                y: height * 0.25,
            },
            instructions: {
                x: width / 2,
                y: height * 0.75,
            },
        }
    }
}

/**
 * Sends the user to game or instructions depending on what they click.
 */
function draw() {
    if (MENU === 0) {
        mainMenu();
    }
    else if (MENU === 1) {
        gameMenu();
    }
    else if (MENU === 2) {
        instructionsMenu();
    }

}

/** 
 * Draws the main menu
 */
function mainMenu() {

    background("#87CEEB");
    mouseHover();

    push();
    rectMode(CENTER);
    fill(menu.start.fill);
    stroke(menu.stroke);
    strokeWeight(menu.strokeWeight);
    rect(menu.start.x, menu.start.y, menu.sizeX, menu.sizeY);
    pop();

    push();
    rectMode(CENTER);
    fill(menu.instructions.fill);
    stroke(menu.stroke);
    strokeWeight(menu.strokeWeight);
    rect(menu.instructions.x, menu.instructions.y, menu.sizeX, menu.sizeY);
    pop();

    push();
    textSize(menu.text.size);
    fill(menu.text.fill);
    // textFont(menu.text.font, menu.text.size);
    textFont('Courier New');
    textAlign(CENTER, CENTER);
    text('START', menu.text.start.x, menu.text.start.y);
    text('INSTRUCTIONS', menu.text.instructions.x, menu.text.instructions.y);
    pop();
}

/**
 * When the mouse hovers over the 'start' or 'instructions' squares, those squares become darker.
 */
function mouseHover() {
    if (MENU == 0) {
        if (mouseX < 1080 && mouseX > 120 && mouseY < 360 && mouseY > 40) {
            menu.start.fill = menu.start.fillHover
        }
        else {
            menu.start.fill = menu.start.fillRegular
        }
    }

    if (MENU == 0) {
        if (mouseX < 1080 && mouseX > 120 && mouseY < 760 && mouseY > 440) {
            menu.instructions.fill = menu.instructions.fillHover
        }
        else {
            menu.instructions.fill = menu.instructions.fillRegular
        }
    }
}

/**
 * On the main menu, brings the user to the instructions page or the game page.
 */
function mouseClicked() {
    if (MENU == 0) {
        if (mouseX < 1080 && mouseX > 120) {
            if (mouseY < 360 && mouseY > 40) {
                MENU = 1
            }
            if (mouseY < 760 && mouseY > 440) {
                MENU = 2
            }
        }
    }
}

/**
 * The game itself.
 */
function gameMenu() {
    background("#87ceeb");
    moveFlies();
    drawFlies();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();
}

function instructionsMenu() {
    background("#87CEEB");

    push();
    textSize(50);
    fill('black');
    textFont(font);
    textAlign(CENTER, CENTER);
    text('use WASD to move the frog', width / 2, 100);
    text('use arrow up and arrow down to control', width / 2, 200);
    text('the tongue and eat the flies', width / 2, 250);
    text('do not eat the poisonous flies', width / 2, 350);
    text('do not let the frog get too hungry or too full', width / 2, 500);
    text('play with sound', width / 2, 600);
    text('Have fun!', width / 2, 700);
    pop();
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */

function moveFlies() {
    for (let i = 0; i < flies.length; i++) {
        flies[i].x += flies[i].speed;

        // Resets fly if it goes off screen
        if (flies[i].x > width) {
            resetFlies();
        }
    }
}


// function moveFly() {
//     // Move the fly
//     flyY[0] = 42;
//     fly.x += random(2, 10);
//     // Handle the fly going off the canvas
//     if (fly.x > width) {
//         resetFly();
//     }
// }

/**
 * Draws the fly as a black circle
 */
function drawFlies() {

    push();
    noStroke();
    fill("#000000");
    ellipse(flies[i].x, flies[i].y, flies[i].size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFlies() {
    flies[i].x = 0;
    flies[i].y = random(0, height - 100);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
    frog.body.y = mouseY;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Matches frog's y so that it doesn't drag
        frog.tongue.y = frog.body.y
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= frog.body.y) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    imageMode(CENTER);
    image(frogImage, frog.body.x, frog.body.y, frog.body.size, frog.body.size)
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, flies.x, flies.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + flies.size / 2);
    if (eaten) {
        // Reset the fly
        resetFlies();
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}

