var socket;
var thirdText;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#F0C1BC");

  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing)
}

function newDrawing(data){
  noStroke();
  fill("#A8271D");
  ellipse(data.x, data.y, 36, 36);
}

function mouseDragged(){
  console.log(mouseX + ',' + mouseY);

  var data = {

    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data)

  noStroke();
  fill("#AF1B1B");
  ellipse(mouseX, mouseY, 60, 60);
}

function draw() {

  var thirdText = "Connect with someone and show some love!";
  
    textFont("VT323");
    textAlign(CENTER);
    textSize(60);
    fill(255);

    text(thirdText, width/2, 100);

}
