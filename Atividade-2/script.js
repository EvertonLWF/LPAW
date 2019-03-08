var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 500;
ctx.fillStyle = "#006400";
ctx.font = "40px Comic Sans MS";
time = 250;
var x = 0;
var y = 0;
var activity = 0;

proposta_1();


function proposta_1(){
	var proposta = 1;
	setInterval(function(){

		
		
		if (x==300 && proposta == 1) {
			proposta++;
			ctx.clearRect(0,0,500,500);
			ctx.fillText('Proposta 2',250,50);
			proposta_2();
		}
		if (x<300 && proposta == 1) {
			rect(x,y);
			ctx.fillText('Proposta 1',250,50);
			ctx.fillStyle = "#"+String(Math.floor(Math.random()*1000000));
			x+=20;
			y+=20;
		}
	}, time);
}
function proposta_2(){
	time/=10;
	setInterval(function(){

		rect(x,y);
		if (x==0) {
			clear(y,x+100);
			ctx.clearRect(y+150,x,1,101);
		}else{
			ctx.fillText('Proposta 2',250,50);
			clear(y,x+100);
			ctx.clearRect(y+150,x,1,101);
			x-=1;
			y-=1;
		}
	}, time);
}

function rect(x,y) {
	ctx.fillRect(x,y,150,100);
}
function clear(x,y){
	ctx.clearRect(x,y,150,1);
	ctx.clearRect(x,y,1,100);
}



