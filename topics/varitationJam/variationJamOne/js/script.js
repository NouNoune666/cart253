// An object for our () frog
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
        speed: 40, // I made the tongue faster
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

let flies = []; // an array that holds many flies
const NUM_FLIES = 199; // The number of flies that we begin with (+1)


let font;

function preload() {
    font = loadFont('assets/inconsolata.otf');
}


/**
 * This will be called just before the  variation starts
 */
function setup() {
    createCanvas(500, 500);
    flies.push(createFly());
    for (let i = 0; i < NUM_FLIES; i++) { // happens  time
        flies.push(createFly());
    }
}

/**
 * This is called every frame when variation "" is active
 */
function draw() {
    background("#87ceeb"); // a nice blue sky

    // a loop that goes through the each fly in the flies array to draw and move them
    for (const fly of flies) {
        moveFly(fly);
        drawFly(fly);
    }

    drawFrog(); // Draws the frogs
    moveFrog();  // Moves the frogs
    moveTongue(); // Moves the tongue
    checkTongueFlyOverlap(); // Checks the overlap between frog and tongue
    end(); // Checks to see if there is zero flies left
    score();
}

/**
 * This is called whenever the escape key is pressed while the "" variation is active, player is directed back to the main menu.
 */
function keyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This is called whenever the mouse is pressed while the '''' variation is active. The tongue goes out and in depending on the state.
 */
function mousePressed() {
    if (Frog.tongue.state === "idle") {
        Frog.tongue.state = "outbound";
    }
}


/**
 * Creates the flies with random y, sizes and speeds
 */
function createFly() {
    return {
        x: random(-3, 0),
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
 * Draws the fly as a black circle
 */
function drawFly(fly) {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
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
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
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
    fill("#00ff00");
    noStroke();
    ellipse(Frog.body.x, Frog.body.y, Frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    for (const fly of flies) { // for each fly inside the flies array, check this
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
        }
    }
}

function end() {
    console.log(flies.length)
    if (flies.length === 0) {

        console.log("no more flies");

        push();
        noStroke();
        fill(255);
        textFont(font);
        textSize(30);
        textAlign(CENTER, CENTER);
        text('> you ate all the flies\n> congrats i guess\n> back button for main menu', width / 2, height / 2);
        pop();
    }

}

function score() {
    push();
    noStroke();
    fill(255);
    textFont(font);
    textSize(30);
    textAlign(LEFT);
    text(flies.length + ' flies left', 10, 30);
    pop();
}



