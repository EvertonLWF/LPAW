document.querySelector('body').addEventListener('keydown', function(event) {

	var seta = ( event.keyCode );

});

var canvas = document.getElementById("gt-canvas");
var ctx = canvas.getContext("2d");

canvas.width = 1350;
canvas.height = 620;
var y = 310;
var x = 630;
var z = 0;
var z1 = 0;

//Desenhar();
Animation();


function Animation(){
	ctx.clearRect(0,0,1350,620);
	Desenhar();
	Clear(y,z);
	y++;
	z++;
	z1--;
	x--;
	
	 t = setTimeout(Animation, 2);
	if (y==600) {
		y=310;
		z=0;
		z1=0;
		x=630;
	}

}

function Clear(y,z){
	var height = 10;
	var width = 25;
	ctx.clearRect(630,y,width+50,z);
	ctx.clearRect(x,310,width,z+20);
	ctx.fillRect(x,310,width,z+20);
	ctx.fillRect(x-z1/2,310,width,z+20);
	

	
}

function Desenhar(){
	ctx.fillStyle = 'orange'; //cor do preenchimento
	ctx.fillRect(630, 300, 50, 10);

	ctx.beginPath(); 
	ctx.moveTo(630, 310); 
	ctx.lineTo(145, 390); 
	ctx.lineTo(145, 430); 
	ctx.fill();

	ctx.beginPath(); 
	ctx.moveTo(680, 310); 
	ctx.lineTo(1170, 390); 
	ctx.lineTo(1170, 430); 
	ctx.fill();

	ctx.beginPath(); 
	ctx.moveTo(655, 310); 
	ctx.lineTo(630, 620); 
	ctx.lineTo(680, 620); 
	ctx.fill();

	ctx.fillStyle = 'green';

	ctx.beginPath(); 
	ctx.moveTo(655, 310); 
	ctx.lineTo(630, 620); 
	ctx.lineTo(680, 620); 
	ctx.fill();

}

