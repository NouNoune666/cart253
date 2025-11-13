// An object for our (one) frog
const oneFrog = {
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
const NUM_FLIES = 200; // The number of flies that we begin with


let font;

function onePreload() {
    font = loadFont('assets/inconsolata.otf');
}


/**
 * This will be called just before the one variation starts
 */
function oneSetup() {
    flies.push(createOneFly());
    for (let i = 0; i < NUM_FLIES; i++) { // happens one time
        flies.push(createOneFly());
    }
}

/**
 * This is called every frame when variation "one" is active
 */
function oneDraw() {
    background("#87ceeb"); // a nice blue sky

    // a loop that goes through the each fly in the flies array to draw and move them
    for (const fly of flies) {
        moveOneFly(fly);
        drawOneFly(fly);
    }

    drawOneFrog(); // Draws the frogs
    moveOneFrog();  // Moves the frogs
    moveOneTongue(); // Moves the tongue
    checkOneTongueFlyOverlap(); // Checks the overlap between frog and tongue
    oneEnd(); // Checks to see if there is zero flies left
}

/**
 * This is called whenever the escape key is pressed while the "one" variation is active, player is directed back to the main menu.
 */
function oneKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This is called whenever the mouse is pressed while the ''one'' variation is active. The tongue goes out and in depending on the state.
 */
function oneMousePressed() {
    if (oneFrog.tongue.state === "idle") {
        oneFrog.tongue.state = "outbound";
    }
}


/**
 * Creates the flies with random y, sizes and speeds
 */
function createOneFly() {
    return {
        x: random(-3, 0),
        y: random(17, height - 100),
        size: random(7, 16),
        speed: random(3, 7),
    };
}


/**
 * Moves the fly according to its speed.
 * Resets the fly if it gets all the way to the right.
 */
function moveOneFly(fly) {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetOneFly(fly);
    }
}

/**
 * Draws the fly as a black circle
 */
function drawOneFly(fly) {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetOneFly(fly) {
    // gives new speed, size and y to the flies so that they don't stay the same when reset
    fly.x = random(-3, 0);
    fly.y = random(17, height - 100);
    fly.size = random(7, 16);
    fly.speed = random(3, 7);

}

/**
 * Moves the frog to the mouse X position
 */
function moveOneFrog() {
    oneFrog.body.x = mouseX;
}

/**
 * This function handles moving the tongue based on its state
 */
function moveOneTongue() {
    // Tongue matches the frog's x
    oneFrog.tongue.x = oneFrog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (oneFrog.tongue.state === "idle") {
        // Does nothing
    }
    // If the tongue is outbound, it moves up
    else if (oneFrog.tongue.state === "outbound") {
        oneFrog.tongue.y += -oneFrog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (oneFrog.tongue.y <= 0) {
            oneFrog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (oneFrog.tongue.state === "inbound") {
        oneFrog.tongue.y += oneFrog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (oneFrog.tongue.y >= height) {
            oneFrog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawOneFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(oneFrog.tongue.x, oneFrog.tongue.y, oneFrog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(oneFrog.tongue.size);
    line(oneFrog.tongue.x, oneFrog.tongue.y, oneFrog.body.x, oneFrog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(oneFrog.body.x, oneFrog.body.y, oneFrog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkOneTongueFlyOverlap() {
    for (const fly of flies) { // for each fly inside the flies array, check this
        // Get distance from tongue to fly
        const d = dist(oneFrog.tongue.x, oneFrog.tongue.y, fly.x, fly.y);
        // Check if it's an overlap
        const eaten = (d < oneFrog.tongue.size / 2 + fly.size / 2);

        if (eaten) {
            // Removes a fly when eaten instead of resetting it
            const flyIndex = flies.indexOf(fly)
            flies.splice(flyIndex, 1);
            // Bring back the tongue
            oneFrog.tongue.state = "inbound";

        }
    }
}

console.log(flies.length)
function oneEnd() {
    if (flies.length === 0) {

        console.log("no more flies");

        push();
        noStroke();
        fill(255);
        textFont(font);
        textSize(30);
        textAlign(CENTER);
        text('you ate all the flies\ncongrats i guess\nesc for main menu', width / 2, height / 2);
        pop();
    }

}

