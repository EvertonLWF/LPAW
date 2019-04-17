var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 500;
ctx.font = "40px Comic Sans MS";
var x = 340;
var y = 240;
var tam = 5;
var edge = 0;
var comp = [];
var end;
var time = 50;
var RandX = Math.floor(Math.random()*70)*10;
var RandY = Math.floor(Math.random()*50)*10;

setFocus();
function setFocus() {
	animate(RandX,RandY);
	document.getElementById("canvas").focus();
}

canvas.addEventListener('keydown',function(e){
	
	if(time > 0){
		time--;
	}
	ctx.clearRect(50,20,60,30);
	ctx.fillText(time,50,50);
	ctx.fillRect(x,y,10,10);
	if(x===RandX && y===RandY  && time > 0){
		RandX = Math.floor(Math.random()*70)*10;
		RandY = Math.floor(Math.random()*50)*10;
		animate(RandX,RandY);
		time = 50;
		edge=tam;
		tam++;
		comp.push(end);
	}
	if(x>-10 && x< 710 && y>-10 && y<510 && time > 0){
		end = [x, y];
		if (e.keyCode == 40) {
			edge++;
			comp.push(end);
			ctx.fillRect(x,y,10,10);
			y += 10;
			//console.log(comp);
			if(edge>=tam){
				ctx.clearRect(comp[0][0],comp[0][1],10,10);
				comp.shift();
			}
		}
		if (e.keyCode == 38) {
			
			edge++;
			comp.push(end);
			ctx.fillRect(x,y,10,10);
			y -= 10;
			//console.log(comp);
			if(edge>=tam){
				ctx.clearRect(comp[0][0],comp[0][1],10,10);
				comp.shift();
			}
		}
		if (e.keyCode == 39) {
			
			edge++;
			comp.push(end);
			ctx.fillRect(x,y,10,10);
			x += 10;
			//console.log(comp);
			if(edge>=tam){
				ctx.clearRect(comp[0][0],comp[0][1],10,10);
				comp.shift();
			}
		}
		if (e.keyCode == 37) {
			
			edge++;
			comp.push(end);
			ctx.fillRect(x,y,10,10);
			x -= 10;
			//console.log(comp);
			if(edge>=tam){
				ctx.clearRect(comp[0][0],comp[0][1],10,10);
				comp.shift();
			}
		}
	}else{
		ctx.clearRect(50,20,60,30);
		ctx.fillText("Game Over",50,50);
	}
});
function animate(RandX,RandY){
	
	ctx.fillRect(RandX,RandY,10,10);
		
}