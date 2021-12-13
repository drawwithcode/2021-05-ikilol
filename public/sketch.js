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
  fill("#AF1B1B");
  ellipse(data.x, data.y, 20, 20);
}

function mouseDragged(){
  console.log(mouseX + ',' + mouseY);

  var data = {

    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data)

  noStroke();
  fill("#E2252B");
  ellipse(mouseX, mouseY, 20, 20);
}

function draw() {

  var thirdText = "Connect with someone and show some love!";
  
    textFont("VT323");
    textAlign(CENTER);
    textSize(60);
    fill("#AF1B1B");

    text(thirdText, width/2, 200);

}
