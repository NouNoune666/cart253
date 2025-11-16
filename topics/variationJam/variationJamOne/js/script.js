// An object for our frog
const Frog = {
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
        speed: 50, // I made the tongue faster
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

let frogStartColor = undefined; // Our frog's healthy color
let frogEndColor = undefined; // Our frog's sick color
let bgStartColor = undefined; // Our background's start color
let bgEndColor = undefined; // Our background's end color
let score = 0; // score starts at zero and goes up
let flies = []; // an array that holds many flies
const NUM_FLIES = 200; // The number of flies that we begin with 
let font; // our custom font

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
    for (let i = 0; i < NUM_FLIES; i++) {
        flies.push(createFly());
    }
    bgStartColor = color(224, 114, 212); // pretty pink
    bgEndColor = color(79, 84, 10);       // vomit green
}

/**
 * This is called every frame
 */
function draw() {
    let progress = map(score, 0, NUM_FLIES, 0, 1) // from 0 to 200 = from 0 to 1
    let bgColor = lerpColor(bgStartColor, bgEndColor, progress)
    background(bgColor); // changing background color

    // a loop that goes through each fly in the flies array to draw and move them
    for (const fly of flies) {
        moveFly(fly);
        drawFly(fly);
    }

    drawFrog(); // Draws the frog
    moveFrog();  // Moves the frog
    moveTongue(); // Moves the tongue
    checkTongueFlyOverlap(); // Checks the overlap between frog and tongue
    end(); // Checks to see if there are zero flies left
    DisplayScore(); // Counts number of flies eaten
}

/**
 * This is called whenever a certain key is pressed.
 */
function keyPressed() {
    // esc
    if (keyCode === 27) {
        location.reload(); // this reloads the whole page, neat!
    }

    // spacebar, 
    if (keyCode === 32) {
        if (Frog.tongue.state === "idle") {
            Frog.tongue.state = "outbound"; // The tongue goes out and in depending on the state.
        }
    }
}

/**
 * Creates the flies with random y values, sizes and speeds
 */
function createFly() {
    return {
        x: random(-500, 0), // Starts far off-screen so the flies enter the canvas naturally
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
 * Resets the fly to the left with a random y and a randon x
 */
function resetFly(fly) {
    // Gives the fly a new speed and y-position so it doesn't look identical when reset
    fly.x = random(-3, 0);
    fly.y = random(17, height - 100);
    // fly.size = random(7, 16); // deleted this so that the size stays constant and it looks like the same flies coming back
    fly.speed = random(3, 7);
}

/**
 * Moves the frog to match the mouse's X position
 */
function moveFrog() {
    Frog.body.x = mouseX;
}

/**
 * This function handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    Frog.tongue.x = Frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (Frog.tongue.state === "idle") {
        // Does nothing
    }
    // If the tongue is outbound, it moves up
    else if (Frog.tongue.state === "outbound") {
        Frog.tongue.y += -Frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (Frog.tongue.y <= 0) {
            Frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (Frog.tongue.state === "inbound") {
        Frog.tongue.y += Frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (Frog.tongue.y >= height) {
            Frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog 
 */
function drawFrog() {
    frogStartColor = color("#00ff00"); // Our frog's healthy color
    frogEndColor = color("#7b9d7bff"); // Our frog's sick color
    let progress = map(score, 0, NUM_FLIES, 0, 1) // maps from score to progress
    let frogColor = lerpColor(frogStartColor, frogEndColor, progress) // The smooth transition from the frog's two colors

    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(Frog.tongue.x, Frog.tongue.y, Frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(Frog.tongue.size);
    line(Frog.tongue.x, Frog.tongue.y, Frog.body.x, Frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill(frogColor);
    noStroke();
    ellipse(Frog.body.x, Frog.body.y, Frog.body.size);
    pop();

    // Draw the frog's eyes
    push();
    fill("#000000ff");
    noStroke();
    ellipse(Frog.body.x + 75, Frog.body.y - 20, Frog.body.size - 30);
    ellipse(Frog.body.x - 75, Frog.body.y - 20, Frog.body.size - 30);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    for (const fly of flies) { // for each fly inside the flies array, check for overlap
        // Get distance from tongue to fly
        const d = dist(Frog.tongue.x, Frog.tongue.y, fly.x, fly.y);
        // Check if it's an overlap
        const eaten = (d < Frog.tongue.size / 2 + fly.size / 2);

        if (eaten) {
            // Removes a fly when eaten instead of resetting it
            const flyIndex = flies.indexOf(fly)
            flies.splice(flyIndex, 1);
            // Bring back the tongue
            Frog.tongue.state = "inbound";
            score += 1; // score goes up
        }
    }
}

/**
 * Checks if no flies remain; if so, displays the end message
 */
function end() {
    console.log(flies.length)
    if (flies.length === 0) {
        push();
        noStroke();
        fill(255);
        textFont(font);
        textSize(30);
        textAlign(CENTER, CENTER);
        text('you ate all the flies\nyou now want to vomit\n\nesc to play again\nback arrow for the menu', width / 2, height / 2);
        pop();
    }
}

/**
 * Displays the score (text)
 */
function DisplayScore() {
    push();
    noStroke();
    fill(255);
    textFont(font);
    textSize(30);
    textAlign(LEFT);
    text('number of flies left: ' + flies.length, 10, 30);
    pop();
}



