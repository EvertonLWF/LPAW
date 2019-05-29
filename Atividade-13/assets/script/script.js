var sinal = anime.timeline({
	delay:anime.stagger(1000),
	easing: 'easeInOutQuad',
	direction: 'alternate',
	endDelay:200

})
.add({ targets: '.sinal', rotateZ: -15, translateX:50,delay:1000 }, )
.add({ targets: '#div3', keyframes:[{background: '#807955'},{background: '#807955'},{background: '#00FF1A'},],duration:1000 }, 0)
.add({ targets: '#div2', keyframes:[{background: '#807955'},{background: '#FFFD1B'},{background: '#807955'},],duration:1000 }, 0)
.add({ targets: '#div1', keyframes:[{background: '#CC0205'},{background: '#807955'},{background: '#807955'},],duration:1000 }, 0);

var bola = anime({
	targets: '#roda',
	translateX: [
		{ value: 400, duration: 1000},
		{ value: 2000, duration: 2000}
	],
  	rotate: [
	    {value: 360, duration: 1000},
	    {value: 360, duration: 2000}

 	],
 	scaleX:[
 		{value: 1 ,duration: 1000},
 		{value: 3,duration: 2000}
 	],

 	endDelay:1300
 	

});

