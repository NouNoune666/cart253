/**
 * Mod Jam: Hungry Froggy
 * by Nou Noune (Amélie Barrette)
 * 
 * A game in which you are a hungry frog that eats flies
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Catch the flies (only the good ones)
 * - Hurry before night time comes
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";


// DELETED - Deleted because score doesn't affect background color anymore. 
// let bgColor = {
//     begin: "#87ceeb",
// }

// Our frog 
const frog = {
    // The frog's body has a position and size
    body: {
        x: undefined,
        y: undefined,
        size: 160,
    },
    // The frog's tongue has a position, size, speed, state, and maximum height
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 35,
        state: "idle", // State can be: idle, outbound, inbound
        maxY: 100,

    }
};

// Our flies. Each fly has an x and y position, a maximum and minimum for the x and y, a size, a speed and a maxium and minimum for the speed.
// Fly number 1
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

// Fly number 2
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

// Fly number 3
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

// Fly number 4
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

// Fly number 5
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

// Fly number 6
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

// Poison fly number 1
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

// Poison fly number 2
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

// Poison fly number 3
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

// Poison fly number 4
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

// Poison fly number 5
const badFly5 = {
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

// Poison fly number 6
const badFly6 = {
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

let bgTimer = 0; // This tracks time for the background
let score = 0; // The score starts at 0, score is number of flies eaten
let placement = 0 // The placement starts at 0
let MENU = 0; // Menu starts at 0 which is the main menu
let menu; // The different menu designs
let font; // Our cool font

// Sounds
let clickSound; // Click sound in menu
let gameOverSound; // Game over sound

//Images
let frogImage; // Our frog as an image
let cloudsImage; // Our clouds as an image
let flyImage; // Our fly as an image
let poisonFlyImage; // Our poisonous fly as an image
let tongueFrogImage; // Our frog with tongue out as an image (this one is just for the instructions menu)

let bgStartColor; // Our background's start color
let bgEndColor; // Our background's end color

/**
 * Preloads all our files (font, image and audio) 
 */
function preload() {
    font = loadFont('assets/fonts/Jersey20-Regular.otf'); // font

    // Sounds
    clickSound = loadSound('assets/sounds/click.wav');
    gameOverSound = loadSound('assets/sounds/gameOver.wav');

    // Images
    frogImage = loadImage('assets/images/frog.png');
    tongueFrogImage = loadImage('assets/images/tonguefrog.png');
    flyImage = loadImage('assets/images/fly.png');
    poisonFlyImage = loadImage('assets/images/poisonFly.png');
    cloudsImage = loadImage('assets/images/clouds.png');
}

/**
 * Creates the canvas, initializes the flies, creates the main menu design and assigns the possible background colors.
 */
function setup() {
    // Canvas size
    createCanvas(1200, 800);

    // Give the flies its first random position
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
    resetBadFly(badFly5);
    resetBadFly(badFly6);

    // Different menu designs
    menu = {
        font: font,
        main: { // Main Menu
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
                fontSize: 100,
                start: {
                    x: width / 2,
                    y: height * 0.25,
                },
                instructions: {
                    x: width / 2,
                    y: height * 0.75,
                },
            },
        },
        poison: {
            fill: color(100, 100, 100, 15),
            stroke: "black",
            strokeWeight: 10,
            sizeX: width * 0.8,
            sizeY: height * 0.4,
            text: {
                size1: 150,
                size2: 30,
                fillB: "black",
                fillR: "red",
                fontSize: 100,
                start: {
                    x: width / 2,
                    y: height * 0.25,
                },
                instructions: {
                    x: width / 2,
                    y: height * 0.75,
                },
            },
        },
        starving: {
            fill: color(100, 100, 100, 15),
            stroke: "black",
            strokeWeight: 10,
            sizeX: width * 0.8,
            sizeY: height * 0.4,
            text: {
                size1: 150,
                size2: 30,
                fill: "black",
                fontSize: 100,
                start: {
                    x: width / 2,
                    y: height * 0.25,
                },
                instructions: {
                    x: width / 2,
                    y: height * 0.75,
                },
            },

        },
        done: {
            fill: {
                good: color(135, 206, 235, 15),
                bad: color(100, 100, 100, 15),
            },
            stroke: "black",
            strokeWeight: 10,
            sizeX: width * 0.8,
            sizeY: height * 0.4,
            text: {
                size1: 110,
                size2: 70,
                size3: 50,
                size4: 30,
                fill: "black",
                fontSize: 100,
            },
        },
    };
    bgStartColor = color(135, 206, 235); // Sky blue (day)
    bgEndColor = color(0, 0, 128);       // Dark blue (night)
}

