var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 500;
addEventListener("keydown", function(e) {
	
	if(e.keyCode == 38){
		console.log(e);
	}
});
