/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

const target = {
  x: 200,
  y: 100,
  size: 50,
  fill: "#b55fe3ff"
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck
  drawUser();
  drawPuck();

  // Step2 - Move puck
  movePuck()

  // Step3 - Draw target
  drawTarget();

}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();

}

/**
 * Displays the target
 */
function drawTarget() {
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();

}

function movePuck(){
// Calculate distance between circles' centres
  const d = dist(user.x, user.y, puck.x, puck.y);
// Check if that distance is smaller than their two radii, 
// because if it is, they are overlapping by the amazing
// power of geometry!
  const overlap = (d < user.size/2 + puck.size/2);

  // Set fill based on whether they overlap
  if (overlap) {
    let distX = abs(user.x - puck.x)
    let distY = abs(user.y - puck.y)

    if (distX < distY) {
    
        // Push on Y    
        if (user.y < puck.y) {
        //user above puck
        puck.y += 10
    }

        if (user.y > puck.y) {
        //user below puck
        puck.y -= 10
    }


  
} 
    if (distX > distY)  {
   
    }

        if (user.x < puck.x) {
        //user left to puck
        puck.x += 10
    }   
        if(user.x > puck.x)
        //user right to puck 
        puck.x -= 10
  }

  

}