/**
 * Sends the user to different menus depending on what and where they click.
 */
function draw() {
    // Sets the different menus (1 to 6)
    if (MENU === 0) {
        mainMenu(); // Main menu
        score = 0; // Resets the score
        placement = 0; // Resets the placement
        bgTimer = 0; // Resets the timer
        resetBadFly(badFly1);
        resetBadFly(badFly2);
        resetBadFly(badFly3);
        resetBadFly(badFly4);
        resetBadFly(badFly5);
        resetBadFly(badFly6);
        resetFly(fly1);
        resetFly(fly2);
        resetFly(fly3);
        resetFly(fly4);
        resetFly(fly5);
        resetFly(fly6);
    }
    else if (MENU === 1) {
        gameMenu(); // Starts the game
    }
    else if (MENU === 2) {
        instructionsMenu(); // The instruction menu
    }
    else if (MENU === 3) { // The game over menu if the user ate a poisonous fly
        gameOverPoison();
        score = 0; // Resets the score
        placement = 0; // Resets the placement
    }
    else if (MENU === 4) { // The game over menu if the frog starved
        gameOverStarving();
        score = 0; // Resets the score
        placement = 0; // Resets the placement

    }
    // DELETED - The game over menu if the user was too full. Removed this because I wanted it to be easier to win, more fun! - DELETED
    // else if (MENU === 5) { 
    //     gameOverFull();
    //     score = 0;
    // }
    else if (MENU === 6) {
        gameDoneGood(); // The menu once the game is over aka when the night comes.
    }

    // Instruction menu conditions
    if (MENU === 2 && keyIsDown(ESCAPE) === true) {
        MENU = 0 // Goes back to main menu
        clickSound.play(); // click sound
    }
    if (MENU === 2 && keyIsDown(ENTER) === true) {
        MENU = 1 // Goes to play mode
        clickSound.play(); // click sound
    }

    // Game over (poison) conditions
    if (MENU === 3 && keyIsDown(ESCAPE) === true) {
        MENU = 0; // Goes back to main menu
        clickSound.play(); // click sound
    }
    if (MENU === 3 && keyIsDown(ENTER) === true) { // Goes back to play mode, resets the score and the flies
        MENU = 1;
        score = 0; // Resets the score
        placement = 0; // Resets the placement
        bgTimer = 0; // Resets the timer
        resetBadFly(badFly1);
        resetBadFly(badFly2);
        resetBadFly(badFly3);
        resetBadFly(badFly4);
        resetBadFly(badFly5);
        resetBadFly(badFly6);
        resetFly(fly1);
        resetFly(fly2);
        resetFly(fly3);
        resetFly(fly4);
        resetFly(fly5);
        resetFly(fly6);
        clickSound.play(); // click sound
    }

    // Game over (starving) conditions
    if (MENU === 4 && keyIsDown(ESCAPE) === true) {
        MENU = 0 // If ESC is pressed, goes back to main menu
        clickSound.play(); // click sound
    }
    if (MENU === 4 && keyIsDown(ENTER) === true) { // If ENTER is pressed goes back to play mode, resets the score and the flies
        MENU = 1;
        score = 0; // Resets the score
        placement = 0; // Resets the placement
        bgTimer = 0; // Resets the timer
        resetBadFly(badFly1);
        resetBadFly(badFly2);
        resetBadFly(badFly3);
        resetBadFly(badFly4);
        resetBadFly(badFly5);
        resetBadFly(badFly6);
        resetFly(fly1);
        resetFly(fly2);
        resetFly(fly3);
        resetFly(fly4);
        resetFly(fly5);
        resetFly(fly6);
        clickSound.play(); // click sound
    }

    // DELETED - Game over (full) conditions. Not needed anymore - DELETED
    // if (MENU === 5 && keyIsDown(ESCAPE) === true) {
    //     MENU = 0
    // }
    // if (MENU === 5 && keyIsDown(ENTER) === true) {
    //     MENU = 1;
    //     score = 0;
    //     resetBadFly(badFly1);
    //     resetBadFly(badFly2);
    //     resetBadFly(badFly3);
    //     resetBadFly(badFly4);
    //     resetBadFly(badFly5);
    //     resetFly(fly1);
    //     resetFly(fly2);
    //     resetFly(fly3);
    //     resetFly(fly4);
    //     resetFly(fly5);
    //     resetFly(fly6);
    // }
    // if (MENU === 5 && keyIsDown(ESCAPE) === true) {
    //     MENU = 0
    // }

    // Game done (good) conditions
    if (MENU === 6 && keyIsDown(ESCAPE) === true) {
        MENU = 0;
        score = 0; // Resets the score
        placement = 0; // Resets the placement
        bgTimer = 0; // Resets the timer
        resetBadFly(badFly1);
        resetBadFly(badFly2);
        resetBadFly(badFly3);
        resetBadFly(badFly4);
        resetBadFly(badFly5);
        resetBadFly(badFly6);
        resetFly(fly1);
        resetFly(fly2);
        resetFly(fly3);
        resetFly(fly4);
        resetFly(fly5);
        resetFly(fly6);
        clickSound.play(); // click sound
    }

}

