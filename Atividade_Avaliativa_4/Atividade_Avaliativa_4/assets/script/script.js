const firebaseConfig = {
	apiKey: "AIzaSyBEodiTjpR3A-UUqqXA-tByPopzwnTOdxQ",
	authDomain: "dht-11-14408.firebaseapp.com",
	databaseURL: "https://dht-11-14408.firebaseio.com",
	projectId: "dht-11-14408",
	storageBucket: "dht-11-14408.appspot.com",
	messagingSenderId: "1052571970839",
	appId: "1:1052571970839:web:662e54a696c97131"
};
swith = 0;
var linha1 = anime.path('.linha1');
var linha = anime.path('.linha');

firebase.initializeApp(firebaseConfig);
var ref = firebase.database().ref('dht11/lamp');
var onValueChange = ref.on('value', function(snapshot) {
	var swith = snapshot.val();
	desenha(swith);
});

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var lamp  = new Image();
var battery  = new Image();

canvas.width = 1350;
canvas.height = 700;
battery.src = "assets/img/battery_set_3.png"
lamp.src = "assets/img/lamp.png";
lamp.onload = desenhaOff;
var gerador = 0;
var bat = 0;
x = 600;
y = 300;

canvas.addEventListener('keydown',function(e){
	if(e.keyCode == 32){
		bat = charger(bat);
		gerador = 1;
	}
	document.getElementById("energy").style.display="unset";
	document.getElementById("gear2").style.display="none";
	document.getElementById("gear1").style.display="unset";

});
canvas.addEventListener('keyup',function(e){
	gerador = 0;
	document.getElementById("energy").style.display="none";
	document.getElementById("gear2").style.display="unset";
	document.getElementById("gear1").style.display="none";
});
var game = setInterval(function(){
	console.log(bat);
	if(bat > 0){
		bat-=10;
	}
	if(bat > 0 && bat <= 50){
		ctx.clearRect(x,y,135,202);
		ctx.drawImage(battery,514,248,135,202,x,y,135,202);
		turnOff();
	}
	if(bat > 50 && bat < 200){
		ctx.clearRect(x,y,135,202);
		ctx.drawImage(battery,280,248,135,202,x,y,135,202);
		turnOn();
	}
	if(bat > 200 && bat < 400){
		ctx.clearRect(x,y,135,202);
		ctx.drawImage(battery,47,248,135,202,x,y,135,202);
	}
	if(bat > 400 && bat < 600){
		ctx.clearRect(x,y,135,202);
		ctx.drawImage(battery,514,14,135,202,x,y,135,202);
	}
	if(bat > 600 && bat < 800){
		ctx.clearRect(x,y,135,202);
		ctx.drawImage(battery,280,14,135,202,x,y,135,202);
	}
	if(bat > 800 && bat < 1000){
		ctx.clearRect(x,y,135,202);
		ctx.drawImage(battery,47,14,135,202,x,y,135,202);
	}


},100);


function turnOn(){
	firebase.database().ref('dht11/').update({
		'lamp': 1
	});
	
	document.getElementById("energy1").style.display="unset";
	
}
function turnOff(){
	firebase.database().ref('dht11/').update({
		'lamp': 0
	});
	
	document.getElementById("energy1").style.display="none";
}
function charger(bat){
	return bat+=10;
}

function desenha(swith) {
	if(swith == 0){
		ctx.clearRect(220, 250, 150, 250);
		ctx.drawImage(lamp,40,25,422,723,220,250,150,250);
	}else{
		ctx.clearRect(220, 250, 150, 250);
		ctx.drawImage(lamp,562,25,422,723,220,250,150,250);
	}
	
}
function desenhaOff(){
	ctx.clearRect(220, 250, 150, 250);
	ctx.drawImage(lamp,40,25,422,723,220,250,150,250);
	ctx.clearRect(x,y,135,202);
	ctx.drawImage(battery,514,248,135,202,x,y,135,202);
}
function energy(){
	anime({
		targets: '.energy',
		translateX: linha('x'),
		translateY: linha('y'),
		rotate: linha('angle'),
		easing: 'linear',
		direction: 'reverse',
		duration: 1000,
		loop: true
	});
}

function energy1(){
	anime({
		targets: '.energy1',
		translateX: linha1('x'),
		translateY: linha1('y'),
		rotate: linha1('angle'),
		easing: 'linear',
		direction: 'reverse',
		duration: 1000,
		loop: true
	});
}
function Engrenagem(){
	anime({
		targets: '.gear1',
		rotate: 360,
		easing: 'linear',
		duration: 1000,
		loop: true
	});
}

energy();
energy1();
Engrenagem();