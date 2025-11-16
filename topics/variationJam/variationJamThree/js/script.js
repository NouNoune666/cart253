// An object for our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 0,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 0,
        size: 30, // Made tongue bigger so that it is easier to catch flies, until you get to the last one...
        speed: 40, // I made the tongue a bit faster
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

let flies = []; // an array that holds many flies
const NUM_FLIES = 50; // The number of flies that we begin with 
let font; // our custom font
let oneLessLonelyFly = false; // this is only true when there is one fly left
let showMeanText = false; // Will be activated later on when oneLessLonelyFly is true
let randomMean; // Our JSON
let bgStartColor = undefined; // Our background's start color
let bgEndColor = undefined; // Our background's end color

/**
 * Preloads font and JSON file
 */
function preload() {
    font = loadFont('assets/inconsolata.otf');
    meanFly = loadJSON("assets/Data/meanFly.json");
}

/**
 * Creates canvas and flies once at the beginning
 */
function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < NUM_FLIES; i++) {
        flies.push(createFly());
    }

    bgStartColor = color(135, 206, 235); // sky blue
    bgEndColor = color(255, 0, 0); // red
}

/**
 * This is called every frame
 */
function draw() {

    // if there is more than one fly left, calls the regular checkTongueFlyOverlap, if not calls the mean one
    if (oneLessLonelyFly === false) {
        checkTongueFlyOverlap();
        background(bgStartColor); // a nice blue sky
    }
    else {
        checkTongueFlyOverlapMean();
        background(bgEndColor); // a scary red screen
    }

    // a loop that goes through each fly in the flies array to draw and move them
    for (const fly of flies) {
        moveFly(fly);
        drawFly(fly);
    }

    drawFrog(); // Draws the frog
    moveFrog();  // Moves the frog
    moveTongue(); // Moves the tongue
    end(); // Constantly checks to see if there is zero flies left
    score(); // Counts number of flies eaten

    // When showMeanText becomes true (when there's only one fly left), the mean text function is called
    if (showMeanText) {
        meanText();
    }
}


/**
 * This is called whenever the mouse is pressed. The tongue goes out and in depending on the state.
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}

/**
 * When esc is pressed, the game starts over
 */
function keyPressed() {
    if (keyCode === 27) {
        location.reload(); // this reloads the whole page, neat!
    }
}

/**
 * Creates the flies with random y, sizes and speeds
 */
function createFly() {
    return {
        x: random(-500, 0), // Starts very off screen which makes for more natural flying movements
        y: random(120, height),
        size: random(13, 19),
        speed: random(5, 7),
    };
}

/**
 * Moves the fly according to its speed.
 * Resets the fly if it gets all the way to the right.
 */
function moveFly(fly) {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly(fly);
    }
}

/**
 * Draws the fly as a black circle and two white wings
 */
function drawFly(fly) {
    // The body
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
    // first wing
    push();
    noStroke();
    fill("#ffffffff");
    ellipse(fly.x, fly.y - fly.size / 2, fly.size / 2, fly.size);
    pop();
    // second wing
    push();
    noStroke();
    fill("#ffffffff");
    ellipse(fly.x, fly.y + fly.size / 2, fly.size / 2, fly.size);
    pop();
}


/**
 * Resets the fly to the left with a random x and y
 */
function resetFly(fly) {
    // gives new speed, size and y to the flies so that they don't stay the same when reset
    fly.x = random(-3, 0);
    fly.y = random(120, height);
    // fly.size = random(7, 16); // deleted this so that the size stays constant and it looks like the same flies coming back
    fly.speed = random(5, 7);
}

/**
 * Moves the frog to the mouse X position
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * This function handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;

    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Does nothing
    }
    // If the tongue is outbound, it moves down
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y >= height) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves up
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y -= frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog 
 */
function drawFrog() {

    //The tongue when one fly is left
    if (oneLessLonelyFly) {
        // Draw the tongue tip
        push();
        fill("#3d40c5ff");
        noStroke();
        ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
        pop();

        // Draw the rest of the tongue
        push();
        stroke("#3d40c5ff");
        strokeWeight(frog.tongue.size);
        line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
        pop();
    }

    // The tongue when there are many flies
    if (!oneLessLonelyFly) {
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
    }

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();

    // Draw the frog's eyes
    push();
    fill("#000000ff");
    noStroke();
    ellipse(frog.body.x + 75, frog.body.y + 20, frog.body.size - 30);
    ellipse(frog.body.x - 75, frog.body.y + 20, frog.body.size - 30);
    pop();
}

/**
 * Handles the tongue overlapping the fly (when more than one fly left)
 */
function checkTongueFlyOverlap() {
    for (const fly of flies) { // for each fly inside the flies array, check this
        // Get distance from tongue to fly
        const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
        // Check if it's an overlap
        const eaten = (d < frog.tongue.size / 2 + fly.size / 2);

        if (eaten) {
            // Removes a fly when eaten instead of resetting it
            const flyIndex = flies.indexOf(fly)
            flies.splice(flyIndex, 1);
            // Bring back the tongue
            frog.tongue.state = "inbound";
        }
    }
}

/**
 * Handles the tongue overlapping the fly (when one fly left)
 */
function checkTongueFlyOverlapMean() {
    console.log('here');
    for (const fly of flies) { // for each fly inside the flies array, check this
        // Get distance from tongue to fly
        const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
        // Check if it's an overlap
        const eaten = (d < frog.tongue.size / 2 + fly.size / 2);

        if (eaten) {
            // tongue is no longer brought back down
            // Chooses an insult in JSON file
            randomMean = random(meanFly.meanies);
            showMeanText = true;
        }
    }
}

/**
 * Displays random insults from JSON file
 */
function meanText() {
    push();
    noStroke();
    fill(255);
    textFont(font);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(randomMean, width / 2, height / 2);
    pop();
}

/**
 * Is triggered when there's only one fly left
 */
function end() {
    console.log(flies.length)
    if (flies.length === 1) {
        oneLessLonelyFly = true; // Activates the checkTongueFlyOverlapMean() function

    }
}

/**
 * Displays number of flies left on screen
 */
function score() {
    push();
    noStroke();
    fill(255);
    textFont(font);
    textSize(30);
    textAlign(LEFT);
    text('number of flies left: ' + flies.length, 10, height - 30);
    pop();
}



