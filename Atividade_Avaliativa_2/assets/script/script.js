var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var but = new Image();
var bird = new Image();
var explode  = new Image();

canvas.width = 1400;
canvas.height = 700;
ctx.fillStyle = "#0505E8";
ctx.font = "40px Comic Sans MS";
var x = 769;
var y = 580;
var size = 45;
var index = 0;
var indexBird = 0;
var indexExplode = 0;
var tnt = false;
var start = index;
var objetos = [100];
var objeto = [];
var objetoBird = [];
var sx_or = [1,99,195,292,391,491,591,692,795,899];
var sy_or = [101,101,103,106,110,112,110,106,103,101];
var sW_or = [41,43,47,57,66,69,66,57,47,43];
var sH_or = [68,68,65,62,57,55,57,62,65,68];
//var right = [sx_or,sy_or,sW_or,sH_or];

var sx_Xor = [17,117,217,313,406,502,606,713,817,917];
var sy_Xor = [1,1,2,6,10,12,10,6,2,1];
var sW_Xor = [44,46,49,55,62,65,62,55,49,46];
var sH_Xor = [68,67,66,61,57,55,57,61,66,67];
//var left = [sx_Xor,sy_Xor,sW_Xor,sH_Xor];

var sx_return = [1,100,198,297,397,495,597,707,817,917];
var sy_return = [210,201,203,206,210,212,210,206,203,201];
var sW_return = [41,42,44,56,65,68,67,58,47,45];
var sH_return = [68,68,65,62,67,55,57,62,65,68];
//var Return = [sx_return,sy_return,sW_return,sH_return];

var sx_Bird = [13,86,159,221,291,13,86,159,232,304,13,86,150,293];
var sy_Bird = [0,1,4,6,19,86,86,86,86,87,156,157,158,138];
var sWidth_Bird = [59,59,59,69,70,59,59,59,58,59,59,59,65,72];
var sHeight_Bird = [58,57,53,50,36,48,50,49,44,44,44,43,35,46];
//var Bird = [sx_Bird,sy_Bird,sWidth_Bird,sHeight_Bird];

var sx_explode = [40,129,232,322,419,501,613,707,804,984,5,101,202,303,401,501,594,708,809,910,11,111,217,317,414,511];
var sy_explode = [45,39,33,28,23,18,12,7,1,6,201,201,201,201,201,201,202,201,201,201,388,391,391,391,391,391];
var sW_explode = [27,42,43,59,67,89,81,91,96,92,95,100,100,97,99,89,98,87,87,77,77,77,69,72,76,73];
var sH_explode = [30,39,50,59,72,89,89,93,99,101,94,100,100,86,88,89,99,89,82,81,83,73,72,71,74,68];
var level = 1;
var state = true;
var getDir = 0;
var back = false;
var backIndex = 0;
var randonY = [];
var birdX = 0;
var batida = 0;
var gameOver = false;
but.src = "assets/img/but.png";
bird.src = "assets/img/bird.png";
explode.src = "assets/img/explode.png";


setFocus();
function setFocus() {
	document.getElementById("canvas").focus();
}
canvas.addEventListener('keydown',function(e){
	
	//console.log(e.keyCode);
	if(e.keyCode){
		state = false;
		switch(e.keyCode){
			case 38:
			if(getDir != 1){
				getDir = 1;
			}
			break;
			case 39:
			if(getDir != 2){
				if(getDir==4){
					back = true;
					backIndex = 9;
				}
				getDir = 2;
			}
			break;
			case 40:
			if(getDir != 3){
				getDir = 3;
			}
			break;
			case 37:
			if(getDir != 4){
				if(getDir==2){
					back = true;
					backIndex = 0;
				}
				getDir = 4;
			}
			break;

		}
	}
});