/** 
 * Draws the main menu
 */
function mainMenu() {

    background("#87CEEB"); // Background color
    mouseHover(); // Calls mouse hover function

    // Makes a green button for ''START''
    push();
    rectMode(CENTER);
    fill(menu.main.start.fill);
    stroke(menu.main.stroke);
    strokeWeight(menu.main.strokeWeight);
    rect(menu.main.start.x, menu.main.start.y, menu.main.sizeX, menu.main.sizeY);
    pop();

    // Makes a red button for ''INSTRUCTIONS''
    push();
    rectMode(CENTER);
    fill(menu.main.instructions.fill);
    stroke(menu.main.stroke);
    strokeWeight(menu.main.strokeWeight);
    rect(menu.main.instructions.x, menu.main.instructions.y, menu.main.sizeX, menu.main.sizeY);
    pop();

    // Writes the ''START'' and ''INSTRUCTIONS'' text on the buttons
    push();
    textSize(menu.main.text.size);
    fill(menu.main.text.fill);
    textFont(font, menu.main.text.size);
    textAlign(CENTER, CENTER);
    text('START', menu.main.text.start.x, menu.main.text.start.y);
    text('INSTRUCTIONS', menu.main.text.instructions.x, menu.main.text.instructions.y);
    pop();
}

/**
 * When the mouse hovers over the ''START'' or ''INSTRUCTIONS'' squares, those squares become darker.
 */
function mouseHover() {
    if (MENU == 0) { // Only works in main menu
        if (mouseX < 1080 && mouseX > 120 && mouseY < 360 && mouseY > 40) {
            menu.main.start.fill = menu.main.start.fillHover // ''START'' button
        }
        else {
            menu.main.start.fill = menu.main.start.fillRegular
        }
    }

    if (MENU == 0) { // Only works in main menu
        if (mouseX < 1080 && mouseX > 120 && mouseY < 760 && mouseY > 440) {
            menu.main.instructions.fill = menu.main.instructions.fillHover // ''INSTRUCTIONS'' button
        }
        else {
            menu.main.instructions.fill = menu.main.instructions.fillRegular
        }
    }
}

/**
 * On the main menu, brings the user to the instructions page or the game page depending on where they click.
 */
