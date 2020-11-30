const express = require('express'); 
const app = express();
// const server = app.listen(3000);
let server = app.listen(process.env.PORT || 3000, listen)

function listen() {
  let host = '172.17.26.85'
  let port = server.address().port
  console.log('Example app listening at http://' + host + ':' + port)
}


app.use(express.static('public')); 

console.log("MySocketIsRunning");

const socket = require('socket.io');
const io = socket(server); 

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	console.log('new connection: '+ socket.id);
	socket.on('mouse', mouseMessage); 
	socket.on('mouse2', mouseMessage_2);
	socket.on('mouse3', mouseMessage_3); 

function mouseMessage(data) {
	socket.broadcast.emit('mouse', data);
	console.log(data);
}
function mouseMessage_2(data_2) {
	socket.broadcast.emit('mouse2', data_2);
	console.log(data_2);
}
function mouseMessage_3(data_3) {
	socket.broadcast.emit('mouse3', data_3);
	console.log(data_3);
}
}
