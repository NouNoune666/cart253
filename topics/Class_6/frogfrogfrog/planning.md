# Frogfrogfrog

The initial idea: 

> Frog eating flies

The experience:

> The user controls a frog at the bottom of the screen, they can shoot out the frog's tongue and catch a fly which is moving on the screen. if the tongue hits the fly it gets eaten.

Basic things to do
- Draw the frog (image? circle)
- Draw the tongue
- Move the frog (how? mouse? keyboard?)
- Move the fly (how? in line? buzzing around? random?)
- Figure out if the tongue hits the fly?

Questions:

- What does the frog look like?
    - Circles!
- How does the user control the frog?
    - with mouse position (left and right)
    - user launches the tongue with a mouse click
    - 
- How does the fly move?
- The flys starts on the left at a random y position, and moves to the right in a line
- What does the tongue look like?
    - red line coming out of the frog
- What happens if the user doesn't catche the fly?
    - if the fly goes off the right side, it just resets
- What does it all look like on the screen? Layout?
    - frog at the bottom, fly moving across, tongue shooting out of frog

What is there?
- the frog
    - position and size
    - position and size of tongue
    - what is the tongue doing
- the fly
    - position and size
    - velocity

    frog
        body
            x
            y
            size
        tongue
            x
            y
            size
            speed
            state
    fly
        x
        y
        size
        speed

What happens in this project?

- Start (setup)
    - Create a canvas
- Every frame (draw)
    - Draw the background
    - move and draw the fly
        - add the fly's speed to its x (left to right)
        - draw a circle at the fly's position with its size (black)
    - move and draw the frog
        - move the frog to the mouse's x position
        - draw a green sircle at the frog's position with its size 
    - move and draw the tongue
        - if the tongue isn't launched, just do nothing, don't draw it
        - If the tongue is launched, move it up (by its speed)
        - if the tongue is coming back, move it down (by it's speed)
        - if the tongue its the top, move it down (by its speed)
        - if the tongue hits the top, send it back down
        - if the tongue gets back to the frog, then stop it
    - Draw the tongue
        - draw a line from the frog to the tongue position
        - draw a circle at the end of the tongue (secret circle)
    - check if the tongue hit the fly
        - check if tongue circle and fly circle overlap
        - if the do, then the fly gets caught
        if they don't, nothing happens

