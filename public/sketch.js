let clientSocket = io();

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  fill("#ff0a54");
  noStroke();
  circle(data.x, data.y, 20);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#fff0f3");

  textAlign(CENTER, CENTER);
  textSize(70);
  fill("#ff7096");
  text("show some love <3", windowWidth / 2, windowHeight / 2 - 200);
}

function draw() {
  fill('#ff7096');
  noStroke();
  circle(mouseX, mouseY, 20);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
  };
  clientSocket.emit("mouse", message);
}