function mouseClicked() {
    if (MENU == 0) {
        if (mouseX < 1080 && mouseX > 120) {
            if (mouseY < 360 && mouseY > 40) { // Starts the game
                clickSound.play(); // click sound
                MENU = 1
            }
            if (mouseY < 760 && mouseY > 440) {
                clickSound.play(); // click sound
                MENU = 2 // Goes to instruction page
            }
        }
    }
}

/**
 * The game itself.
 */
function gameMenu() {
    // scoreColor(); // DELETED - background color doesn't change depending on score anymore

    resetBg(); // Resets the color of ther background to sky blue
    drawClouds(); // Draws the clouds

    // Draws the flies
    drawFly(fly1);
    drawFly(fly2);
    drawFly(fly3);
    drawFly(fly4);
    drawFly(fly5);
    drawFly(fly6);
    drawBadFly(badFly1);
    drawBadFly(badFly2);
    drawBadFly(badFly3);
    drawBadFly(badFly4);
    drawBadFly(badFly5);
    drawBadFly(badFly6);

    // Moves the flies
    moveFly(fly1);
    moveFly(fly2);
    moveFly(fly3);
    moveFly(fly4);
    moveFly(fly5);
    moveFly(fly6);
    moveBadFly(badFly1);
    moveBadFly(badFly2);
    moveBadFly(badFly3);
    moveBadFly(badFly4);
    moveBadFly(badFly5);
    moveBadFly(badFly6);

    drawFrog();  // Draws the frog and it's tongue
    moveFrog(); // Moves the frog
    moveTongue(); // Moves the tongue

    // tongueControl(); DELETED - Had made a function that allowed the user to control the tongue using up and down arrow, but ended up not liking it.

    // Checks the tongue and fly over lap and then does appropriate action
    checkFrogFlyOverlap(fly1);
    checkFrogFlyOverlap(fly2);
    checkFrogFlyOverlap(fly3);
    checkFrogFlyOverlap(fly4);
    checkFrogFlyOverlap(fly5);
    checkFrogFlyOverlap(fly6);
    checkFrogBadFlyOverlap(badFly1);
    checkFrogBadFlyOverlap(badFly2);
    checkFrogBadFlyOverlap(badFly3);
    checkFrogBadFlyOverlap(badFly4);
    checkFrogBadFlyOverlap(badFly5);
    checkFrogBadFlyOverlap(badFly6);

    timeGoesBy();  // Score changes over time, certain scores lead to certain results...
}

/**
 * This draws the clouds
 */
function drawClouds() {
    // Uses our image
    push();
    imageMode(CENTER);
    image(cloudsImage, width / 2, height / 2)
    pop();

}
/**
 * The instructions page
 */
function instructionsMenu() {
    background("#87CEEB");

    // The instructions
    push();
    textSize(50);
    fill('black');
    textFont(font);
    textAlign(CENTER, CENTER); // Centers our text
    text('> Use WASD to move the frog.', width / 2, 100);
    text('> Eat the regular flies.', width / 2, 200);
    text('> Do not eat the poisonous flies.', width / 2, 250);
    text('> Do not let the frog get too hungry.', width / 2, 350);
    text('> Hurry before the end of the night!', width / 2, 400);
    text('> Play with sound on.', width / 2, 500);
    text('> Have fun!', width / 2, 550);
    text('> Click ESC for main menu.  Click ENTER to play.', width / 2, 700);
    pop();

    // Fly image
    push();
    imageMode(CENTER);
    image(flyImage, 330, 200, 75, 75) // 
    pop();

    // Poisonous fly image
    push();
    imageMode(CENTER);
    image(poisonFlyImage, 950, 250, 75, 75)
    pop();

    // Frog image
    push();
    imageMode(CENTER);
    image(frogImage, width * 0.2, 615, 150, 150)
    pop();

    // Frog with tongue out image
    push();
    imageMode(CENTER);
    image(tongueFrogImage, width * 0.8, 570, 150, 300)
    pop();

    // Curved border
    push();
    stroke(255);
    fill(255, 255, 255, 10);
    rect(10, 10, width - 20, height - 20, 10);
    pop();
}