var game = setInterval(function(){
	if(indexExplode > 25 && birdX == 0){
		level--;
		clearInterval(game);
		
	}
	ctx.clearRect(0,0,1500,800);
	if (state == true){
		ctx.drawImage(but,sx_or[start],sy_or[start],sW_or[start],sH_or[start],x,y,size,size);
		objeto[0] = Math.trunc(x/10);
		objeto[1] = Math.trunc(y/10);
		objetos[0] = objeto;
		if(start > 0){
			start--;
		}else{
			start++;
		}
		ctx.fillText('Pressione as setas para começar !!!',380,50);
	}else{
		switch(getDir){
			case 0:
			state = true;
			break;

			case 1:
			state = false;
			if(tnt == false){
				ctx.drawImage(but,sx_or[index],sy_or[index],sW_or[index],sH_or[index],x,y,size,size);
				if(y > 0){
					y -= 5;
				}
				objeto[0] = Math.trunc(x/10);
				objeto[1] = Math.trunc(y/10);
				objetos[0] = objeto;

			}else{
				ctx.drawImage(explode,sx_explode[indexExplode],sy_explode[indexExplode],sW_explode[indexExplode],sH_explode[indexExplode],x,y,size*2.4,size*2.4);
				y += 5;
				x += 5;
			}
			break;

			case 2:
			state = false;


			if(tnt == false){
				if(back==true){
					ctx.drawImage(but,sx_return[backIndex],sy_return[backIndex],sW_return[backIndex],sH_return[backIndex],x,y,size,size);
					objeto[0] = Math.trunc(x/10);
					objeto[1] = Math.trunc(y/10);
					objetos[0] = objeto;
					backIndex--;
					if(backIndex > 5){
						x+=5;
					}else{
						x-=5;
					}
					if (backIndex == 0) {
						back = false;
					}
				}else{
					ctx.drawImage(but,sx_or[index],sy_or[index],sW_or[index],sH_or[index],x,y,size,size);
					if(x< 1350){
						x += 5;

					}
				}
				objeto[0] = Math.trunc(x/10);
				objeto[1] = Math.trunc(y/10);
				objetos[0] = objeto;
			}else{
				ctx.drawImage(explode,sx_explode[indexExplode],sy_explode[indexExplode],sW_explode[indexExplode],sH_explode[indexExplode],x,y,size*2.4,size*2.4);
				y += 5;
				x += 5;
			}
			break;

			case 3:
			state = false;
			if(tnt == false){


				ctx.drawImage(but,sx_or[index],sy_or[index],sW_or[index],sH_or[index],x,y,size,size);
				if(y < 660){
					y += 5;
				}
				objeto[0] = Math.trunc(x/10);
				objeto[1] = Math.trunc(y/10);
				objetos[0] = objeto;
			}else{
				ctx.drawImage(explode,sx_explode[indexExplode],sy_explode[indexExplode],sW_explode[indexExplode],sH_explode[indexExplode],x,y,size*2.4,size*2.4);
				y += 5;
				x += 5;
			}
			break;

			case 4:
			if(tnt == false){
				if(back==true){
					objeto[0] = Math.trunc(x/10);
					objeto[1] = Math.trunc(y/10);
					objetos[0] = objeto;
					ctx.drawImage(but,sx_return[backIndex],sy_return[backIndex],sW_return[backIndex],sH_return[backIndex],x,y,size,size);
					backIndex++;
					if(backIndex > 5){
						x-=5;
					}else{
						x+=5;
					}
					if (backIndex == 9) {
						back = false;
					}
				}else{

					ctx.drawImage(but,sx_Xor[index],sy_Xor[index],sW_Xor[index],sH_Xor[index],x,y,size,size);
					if(x > 0 ){
						x -= 5;

					}
					objeto[0] = Math.trunc(x/10);
					objeto[1] = Math.trunc(y/10);
					objetos[0] = objeto;
				}
				
			}else{
				ctx.drawImage(explode,sx_explode[indexExplode],sy_explode[indexExplode],sW_explode[indexExplode],sH_explode[indexExplode],x,y,size*2.4,size*2.4);
				y += 5;
				x += 5;
			}
			break;
		}

		for (var i = 1; i <= level; i++) {

			randonY.push(Math.floor(Math.random()*650));
			ctx.drawImage(bird,sx_Bird[indexBird],sy_Bird[indexBird],sWidth_Bird[indexBird],sWidth_Bird[indexBird],birdX * i ,randonY[i],70,70);
			objetos[i] = [Math.trunc((parseInt(birdX * i))/10),Math.trunc((parseInt(randonY[i]))/10)];
			

		}
		if(tnt == false){

			crash(objetos);
		}
		if(index == 9){
			index = 0;
		}else{
			index++;
		}

		if(tnt == true){

			if(indexExplode == 26){
				//clearInterval(game);
				//alert("GAME OVER");

			}else{
				indexExplode++;
			}
		}


		if(indexBird >= 12){
			indexBird = 0;
		}else{
			indexBird++;
		}


		birdX+=10;

		if (birdX > 1400) {
			birdX = 0;
			randonY = [];
			level++;
			
		}
		if(tnt == false){
			ctx.fillText('Stage '+level,50,50);
		}else{
			ctx.fillText('GAME OVER ! Atingido level = '+level,400,50);
		}


	}


},50);

function crash(objetos){
	
	var distance_x;
	var distance_y;

	for (var i = 1; i <= level; i++) {
		distance_x = objetos[0][0] - objetos [i][0];
		distance_y = objetos[0][1] - objetos [i][1];
		if(distance_x < 0){
			distance_x *=-1;
		}if(distance_y < 0){
			distance_y *=-1;
		}
		if(distance_x < 4 && distance_y < 3){
			tnt =true;
			

		}
	}
}
