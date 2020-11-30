var socket;
var mySketches = [];
var socket = io();
var el;

socket = io.connect('http://192.168.2.224:3000'); 

var myDrawingSketch = function(p) {

	p.setup = function() {
		p.createCanvas(755, 200);
		p.background(255);

		socket.on('mouse', p.newDrawing);
	}

	p.newDrawing = function(data){
		if(data.index === p.index) {
			p.noStroke();
			p.fill(255,0,1);
			p.rect(data.x, data.y, 5, 5);
		}
	}

	p.mouseDragged = function() {

		console.log(p.mouseX + ',' + p.mouseY);
		
		p.data = {
			index: p.index,
			x: p.mouseX,
			y: p.mouseY
		}

		socket.emit('mouse', p.data); 

		p.noStroke();
		p.fill(0);
		p.rect(p.mouseX, p.mouseY, 5, 5);
	}

	p.draw = function(){
		// p.background(255);
	}
}

for(var i = 0; i < 1; i++) {
	mySketches[i] = new p5(myDrawingSketch);
	mySketches[i].index = i;
}


socket.on('time', function(timeString) {
  el = document.getElementById('server-time')
  el.innerHTML = 'Server time: ' + timeString;
});