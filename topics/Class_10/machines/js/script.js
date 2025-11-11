const machineWidth = 100;
const machineHeight = 100;

// An array of machines data
let machines = [
    {
        type:"incinerator",
        x: 0,
        y: 100,
        width: machineWidth,
        height: machineHeight,
        fill: "#ff4400",
    },
    {
        type:"freezer",
        x: 150,
        y: 100,
        width: machineWidth,
        height: machineHeight,
        fill: "#bbbbff",
    },
    {
        typer:"crusher",
        x: 300,
        y: 100,
        width: machineWidth,
        height: machineHeight,
        fill: "#777777",
    },
    {
        type:"silly",
        x: 200,
        y: 50,
        width: machineWidth,
        height: machineHeight,
        fill: "#374bcdff"
    }
];

function setup() {
    createCanvas(400, 200);
}

function draw() {
    background(0);
    for (let machine of machines) {
        drawMachine(machine);
    }
}

function drawMachine(machine) {
    push();
    noStroke();
    fill(machine.fill);
    rect(machine.x, machine.y, machine.width, machine.height);
    pop();
}