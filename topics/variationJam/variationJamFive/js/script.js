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
        speed: 50, // I made the tongue faster
        // Determines how the tongue moves each frame
        size: 30,
        state: "idle", // State can be: idle, outbound, inbound
    }
};

let score = 0; // score starts at zero and goes up
let flies = []; // an array that holds many flies
const NUM_FLIES = 160; // The number of flies that we begin with 
let font; // our custom font
let buzziness = 1;
let gameIsGaming = true;
let flyImage = undefined; // Our fly as an image


/**
 * Preloads font 
 */
function preload() {
    font = loadFont('assets/inconsolata.otf');
    flyImage = loadImage('assets/images/fly.png');
}

/**
 * Creates canvas and flies once at the beginning
 */
function setup() {
    createCanvas(500, 500);
    for (let i = 0; i < NUM_FLIES; i++) {
        flies.push(createFly());
    }
}

/**
 * This is called every frame
 */
function draw() {
    background("#87ceeb"); // changing background color

    // a loop that goes through the each fly in the flies array to draw and move them
    for (const fly of flies) {
        moveFly(fly);
        drawFly(fly);
    }
    drawfrog(); // Draws the frogs
    movefrog();  // Moves the frogs
    moveTongue(); // Moves the tongue
    if (gameIsGaming) {
        checkTongueFlyOverlap(); // Checks the overlap between frog and tongue
    }
    end()
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
        if (frog.tongue.state === "idle") {
            frog.tongue.state = "outbound"; // The tongue goes out and in depending on the state.
        }
    }
}

/**
 * Creates the flies with random y, sizes and speeds
 */
function createFly() {
    return {
        x: random(0, width), // Starts far off-screen so the flies enter the canvas naturally
        y: random(0, height - 50),
        size: random(9, 18),
    };
}

/**
 * Moves the fly according to its speed.
 * Resets the fly if it gets all the way to the right.
 */
function moveFly(fly) {
    // Move the fly 
    fly.x += random(-buzziness, buzziness);
    fly.y += random(-buzziness, buzziness);

    // Constrains the flies withing canvas boundaries
    fly.x = constrain(fly.x, 0, width);
    fly.y = constrain(fly.y, 0, height);
}

/**
 * Draws the fly as a black circle and two white wings
 */
function drawFly(fly) {
    // back wing
    push();
    imageMode(CENTER);
    image(flyImage, fly.x, fly.y, fly.size, fly.size)
    pop();
}

/**
 * Moves the frog to match the mouse's X position
 */
function movefrog() {
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
 * Displays the tongue (tip and line connection) and the frog 
 */
function drawfrog() {

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
    fill("#00ff00");
    strokeWeight(10);
    stroke('green');
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
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    for (const fly of flies) { // for each fly inside the flies array, check for overlap
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
            buzziness += 0.2;
            score += 1;

            for (const remainingFlies of flies) { //different variable name because we are already in a loop
                remainingFlies.size += 2;
                // console.log(remainingFlies.size);
                if (remainingFlies.size > 130) {
                    gameIsGaming = false;
                }
            }
        }
        console.log(fly.size)
    }
}


/**
 * Checks if no flies remain; if so, displays the end message
 */
function end() {
    if (!gameIsGaming) {
        push();
        noStroke();
        fill(255);
        textFont(font);
        textSize(30);
        textAlign(CENTER, CENTER);
        text('The flies grew too angry\nand too big to eat :(\n\nesc to play again\nback arrow for the menu', width / 2, height / 2);
        pop();
    }
}


