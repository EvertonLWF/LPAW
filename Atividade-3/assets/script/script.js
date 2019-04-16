var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 1400;
canvas.height = 700;
var time = 100;
var x = 0;

var img = new Image();
var gun = new Image();
var sx = [13,86,159,221,291,13,86,159,232,304,13,86,150,293];
var sy = [0,1,4,6,19,86,86,86,86,87,156,157,158,138];
var sWidth = [59,59,59,69,73,59,59,59,58,59,59,59,65,72];
var sHeight = [58,57,53,50,36,48,50,49,44,44,44,43,35,46];
var dx = 0;
var dy = 0;
var dWidth = 50;
var dHeight = 50;
var vetor = [img ,sx ,sy ,sWidth ,sHeight ,dx ,dy ,dWidth , dHeight];
var vetor_reticulo = [gun ,0 ,0 ,225 ,225 ,dx ,dy ,100 , 100];
var index = 0;
var randonX = Math.floor(Math.random()*1000);
var randonY = Math.floor(Math.random()*500);
var px = 0;
var py = 0;

img.onload = desenha;
img.src = "assets/img/sprite.png";


function desenha(){

	z = 200;
	ctx.clearRect(0, 0, 1500, 800);

	ctx.drawImage(vetor[0] ,221 ,4 ,69 ,50 ,vetor[5]-(200-vetor[5]) ,vetor[6]+randonY ,vetor[7] ,vetor[8] );

	for (var i = 0; i < 150; i+=50) {
		ctx.drawImage(vetor[0] ,vetor[1][index] ,vetor[2][index] ,vetor[3][index] ,vetor[4][index] ,vetor[5]+i ,vetor[6]+i  ,vetor[7] ,vetor[8] );
	}
	
	for (var i = 0; i < 150; i+=50) {
		ctx.drawImage(vetor[0] ,vetor[1][index] ,vetor[2][index] ,vetor[3][index] ,vetor[4][index] ,vetor[5]+i ,vetor[6]+z  ,vetor[7] ,vetor[8] );
		z-=50
	}
	if(index == 13){
		index = 0;
		vetor[5]-=15;
	}else{
		index++;
	}
	vetor[5]+=15;

	if(vetor[5]<1600){
		if(index == 0){
			setTimeout(desenha,0);
		}else{
			setTimeout(desenha,40);
		}			
	}
}