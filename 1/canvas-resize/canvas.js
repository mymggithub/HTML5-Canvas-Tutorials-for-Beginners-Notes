var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); //context

c.fillRect(100, 100, 100, 100); //x, y, wisth, heigth
c.fillRect(400, 100, 100, 100); 
c.fillRect(300, 300, 100, 100); 