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
        speed: 10,
        // Determines how the tongue moves each frame
        state: "idle", // State can be: idle, outbound, inbound
        maxY: 75,

    }
};

const fly1 = {
    x: 0,
    y: 300,
    Rx: {
        min: 0,
        max: 600,
    },
    Ry: {
        min: 0,
        max: 800,  // Will be random
    },
    size: 15,
    Speed: undefined,
    Rspeed: {
        min: 2,
        max: 10,
    }

};

const fly2 = {
    x: 0,
    y: 300,
    // Rx: {
    //     min: 0,
    //     max: 600,
    // },
    Ry: {
        min: 0,
        max: 800,  // Will be random
    },
    size: 16,
    Speed: undefined,
    Rspeed: {
        min: 2,
        max: 10,
    }

};

const fly3 = {
    x: 0,
    y: 300,
    Rx: {
        min: 0,
        max: 600,
    },
    Ry: {
        min: 0,
        max: 800,  // Will be random
    },
    size: 17,
    Speed: undefined,
    Rspeed: {
        min: 2,
        max: 10,
    }

};

const fly4 = {
    x: 0,
    y: 300,
    Rx: {
        min: 0,
        max: 600,
    },
    Ry: {
        min: 0,
        max: 800,  // Will be random
    },
    size: 18,
    Speed: undefined,
    Rspeed: {
        min: 2,
        max: 10,
    }

};

const fly5 = {
    x: 0,
    y: 300,
    Rx: {
        min: 0,
        max: 600,
    },
    Ry: {
        min: 0,
        max: 800,  // Will be random
    },
    size: 19,
    Speed: undefined,
    Rspeed: {
        min: 2,
        max: 10,
    }

};

const fly6 = {
    x: 0,
    y: 300,
    Rx: {
        min: 0,
        max: 600,
    },
    Ry: {
        min: 0,
        max: 800,  // Will be random
    },
    size: 25,
    Speed: undefined,
    Rspeed: {
        min: 2,
        max: 10,
    }

};

const badFly1 = {
    x: 0,
    y: 300,
    Rx: {
        min: 0,
        max: 600,
    },
    Ry: {
        min: 0,
        max: 800,  // Will be random
    },
    size: 20,
    Speed: undefined,
    Rspeed: {
        min: 2,
        max: 10,
    }

};

const badFly2 = {
    x: 0,
    y: 300,
    // Rx: {
    //     min: 0,
    //     max: 600,
    // },
    Ry: {
        min: 0,
        max: 800,  // Will be random
    },
    size: 21,
    Speed: undefined,
    Rspeed: {
        min: 2,
        max: 10,
    }

};

const badFly3 = {
    x: 0,
    y: 300,
    // Rx: {
    //     min: 0,
    //     max: 600,
    // },
    Ry: {
        min: 0,
        max: 800,  // Will be random
    },
    size: 25,
    Speed: undefined,
    Rspeed: {
        min: 2,
        max: 10,
    }

};

const badFly4 = {
    x: 0,
    y: 300,
    // Rx: {
    //     min: 0,
    //     max: 600,
    // },
    Ry: {
        min: 0,
        max: 800,  // Will be random
    },
    size: 25,
    Speed: undefined,
    Rspeed: {
        min: 2,
        max: 10,
    }

};

let bgColor = {
    begin: "#87ceeb",
}

const placement = {
    worstest: -8, // starving
    worst: -4, // very hungry
    bad: -2, // hungry
    begin: 0, // fine
    good: 4, // full
}


let MENU = 0;
let menu;
let font;
let hoverSound;
let frogImage;
let score = 0;
let flyImage;
let poisonFlyImage;
let tongueFrogImage;


