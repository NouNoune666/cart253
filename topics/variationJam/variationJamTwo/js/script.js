// An object for our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 40, // I made the tongue faster
        state: "idle" // State can be: idle, outbound, inbound
    }
};

let flies = []; // an array that holds many flies
const NUM_FLIES = 100; // The number of flies that we begin with (+1)
let seconds = 10; // Countdown will start at 10 seconds
let font; // Our font
let gameIsGaming = true; // This determines when we are in game mode (the opposite of game mode is end mode)
let score = 0; // begins at zero and will go up

/**
 * Preloads font 
 */
function preload() {
    font = loadFont('assets/inconsolata.otf');
}

/**
 * Creates canvas and flies once at the beginning
 */
function setup() {
    createCanvas(500, 500);
    flies.push(createFly());
    for (let i = 0; i < NUM_FLIES; i++) { // happens at the beginning
        flies.push(createFly());
    }
}

/**
 * This is called every frame
 */
function draw() {
    background("#87ceeb"); // a nice blue sky

    // conditional, gameIsGaming will become false after 5 seconds and these things will no longer be called
    if (gameIsGaming === true) {
        moveTongue(); // Moves the tongue
        checkTongueFlyOverlap(); // Checks the overlap between frog and tongue
        drawTongue(); //draws tongue
    }

    // a loop that goes through each fly in the flies array to draw and move them
    for (const fly of flies) {
        moveFly(fly);
        drawFly(fly);
    }

    drawFrog(); // Draws the frog
    moveFrog();  // Moves the frog
    secondsLeft(); // this acts as a countdown
    timeGoesBy(); // handles the endings
    tongueControl(); // tongue will be controlled by arrows
}

/**
 * Tongue is now controlled by arrows
 */
function tongueControl() {
    if (keyIsDown(UP_ARROW) === true && frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
    if (keyIsDown(DOWN_ARROW) === true && frog.tongue.state === "outbound") {
        frog.tongue.state = "inbound";
    }
}

/**
 * When ESC is pressed, the game starts over
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
        x: random(-500, 0), // Stars very off screen more more natural flying movements
        y: random(17, height - 100),
        size: random(8, 17),
        speed: random(3, 7),
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
 * Resets the fly to the left with a random y
 */
function resetFly(fly) {
    // gives new speed, size and y to the flies so that they don't stay the same when reset
    fly.x = random(-3, 0);
    fly.y = random(17, height - 100);
    // fly.size = random(7, 16); // deleted this so that the size stays constant and it looks like the same flies coming back
    fly.speed = random(3, 7);
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
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Draws the frog
 */
function drawFrog() {
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
    ellipse(frog.body.x + 75, frog.body.y - 20, frog.body.size - 30);
    ellipse(frog.body.x - 75, frog.body.y - 20, frog.body.size - 30);
    pop();
}

/**
 * Moved the tongue out of draw frog so that it disapears at the end 
 */
function drawTongue() {
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

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    for (const fly of flies) { // for each fly inside the flies array, check this
        // Get distance from tongue to fly
        const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
        // Check if it's an overlap
        const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
        console.log(score);
        if (eaten) {
            // Removes a fly when eaten instead of resetting it
            // const flyIndex = flies.indexOf(fly)
            // flies.splice(flyIndex, 1);
            resetFly(fly);
            score += 1;
            // Bring back the tongue
            frog.tongue.state = "inbound";
        }
    }
}

/**
 * Every 60 frames second goes down
 */
function secondsLeft() {
    if (frameCount % 60 === 0) {
        seconds += -1
    }
}

/**
 * Determines what happens when the countdown is running and when it stops
 */
function timeGoesBy() {

    // text displayed when countdown still running
    if (seconds >= 0) {
        push();
        noStroke();
        fill('red');
        textFont(font);
        textSize(30);
        textAlign(LEFT);
        text(seconds + ' seconds left', 10, 30);
        pop();

        push();
        noStroke();
        fill(255);
        textFont(font);
        textSize(30);
        textAlign(LEFT);
        text('flies eaten: ' + score, width / 2, height - 20);
        pop();
    }

    // Text displayed when countdown is over (- or more than one fly caught)
    if (seconds <= 0 && score != 1) {
        end();
        gameIsGaming = false
    }
    // Text displayed when countdown is over + 1 fly has been caught
    if (seconds <= 0 && score === 1) {
        endOneFly();
        gameIsGaming = false;
    }
}

/**
 * Displays end of game text (0 or more than one fly caught)
 */
function end() {
    push();
    noStroke();
    fill(255);
    textFont(font);
    textSize(30);
    textAlign(CENTER, CENTER);
    text('you ate ' + score + ' flies\nand your tongue was cut off\nsorry :(\n', width / 2, height / 2);
    pop();
}


/**
 * Displays end of game text (one fly caught)
 */
function endOneFly() {
    push();
    noStroke();
    fill(255);
    textFont(font);
    textSize(30);
    textAlign(CENTER, CENTER);
    text('you ate 1 fly\nand your tongue was cut off :(\n\nesc to play again\nback arrow for the menu', width / 2, height / 2);
    pop();
}





