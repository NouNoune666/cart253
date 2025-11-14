// An object for our frog 
const Frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 75
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: 250, // stuck at center of canvas
        y: 250, // stuck at center of canvas
        size: 15,
    }
};

let snow = []; // an array that holds many snowflakes
let flies = []; // an array that holds many flies
const NUM_FLIES = 25; // The number of flies 
const NUM_snowFlakes = 200; // The number of snowflakes
let font; // our custom font
let score = 0; // number of flies eaten at the beginning

/**
 * Preloads font 
 */
function preload() {
    font = loadFont('assets/inconsolata.otf');
}

/**
 * Creates canvas, flies and snowflakes once at the beginning
 */
function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < NUM_FLIES; i++) {
        flies.push(createFly());
    }

    for (let i = 0; i < NUM_snowFlakes; i++) {
        snow.push(createSnowFlake());
        console.log(snow.length);
    }
}

/**
 * This is called every frame
 */
function draw() {
    background("#151981ff"); // a nice blue winter sky

    // a loop that goes through each fly in the flies array to draw and move them
    for (const fly of flies) {
        moveFly(fly);
        drawFly(fly);
    }

    // a loop that goes through each snowflake in the snow array to draw and move them
    for (const snowFlake of snow) {
        drawSnow(snowFlake);
        moveSnow(snowFlake);
    }

    drawFrog(); // Draws the frog
    drawPole(); // Draws the frozen pole
    moveFrog();  // Moves the frog
    checkFrogFlyOverlap(); // Checks the overlap between frog and flies (not the tongue anymore)
    scoreBoard(); // Counts number of flies eaten
    backstory(); // Writes text explaining a little backstory

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
        x: -200,
        y: random(0, height),
        size: random(8, 17),
        speed: random(0.01, 0.4),
        bounce: 'false', // when this is changed, the flies movement change
    };
}

/**
 * Moves the fly according to its speed.
 * Movement direction changes after hitting borders
 */
function moveFly(fly) {
    for (const fly of flies) {
        // Hits right wall
        if (fly.x > 500) {
            fly.bounce = 'true'
        }

        // Hits left wall
        if (fly.x < 0) {
            fly.bounce = 'false'
        }

        // Moves to the right
        if (fly.bounce === 'false') {
            fly.x += fly.speed;
        }

        // Moves to the left
        if (fly.bounce === 'true') {
            fly.x -= fly.speed;
        }
    }


    // Move the fly
    // Handle the fly going off the canvas
    // if (fly.x < 0) {
    //     // resetFly(fly);
    // }
}

/**
 * Draws the fly as a black circle and two white wings
 */
function drawFly(fly) {
    // back wing
    push();
    noStroke();
    fill("#ffffffff");
    ellipse(fly.x - 3, fly.y - 5, fly.size / 2);
    pop();
    // The body
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
    // front wing
    push();
    noStroke();
    fill("#ffffffff");
    ellipse(fly.x, fly.y - 4, fly.size / 2);
    pop();
}

/**
 * Draws the pole that the silly frog licked
 */
function drawPole() {
    push();
    stroke("#403f3fff");
    strokeWeight(20);
    line(width / 2, height, width / 2, height / 2.5)
    pop();
}

/**
 * Creates the snowflakes with random y, x, sizes and speeds
 */
function createSnowFlake() {
    return {
        x: random(0, width),
        y: random(0, height),
        size: random(1, 4),
        speed: random(1, 3),
    };
}

/**
 * Draws the snowflakes on the canvas
 */
function drawSnow(snowFlake) {
    push();
    noStroke();
    fill("white");
    ellipse(snowFlake.x, snowFlake.y, snowFlake.size)
    pop();
}

/** 
 * Moves the snowflakes and resets them when they hit the bottom
*/
function moveSnow(snowFlake) {
    snowFlake.y += snowFlake.speed;
    // Handle the snow going off the canvas
    if (snowFlake.y > height) {
        resetSnow(snowFlake);
    }
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly(fly) {
    // gives new speed, size and y to the flies so that they don't stay the same when reset
    fly.x = 0;
    fly.y = random(0, height);
    // fly.size = random(7, 16); // deleted this so that the size stays constant and it looks like the same flies coming back
    fly.speed = random(0.01, 0.4);

}

/**
 * Resets the snow to the top with a random x
 */
function resetSnow(snowFlake) {
    // gives new speed, size and y to the snowflakes so that they don't stay the same when reset
    snowFlake.y = 0;
    snowFlake.x = random(0, width);
    snowFlake.size = random(1, 2);
    snowFlake.speed = random(1, 3);

}

/**
 * Moves the frog to the mouse X and Y position
 */
function moveFrog() {
    Frog.body.x = mouseX;
    Frog.body.y = mouseY;
}


/**
 * Displays the tongue and the frog 
 */
function drawFrog() {

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

    // Draw the frog's eyes
    push();
    fill("#000000ff");
    noStroke();
    ellipse(Frog.body.x + 25, Frog.body.y - 15, Frog.body.size / 2);
    ellipse(Frog.body.x - 25, Frog.body.y - 15, Frog.body.size / 2);
    pop();

    // Draw the frog's feet
    push();
    fill("#00ff00");
    noStroke();
    ellipse(Frog.body.x + 25, Frog.body.y + 30, Frog.body.size / 2, Frog.body.size / 3.5);
    ellipse(Frog.body.x - 25, Frog.body.y + 30, Frog.body.size / 2, Frog.body.size / 3.5);
    pop();
}

/**
 * Handles the frog overlapping the fly
 */
function checkFrogFlyOverlap() {
    for (const fly of flies) { // for each fly inside the flies array, check this
        // Get distance from tongue to fly
        const d = dist(Frog.body.x, Frog.body.y, fly.x, fly.y);
        // Check if it's an overlap
        const eaten = (d < Frog.body.size / 2 + fly.size / 2);

        if (eaten) {
            // Resets flies
            resetFly(fly);
            // resetFly(fly);
            score += 1;
            // do something with color
        }
    }
}


/**
 * Displays the score (text)
 */
function scoreBoard() {
    push();
    noStroke();
    fill(255);
    textFont(font);
    textSize(30);
    textAlign(RIGHT);
    text('number of flies eaten: ' + score, width - 10, height - 20);
    pop();
}

/**
 * Displays the backstory (text)
 */
function backstory() {
    push();
    noStroke();
    fill(255);
    textFont(font);
    textSize(25);
    textAlign(LEFT);
    text('Uh oh, maybe you should not\nhave licked that frozen pole.', 10, 30);
    pop();
}




