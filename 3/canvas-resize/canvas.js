var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); //context

// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillRect(100, 100, 100, 100); //x, y, wisth, heigth
// c.fillStyle = "rgba(0, 0, 255, 0.5)";
// c.fillRect(400, 100, 100, 100); 
// c.fillStyle = "rgba(0, 255, 0, 0.5)";
// c.fillRect(300, 300, 100, 100); 

// line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// Arc / Cricle
// c.beginPath(); // to not connect lines
// c.arc(300, 300, 30, 0, Math.PI *2, false); // x, y, r, startingAngle, endingAngle
// c.strokeStyle = "blue";
// c.stroke();


// for (var i = 0 ; i <  3; i++) {
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	c.beginPath(); 
// 	c.arc(x, y, 30, 0, Math.PI *2, false);
// 	c.strokeStyle = "blue";
// 	c.stroke();
// }


function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {
		c.beginPath(); 
		c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
		c.strokeStyle = "blue";
		c.stroke();
	}

	this.update = function() {
		if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0){
			this.dx = -this.dx;
		}
		if(this.y + this.radius > window.innerHeight || this.y - this.radius < 0){
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}


// var circle = new Circle(200, 200, 3, 3, 30);

var circleArray = [];
for (var i = 0; i < 100; i++) {
	var radius = 30;
	var x =  Math.random() * (window.innerWidth - radius * 2) + radius;
	var y = Math.random() * (window.innerHeight - radius * 2) + radius;
	var dx = (Math.random() - 0.5)*8;
	var dy = (Math.random() - 0.5)*8;
	circleArray.push(new Circle(x, y, dx, dy, radius));
}

// var x =  Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// var dx = (Math.random() - 0.5)*8;
// var dy = (Math.random() - 0.5)*8;
// var radius = 30;
function animate() {
	requestAnimationFrame(animate); // loops
	c.clearRect(0, 0, window.innerWidth, window.innerHeight); // clears frame

	// circle.update();
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}

	// c.beginPath(); 
	// c.arc(x, y, radius, 0, Math.PI *2, false);
	// c.strokeStyle = "blue";
	// c.stroke();
	// if(x + radius > window.innerWidth || x - radius < 0){
	// 	dx = -dx;
	// }
	// if(y + radius > window.innerHeight || y - radius < 0){
	// 	dy = -dy;
	// }
	// x += dx;
	// y += dy;
}

animate();