/**
 * Draws our regular fly
 */
function drawFly(fly) {
    // Uses our image
    push();
    imageMode(CENTER);
    image(flyImage, fly.x, fly.y, fly.size, fly.size)
    pop();
}

/**
 * Draws our poisonous fly
 */
function drawBadFly(fly) {
    // Uses our image
    push();
    imageMode(CENTER);
    image(poisonFlyImage, fly.x, fly.y, fly.size, fly.size)
    pop();
}

/**
 * Moves the flies according to its speed and resets them if they gets all the way to the right
 */
function moveFly(fly) {
    // Move the fly
    fly.x += random(fly.Rspeed.min, fly.Rspeed.max);
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly(fly);
    }
}

/**
 * Moves the poisonous flies according to their speed and resets them if they gets all the way to the right
 */
function moveBadFly(fly) {
    // Move the fly
    fly.x += random(fly.Rspeed.min, fly.Rspeed.max);
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly(fly);
    }
}

/**
 * Resets the flies to the left with a random y
 */
function resetFly(fly) {
    fly.x = random(-400, 0); // Flies start off screen but not exactly at zero, this way they are more spread out
    fly.y = random(fly.Ry.min, fly.Ry.max);
}

/**
 * Resets the poisonous flies to the left with a random y
 */
function resetBadFly(fly) {
    fly.x = random(-400, 0); // Flies start off screen but not exactly at zero, this way they are more spread out;
    fly.y = random(fly.Ry.min, fly.Ry.max);
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {

    // Draw the the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Used image as frog's body
    push();
    imageMode(CENTER);
    image(frogImage, frog.body.x, frog.body.y, frog.body.size, frog.body.size)
    pop();
}

/**
 * Moves the frog to the mouse position on x and y
 */
function moveFrog() {
    frog.body.x = constrain(mouseX, 0, width); // frog can't exit the canvas
    frog.body.y = constrain(mouseY, 0, height); // frog can't exit the canvas
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

        const distance = frog.body.y - frog.tongue.y;
        if (distance >= frog.tongue.maxY) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // Only stop when the tongue has reached the frog again
        if (frog.tongue.y >= frog.body.y) {
            frog.tongue.y = frog.body.y; // Snap exactly to mouth
            frog.tongue.state = "idle";
        }
    }

}
/**
 * Handles the frog body overlapping the flies
 */
function checkFrogFlyOverlap(fly) {
    // Get distance from tongue to fly
    const d = dist(frog.body.x, frog.body.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.body.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        resetFly(fly);
        score += 1; // Number of flies eaten go up
        placement += 1; // Hunger level goes up
        // tongue goes up
        frog.tongue.state = "outbound";
    }
}

/**
 * Handles the frog body overlapping the bad flies
 */
function checkFrogBadFlyOverlap(fly) {
    // Get distance from tongue to fly
    const d = dist(frog.body.x, frog.body.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.body.size / 2 + fly.size / 2);
    if (eaten) {
        // frog.tongue.state = "outbound";
        MENU = 3;
    }
}

/**
 * DELETED - Would have launched the tongue with arrows (if it was not launched yet)
*/
// function tongueControl() {
//     if (keyIsDown(UP_ARROW) === true && frog.tongue.state === "idle") {
//         frog.tongue.state = "outbound";
//     }
//     if (keyIsDown(DOWN_ARROW) === true && frog.tongue.state === "outbound") {
//         frog.tongue.state = "inbound";
//     }

// }

/**
 * Is displayed when poison fly is eaten
 */
