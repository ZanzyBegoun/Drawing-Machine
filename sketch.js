var redValue = 0;
var greenValue = 0;
var blueValue = 0;

var x = 0;


function setup() {
    createCanvas(700, 700);
    background(0);
    fill(0);
}

function draw() {

    
    redValue = random(255);
    greenValue = random(255);
    blueValue = random(255);

    stroke(redValue, greenValue, blueValue);

    if (mouseIsPressed == false) {
        line(mouseX, mouseY, height, height);
        line(mouseX, mouseY, height/20, height/20);
    } else {
        noStroke();
        ellipse((mouseY + random(-10, 10)), mouseX + random(-10, 10), 450, 450);
        fill(135, 23, 175, 25);
    }
   
    
    push();
    noFill();
    stroke(255, 225, 225, 50);
    translate(width/2, height/2);
    ellipse(0, 0, x, x);
    
    if(x< width+300) {
        x++;
    } else {
     x=-1100;
    }
    pop();
    
    x++;
}

