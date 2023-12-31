var canvas = new fabric.Canvas("canva");
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;
block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
		hole_object=Img;
		hole_object.scaleToWidth(50);
		hole_object.scaleToHeight(50);
		hole_object.set({
			top:hole_y,
			left:hole_x
		})
		canvas.add(hole_object);
	})
	new_image();
}
function new_image(){
	fabric.Image.fromURL("ball.png",function(Img){
		ball_object=Img;
		ball_object.scaleToWidth(50);
		ball_object.scaleToHeight(50);
		ball_object.set({
			top:hole_y,
			left:hole_x
		})
		canvas.add(ball_object);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_object);
		document.getElementById("hd3").innerHTML="you have hit the Goal!!!";
		document.getElementById("canva").style.bordercolor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
			ball_y+1;
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=0){
			ball_y=ball_y-block_image_height;
			console.log("block image height = "+block_image_height);
			console.log("when up arrow key is pressed, x = "+ball_x+" , y = "+ball_y);
			canvas.remove(ball_object);
			new_image();
			}
	}

	function down()
	{
		if(ball_y<=450){
		ball_y=ball_y+block_image_height;
		console.log("block image height = "+block_image_height);
		console.log("when down arrow key is pressed, x = "+ball_x+" , y = "+ball_y);
		canvas.remove(ball_object);
		new_image();
		}
	}

	function left()
	{
		if(ball_x >5){

			ball_y=ball_y-block_image_width;
			console.log("block image width = "+block_image_width);
			console.log("when left arrow key is pressed, x = "+ball_x+" , y = "+ball_y);
			canvas.remove(ball_object);
			new_image();
		}

	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_y=ball_y+block_image_width;
			console.log("block image width = "+block_image_widtht);
			console.log("when right arrow key is pressed, x = "+ball_x+" , y = "+ball_y);
			canvas.remove(ball_object);
			new_image();
		}
	}
	
}

