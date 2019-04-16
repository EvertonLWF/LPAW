var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 500;
var x = 340;
var y = 240;
var tam = 5;
var edge = 0;
var comp = [];
var end;
var time = 1000;
var RandX = Math.floor(Math.random()*700);
var RandY = Math.floor(Math.random()*500);

setFocus();
function setFocus() {
	animate(RandX,RandY);
	document.getElementById("canvas").focus();
}


canvas.addEventListener('keydown',function(e){
	//console.log(e.keyCode);
	ctx.fillRect(x,y,10,10);
	
	if(x>0 || x< 700|| y>0 ||y<500 ){
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
		if(x==RandX && y==RandY){
			tam ++;
			edge = tam-1;
		}
		console.log(x+"->"+RandX);
	}
});
function animate(RandX,RandY){
	
	ctx.fillRect(RandX,RandY,10,10);
	
	
}