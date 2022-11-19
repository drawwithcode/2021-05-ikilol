let clientSocket = io();
let message = 0;

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  fill("#ff0a54");
  noStroke();
  circle(500, 500, data);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#fff0f3");

  textAlign(CENTER, CENTER);
  textSize(70);
  fill("#ff7096");
  text("show some love", windowWidth / 2, windowHeight / 2 - 200);
}

function draw() {
  fill('#ff7096');
  noStroke();
  circle(300, 300, message);
}

function mousePressed() {
   message += 10;
  clientSocket.emit("mouse", message);
}