function gameOverPoison() {

    gameOverSound.play(); // game over sound

    // Translucent gray rectangle
    push();
    rectMode(CENTER);
    fill(menu.poison.fill);
    noStroke(menu.poison.fill);
    rect(width / 2, height / 2, width, height);
    pop();

    // The text
    push();
    fill(menu.poison.text.fillB);
    textFont(menu.font, menu.poison.text.size1);
    textAlign(CENTER, CENTER);
    text('Game over', width / 2, height * 0.4);
    pop();

    push();
    fill(menu.starving.text.fill);
    textFont(menu.font, menu.starving.text.size2);
    textAlign(CENTER, CENTER);
    text('You ate a poisonous fly!', width / 2, height * 0.6);
    pop();

    push();
    fill(menu.starving.text.fill);
    textFont('Noto Sans JP', menu.starving.text.size2);
    textAlign(CENTER, CENTER);
    text('(＞﹏＜)	', width / 2, height * 0.65);
    pop();

    push();
    fill(menu.poison.text.fillB);
    textFont(menu.font, menu.poison.text.size2);
    textAlign(CENTER, CENTER);
    text('ESC for main menu. ENTER to start over.', width / 2, height * 0.75);
    pop();

    // Curved border
    push();
    stroke(255);
    fill(255, 255, 255, 10);
    rect(10, 10, width - 20, height - 20, 10);
    pop();
}

/**
 * Is displayed when the frog starves
 */
function gameOverStarving() {
    // Translucent gray rectangle
    push();
    rectMode(CENTER);
    fill(menu.starving.fill);
    noStroke();
    rect(width / 2, height / 2, width, height);
    pop();

    // The text
    push();
    fill(menu.starving.text.fill);
    textFont(menu.font, menu.poison.text.size1);
    textAlign(CENTER, CENTER);
    text('Game over', width / 2, height * 0.4);
    pop();

    push();
    fill(menu.starving.text.fill);
    textFont(menu.font, menu.starving.text.size2);
    textAlign(CENTER, CENTER);
    text('You starved', width / 2, height * 0.6);
    pop();

    push();
    fill(menu.starving.text.fill);
    textFont('Noto Sans JP', menu.starving.text.size2);
    textAlign(CENTER, CENTER);
    text('ԅ(¯﹃¯ԅ)', width / 2, height * 0.65);
    pop();

    push();
    fill(menu.starving.text.fill);
    textFont(menu.font, menu.starving.text.size2);
    textAlign(CENTER, CENTER);
    text('ESC for main menu. ENTER to start over', width / 2, height * 0.75);
    pop();

    // Curved border
    push();
    stroke(255);
    fill(255, 255, 255, 10);
    rect(10, 10, width - 20, height - 20, 10);
    pop();
}

/**
 * DELETED - Decided not too keep the full consequence
 */
// function gameOverFull() {
//     // Translucent gray rectangle
//     push();
//     rectMode(CENTER);
//     fill(100, 100, 100, 15);
//     noStroke();
//     rect(width / 2, height / 2, width, height);
//     pop();

//     // The text
//     push();
//     fill(menu.starving.text.fill);
//     textFont(menu.font, menu.poison.text.size1);
//     textAlign(CENTER, CENTER);
//     text('Game over', width / 2, height * 0.4);
//     pop();

//     push();
//     fill(menu.starving.text.fill);
//     textFont(menu.font, menu.starving.text.size2);
//     textAlign(CENTER, CENTER);
//     text('You were too full)', width / 2, height * 0.6);
//     pop();

//     push();
//     fill(menu.starving.text.fill);
//     textFont('Noto Sans JP', menu.starving.text.size2);
//     textAlign(CENTER, CENTER);
//     text('･ﾟ･(｡>ω<｡)･ﾟ･', width / 2, height * 0.65);
//     pop();

//     push();
//     fill(menu.starving.text.fill);
//     textFont(menu.font, menu.starving.text.size2);
//     textAlign(CENTER, CENTER);
//     text('ESC for main menu. ENTER to start over', width / 2, height * 0.75);
//     pop();

//     // Curved border
//     push();
//     stroke(255);
//     fill(255, 255, 255, 10);
//     rect(10, 10, width - 20, height - 20, 10);
//     pop();
// }

/**
 * Is displayed when the game is over and the number of flies eaten is superior to zero
 */
