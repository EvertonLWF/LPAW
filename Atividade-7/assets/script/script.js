var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 500;
var ret;
var px = 0;
var py = 0;
var mover = 0;
function animate(){
	/**ctx.clearRect(0, 0, 700, 500);**/
	
	ret = requestAnimationFrame(animate);
	ctx.fillRect(px, py, 50, 50);
	if(mover > 150){
		ctx.clearRect(0, 0, 700, 500);
		mover = 0;
	}

}
canvas.addEventListener('mousemove', function(e){
	ctx.fillStyle = "#"+String(Math.floor(Math.random()*1000000));
	px = e.clientX - 50;
	py = e.clientY - 50;
	animate();
	mover++;
});