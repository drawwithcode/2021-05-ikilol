console.log("running the server!");
//  Load express
let express = require("express");
let app = express();
//  Defined port (for localhost)
//  Port created by heroku or Locally
const port = process.env.PORT || 8000;

//  Defined server and connection
let server = app.listen(port);
console.log("Server is running on https://localhost:" + port);

app.use(express.static("public"));

app.use(express.static('public'));

console.log("server running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log('newConnection '+ socket.id);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data)
        console.log(data);
    }
}
