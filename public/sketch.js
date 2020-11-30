var socket; 
var sketch1 = function(p) {

	p.socket;

p.setup = function() {
	p.createCanvas(755, 200);
	p.background(225,1);
	p.socket =io.connect('http://172.17.26.85:3000'); 
	p.socket.on('mouse', p.newDrawing); 
}


p.newDrawing = function(data){
	p.noStroke();
	p.fill(0);
	p.ellipse(data.x,data.y,3,3);
}

p.mouseDragged = function() {

	console.log(p.mouseX + ',' + p.mouseY);

		p.data = {
		x: p.mouseX,
		y: p.mouseY
	}

	p.socket.emit('mouse', p.data); 


	p.noStroke();
	p.fill(255);
	p.ellipse(p.mouseX,p.mouseY,3,3);
}

p.draw = function(){

}
}


var sketch2 = function(p_2) {

	p_2.socket;

p_2.setup = function() {
	p_2.createCanvas(755, 200);
	p_2.background(225,1);
	p_2.socket =io.connect('http://172.17.26.85:3000'); 
	p_2.socket.on('mouse2', p_2.newDrawing); 
}


p_2.newDrawing = function(data_2){
	p_2.noStroke();
	p_2.fill(0);
	p_2.ellipse(data_2.x,data_2.y,3,3);
}

p_2.mouseDragged = function() {

	console.log(p_2.mouseX + ',' + p_2.mouseY);

		p_2.data_2 = {
		x: p_2.mouseX,
		y: p_2.mouseY
	}

	p_2.socket.emit('mouse2', p_2.data_2); 


	p_2.noStroke();
	p_2.fill(255);
	p_2.ellipse(p_2.mouseX,p_2.mouseY,3,3);
}

p_2.draw = function(){

}
}

var sketch3 = function(p_3) {

	p_3.socket;

p_3.setup = function() {
	p_3.createCanvas(755, 200);
	p_3.background(225,1);
	p_3.socket =io.connect('http://172.17.26.85:3000'); 
	p_3.socket.on('mouse3', p_3.newDrawing); 
}


p_3.newDrawing = function(data_3){
	p_3.noStroke();
	p_3.fill(0);
	p_3.ellipse(data_3.x,data_3.y,3,3);
}

p_3.mouseDragged = function() {

	console.log(p_3.mouseX + ',' + p_3.mouseY);

		p_3.data_3 = {
		x: p_3.mouseX,
		y: p_3.mouseY
	}

	p_3.socket.emit('mouse3', p_3.data_3); 


	p_3.noStroke();
	p_3.fill(255);
	p_3.ellipse(p_3.mouseX,p_3.mouseY,3,3);
}

p_3.draw = function(){

}
}



var myp5_1 = new p5(sketch1);
var myp5_2 = new p5(sketch2);
var myp5_3 = new p5(sketch3);