function preload() {
    font = loadFont('assets/fonts/Jersey20-Regular.otf');
    hoverSound = loadSound('assets/sounds/hover.wav');
    frogImage = loadImage('assets/images/frog.png');
    tongueFrogImage = loadImage('assets/images/tonguefrog.png');
    flyImage = loadImage('assets/images/fly.png');
    poisonFlyImage = loadImage('assets/images/poisonFly.png');
}

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(1200, 800);

    // // Give the fly its first random position
    resetFly(fly1);
    resetFly(fly2);
    resetFly(fly3);
    resetFly(fly4);
    resetFly(fly5);
    resetFly(fly6);
    resetBadFly(badFly1);
    resetBadFly(badFly2);
    resetBadFly(badFly3);
    resetBadFly(badFly4);

    // Main menu design
    menu = {
        stroke: "black",
        strokeWeight: 10,
        sizeX: width * 0.8,
        sizeY: height * 0.4,
        start: {
            fill: undefined,
            fillRegular: "#00FF00",
            fillHover: "#3e4d3eff",
            x: width * 0.5,
            y: height * 0.25,
        },

        instructions: {
            fill: undefined,
            fillRegular: "#FF0000",
            fillHover: "#604242ff",
            x: width * 0.5,
            y: height * 0.75,
        },
        text: {
            size: 150,
            fill: "black",
            font: font,
            fontSize: 100,
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
    // Starts game
    else if (MENU === 1) {
        gameMenu();
    }
    // Instruction menu
    else if (MENU === 2) {
        instructionsMenu();
    }
    // Game over (poison = Menu 3)
    else if (MENU === 3) {
        gameOverPoison();
        score = 0;
    }
    // Game over (starving = Menu 4)
    else if (MENU === 4) {
        gameOverStarving();
        score = 0;
    }
    // Game over (full = Menu 5)
    else if (MENU === 5) {
        gameOverFull();
        score = 0;
    }

    // Instruction menu conditionals
    if (MENU === 2 && keyIsDown(ESCAPE) === true) {
        MENU = 0
    }
    if (MENU === 2 && keyIsDown(ENTER) === true) {
        MENU = 1
    }

    // Game over (poison = menu 3) conditions
    if (MENU === 3 && keyIsDown(ESCAPE) === true) {
        MENU = 0
    }
    if (MENU === 3 && keyIsDown(ENTER) === true) {
        MENU = 1;
        score = 0;
        resetBadFly(badFly1);
        resetBadFly(badFly2);
        resetBadFly(badFly3);
        resetBadFly(badFly4);
        resetFly(fly1);
        resetFly(fly2);
        resetFly(fly3);
        resetFly(fly4);
        resetFly(fly5);
        resetFly(fly6);
    }
    if (MENU === 3 && keyIsDown(ESCAPE) === true) {
        MENU = 0
    }

    // Game over (starving = menu 4) conditions
    if (MENU === 4 && keyIsDown(ESCAPE) === true) {
        MENU = 0
    }
    if (MENU === 4 && keyIsDown(ENTER) === true) {
        MENU = 1;
        score = 0;
        resetBadFly(badFly1);
        resetBadFly(badFly2);
        resetBadFly(badFly3);
        resetBadFly(badFly4);
        resetFly(fly1);
        resetFly(fly2);
        resetFly(fly3);
        resetFly(fly4);
        resetFly(fly5);
        resetFly(fly6);
    }
    if (MENU === 4 && keyIsDown(ESCAPE) === true) {
        MENU = 0
    }

    // Game over (full = menu 5) conditions
    if (MENU === 5 && keyIsDown(ESCAPE) === true) {
        MENU = 0
    }
    if (MENU === 5 && keyIsDown(ENTER) === true) {
        MENU = 1;
        score = 0;
        resetBadFly(badFly1);
        resetBadFly(badFly2);
        resetBadFly(badFly3);
        resetBadFly(badFly4);
        resetFly(fly1);
        resetFly(fly2);
        resetFly(fly3);
        resetFly(fly4);
        resetFly(fly5);
        resetFly(fly6);
    }
    if (MENU === 5 && keyIsDown(ESCAPE) === true) {
        MENU = 0
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
    textFont(menu.text.font, menu.text.size);
    // textFont('Courier New');
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
    background(bgColor.begin);
    scoreColor();
    moveFly(fly1);
    moveFly(fly2);
    moveFly(fly3);
    moveFly(fly4);
    moveFly(fly5);
    moveFly(fly6);
    drawFly(fly1);
    drawFly(fly2);
    drawFly(fly3);
    drawFly(fly4);
    drawFly(fly5);
    drawFly(fly6);
    moveBadFly(badFly1);
    moveBadFly(badFly2);
    moveBadFly(badFly3);
    moveBadFly(badFly4);
    drawBadFly(badFly1);
    drawBadFly(badFly2);
    drawBadFly(badFly3);
    drawBadFly(badFly4);
    moveFrog();
    moveTongue();
    drawFrog();
    // tongueControl();
    checkTongueFlyOverlap(fly1);
    checkTongueFlyOverlap(fly2);
    checkTongueFlyOverlap(fly3);
    checkTongueFlyOverlap(fly4);
    checkTongueFlyOverlap(fly5);
    checkTongueFlyOverlap(fly6);
    checkTongueBadFlyOverlap(badFly1);
    checkTongueBadFlyOverlap(badFly2);
    checkTongueBadFlyOverlap(badFly3);
    checkTongueBadFlyOverlap(badFly4);
    timeGoesBy();
}

function instructionsMenu() {
    background("#87CEEB");

    push();
    textSize(50);
    fill('black');
    textFont(font);
    textAlign(CENTER, CENTER);
    text('> Use WASD to move the frog.', width / 2, 100);
    text('> Eat the regular flies.', width / 2, 200);
    text('> Do not eat the poisonous flies.', width / 2, 250);
    text('> Do not let the frog get too hungry or too full.', width / 2, 350);
    text('> Play with sound on.', width / 2, 450);
    text('> Have fun!', width / 2, 500);
    text('> Click ESC for the main.  Click ENTER to play.', width / 2, 700);
    pop();

    push();
    imageMode(CENTER);
    image(flyImage, 330, 200, 75, 75)
    pop();

    push();
    imageMode(CENTER);
    image(poisonFlyImage, 950, 250, 75, 75)
    pop();

    push();
    imageMode(CENTER);
    image(frogImage, width * 0.2, 615, 150, 150)
    pop();

    push();
    imageMode(CENTER);
    image(tongueFrogImage, width * 0.8, 570, 150, 300)
    pop();

    push();
    stroke(255);
    fill(255, 255, 255, 10);
    rect(10, 10, width - 20, height - 20, 10);
    pop();
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly(fly) {
    // Move the fly
    fly.x += random(fly.Rspeed.min, fly.Rspeed.max);
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly(fly);
    }
}

function moveBadFly(fly) {
    // Move the fly
    fly.x += random(fly.Rspeed.min, fly.Rspeed.max);
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly(fly);
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly(fly) {
    // push();
    // noStroke();
    // fill("#000000");
    // ellipse(fly.x, fly.y, fly.size);
    // pop();

    // Draw the fly's body
    push();
    imageMode(CENTER);
    image(flyImage, fly.x, fly.y, fly.size, fly.size)
    pop();
}

/**
 * Draws the fly as a black circle
 */
function drawBadFly(fly) {
    push();
    imageMode(CENTER);
    image(poisonFlyImage, fly.x, fly.y, fly.size, fly.size)
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly(fly) {
    fly.x = 0;
    fly.y = random(fly.Ry.min, fly.Ry.max);
}

/**
 * Resets the fly to the left with a random y
 */
function resetBadFly(fly) {
    fly.x = 0;
    fly.y = random(fly.Ry.min, fly.Ry.max);
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
        frog.tongue.y -= frog.tongue.speed;
        // // The tongue bounces back if it hits the top
        // if (frog.tongue.y <= 0) {
        //     frog.tongue.state = "inbound";
        // }
        const distance = frog.body.y - frog.tongue.y;
        if (distance >= frog.tongue.maxY) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        frog.tongue.state = "idle";
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
// function checkTongueFlyOverlap(fly) {
//     // Get distance from tongue to fly
//     const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
//     // Check if it's an overlap
//     const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
//     if (eaten) {
//         // Reset the fly
//         resetFly(fly);
//         // Bring back the tongue
//         frog.tongue.state = "inbound";
//     }
// }

function checkTongueFlyOverlap(fly) {
    // Get distance from tongue to fly
    const d = dist(frog.body.x, frog.body.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.body.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        resetFly(fly);
        score += 1;
        console.log(score);
        // Bring back the tongue
        frog.tongue.state = "outbound";
    }
}


function checkTongueBadFlyOverlap(fly) {
    // Get distance from tongue to fly
    const d = dist(frog.body.x, frog.body.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.body.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        // resetBadFly(fly);
        MENU = 3;

        // Bring back the tongue
        // frog.tongue.state = "outbound";
    }
}

// /**
//  * Launch the tongue on click (if it's not launched yet)
//  */
// function tongueControl() {
//     if (keyIsDown(UP_ARROW) === true && frog.tongue.state === "idle") {
//         frog.tongue.state = "outbound";
//     }
//     if (keyIsDown(DOWN_ARROW) === true && frog.tongue.state === "outbound") {
//         frog.tongue.state = "inbound";
//     }

// }

function gameOverPoison() {
    push();
    rectMode(CENTER);
    fill(100, 100, 100, 25);
    noStroke();
    rect(width / 2, height / 2, width, height);
    pop();

    push();
    textSize(40);
    fill(200);
    textFont(menu.text.font, menu.text.size);
    // textFont('Courier New');
    textAlign(CENTER, CENTER);
    text('Game over', width / 2, height * 0.4);
    textSize(30);
    text('You ate a poisonous fly (>_<)	', width / 2, height * 0.6);
    text('ESC for main menu. ENTER to start over', width / 2, height * 0.65);
    pop();

    push();
    stroke(255);
    fill(255, 255, 255, 10);
    rect(10, 10, width - 20, height - 20, 10);
    pop();
}

function gameOverStarving() {
    push();
    rectMode(CENTER);
    fill(100, 100, 100, 25);
    noStroke();
    rect(width / 2, height / 2, width, height);
    pop();

    push();
    textSize(40);
    fill(200);
    textFont(menu.text.font, menu.text.size);
    // textFont('Courier New');
    textAlign(CENTER, CENTER);
    text('Game over', width / 2, height * 0.4);
    textSize(30);
    text('You starved (>_<)	', width / 2, height * 0.6);
    text('ESC for main menu. ENTER to start over', width / 2, height * 0.65);
    pop();

    push();
    stroke(255);
    fill(255, 255, 255, 10);
    rect(10, 10, width - 20, height - 20, 10);
    pop();

}

function gameOverFull() {
    push();
    rectMode(CENTER);
    fill(100, 100, 100, 25);
    noStroke();
    rect(width / 2, height / 2, width, height);
    pop();

    push();
    textSize(40);
    fill(200);
    textFont(menu.text.font, menu.text.size);
    // textFont('Courier New');
    textAlign(CENTER, CENTER);
    text('Game over', width / 2, height * 0.4);
    textSize(30);
    text('You were too full (>_<)	', width / 2, height * 0.6);
    text('ESC for main menu. ENTER to start over', width / 2, height * 0.65);
    pop();

    push();
    stroke(255);
    fill(255, 255, 255, 10);
    rect(10, 10, width - 20, height - 20, 10);
    pop();

    // if (score > 10) {
    //     MENU = 5;
    // }

}

function scoreColor() {
    if (score >= placement.good) {
        textAlign(CENTER, CENTER);
        textFont(menu.text.font, 50);
        text('Hunger level:', width / 2, height * 0.05);
        textFont(menu.text.font, 75);
        text('full', width / 2, height * 0.10);
    }

    else if (score >= placement.begin) {
        textAlign(CENTER, CENTER);
        textFont(menu.text.font, 50);
        text('Hunger level:', width / 2, height * 0.05);
        textFont(menu.text.font, 75);
        text('fine', width / 2, height * 0.10);
    }
    else if (score >= placement.bad) {
        textAlign(CENTER, CENTER);
        textFont(menu.text.font, 50);
        text('Hunger level:', width / 2, height * 0.05);
        textFont(menu.text.font, 75);
        text('hungry', width / 2, height * 0.10);
    }
    else if (score >= placement.worst) {
        textAlign(CENTER, CENTER);
        textFont(menu.text.font, 50);
        text('Hunger level:', width / 2, height * 0.05);
        textFont(menu.text.font, 75);
        text('very hungry!', width / 2, height * 0.10);
    }

    else if (score >= placement.worstest) {
        textAlign(CENTER, CENTER);
        textFont(menu.text.font, 50);
        text('Hunger level:', width / 2, height * 0.05);
        textFont(menu.text.font, 75);
        text('starving!!', width / 2, height * 0.10);
    }

}

function timeGoesBy() {
    if (frameCount % 120 === 0) {
        score -= 4;
    }
    console.log(score);

    // If you get 20 flies you die (to be replaced)
    if (score <= -8) {
        MENU = 4;
    }
}