function gameDoneGood() {
    // Translucent blue rectangle
    push();
    rectMode(CENTER);
    fill(menu.done.fill.good);
    noStroke();
    rect(width / 2, height / 2, width, height);
    pop();

    // The text
    push();
    fill(menu.done.text.fill);
    textFont(menu.font, menu.done.text.size2);
    textAlign(CENTER, CENTER);
    text('Congrats you survived the night and...', width / 2, height * 0.2);
    pop();

    push();
    fill(menu.done.text.fill);
    textFont(menu.font, menu.done.text.size2);
    textAlign(CENTER, CENTER);
    text('you ate ' + score + ' flies!!!', width / 2, height * 0.33);
    pop();

    push();
    fill(menu.done.text.fill);
    textFont('Noto Sans JP', menu.done.text.size3);
    textAlign(CENTER, CENTER);
    text('ヽ(*⌒▽⌒*)ﾉ', width / 2, height * 0.54);
    pop();

    push();
    fill(menu.done.text.fill);
    textFont(menu.font, menu.done.text.size4);
    textAlign(CENTER, CENTER);
    text('ESC for main menu.', width / 2, height * 0.75);
    pop();

    // Curved border
    push();
    stroke(255);
    fill(255, 255, 255, 10);
    rect(10, 10, width - 20, height - 20, 10);
    pop();
}

/**
 * DELETED - this was for the background to change color depending on the placement.
 */
// function scoreColor() {
//     if (score >= placement.good) {
//         textAlign(CENTER, CENTER);
//         textFont(menu.font, 50);
//         text('Hunger level:', width / 2, height * 0.05);
//         textFont(menu.font, 75);
//         text('full', width / 2, height * 0.10);
//     }

//     else if (score >= placement.begin) {
//         textAlign(CENTER, CENTER);
//         textFont(menu.font, 50);
//         text('Hunger level:', width / 2, height * 0.05);
//         textFont(menu.font, 75);
//         text('fine', width / 2, height * 0.10);
//     }
//     else if (score >= placement.bad) {
//         textAlign(CENTER, CENTER);
//         textFont(menu.font, 50);
//         text('Hunger level:', width / 2, height * 0.05);
//         textFont(menu.font, 75);
//         text('hungry', width / 2, height * 0.10);
//     }
//     else if (score >= placement.worst) {
//         textAlign(CENTER, CENTER);
//         textFont(menu.font, 50);
//         text('Hunger level:', width / 2, height * 0.05);
//         textFont(menu.font, 75);
//         text('very hungry!', width / 2, height * 0.10);
//     }

//     else if (score >= placement.worstest) {
//         textAlign(CENTER, CENTER);
//         textFont(menu.font, 50);
//         text('Hunger level:', width / 2, height * 0.05);
//         textFont(menu.font, 75);
//         text('starving!!', width / 2, height * 0.10);
//     }
// }

/**
 * Keeps track of time with a timer
 */
function timeGoesBy() {
    // After 5 seconds of playing, if the frog doesn't eatenoigh, it becomes hungry, every two seconds the placement goes down 3 units
    if (frameCount % 120 === 0 && bgTimer > 300) { //
        placement -= 3;
    }

    // If it is too hungry, it dies
    if (placement <= -1) {
        MENU = 4
    }

    // After 30 seconds and if the score is bigger than zero
    if (bgTimer === 1800 && placement >= 1) {
        MENU = 6;
    }

    // For meeeee
    // console.log(placement);
    //     console.log(score);
    //     console.log(bgTimer);
}

/**
 * A function with a timer that also controls the background color
 */
function resetBg() {
    // console.log(bgTimer);
    bgTimer += 1; // This counts the frames
    // Makes the background color change, the 't' goes from 0 to 1 over time
    let t = map(bgTimer, 0, 1800, 0, 1); // takes 1800 frames (30 sec at 60fps)
    t = constrain(t, 0, 1); // Prevents t from going over 1
    // Mixes the two colors
    let currentColor = lerpColor(bgStartColor, bgEndColor, t);
    // Applies the current color as background
    background(currentColor);
}
