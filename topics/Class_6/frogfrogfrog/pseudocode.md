## PseudoCode for frogfrogfrog

```
frog
        body
            x: 320 // halway across a 640 x 480 canvas
            y: 480 // bottom of a 640 x 480 canvas
            size: 100 // diameter of the frog circle
        tongue
            x: undefined // will always match the body
            y: 480 // at the bottom (important: draw BEHIND the frog)
            size: 20 // The tip of the tongue (circle)
            speed 20 // Speed the tongue movies in pixels/second
            state: idle // at the start the tongue hasn't been launched
    fly
        x: 0 // the left
        y: 200? // This will be a random position...
        size: 10? // Small
        speed: 3? // How fast it moves across the screen

    setup()
        create a 640 x 480 canvas
    
    Draw()
        draw the background // blue?
        moveFly()
        drawFly()
        moveFrog()
        moveTongue()
        drawFrog()
        checkTongueFlyOverlap()
    
    moveFly()
        add fly speed to fly x
        if (fly.x is past the right side of the canvas)
            move the fly back to the left
            give the fly a random y position


    DrawFly()
        draw a black circle at the fly's position with its size

    moveFrog()
        set the frog's x to the mouse's x
    
    moveTongue()
        Set tongue x to frog x 
        if (tongue state is idle)
            do nothing
        else if (tongue state is outbound)
            move the tongue up by its speed
            if (tongue hit the top)
                 set the tongue state to inbound
        else if (tongue state is inbound)
            move the tongue down by its speed
            if (tongue hit bottom)
                set the tongue state to idle

drawFrog()
    draw a red circle at the tongue position with its size (end of tongue circle)
    draw a red line from the tongue position to the frog position
    Draw a green circle at the frog position with its size

checkTongueFlyOverlap()
    if (tongue circle overlaps the fly)
        move the fly back to the left at a random y
        set the tongue state to inbound

mousePressed()
    if (tongue state is idle)
        set tongue state to outbound

       

