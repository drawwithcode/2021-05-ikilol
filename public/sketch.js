let clientSocket = io();

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  fill("red");
  noStroke();
  circle(data.x, data.y, 20);
}

function preload() {
  //caricamento sfondo
  sfondo = loadImage("./asset/background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(sfondo, 0, 0, windowWidth, windowHeight);

  textAlign(CENTER, CENTER);
  textSize(70);
  fill("black");
  text("PICK YOUR SIDE", windowWidth / 2, windowHeight / 2 - 200);
}

function draw() {
  fill("black");
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
