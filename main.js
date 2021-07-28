var canvas = new fabric.Canvas("ranger");
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 250;
block_image_height = 330;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_y
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == "82") // add appropriate keycode
	{
		// upload red ranger
		new_image("https://img4.looper.com/img/gallery/whatever-happened-to-the-original-red-power-ranger/l-intro-1603292736.jpg")
		console.log("Red Ranger In Contact!");
	}
	if(keyPressed == "71")
	{
		new_image("https://static2.srcdn.com/wordpress/wp-content/uploads/2017/03/Green-Ranger-Dragonzord.jpg")
		console.log("Green Ranger In Contact!");
		block_x = 200;
		// upload green ranger
	}
	
	if(keyPressed == "89")
	{
		new_image("https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/5/58/Yellow_Megaforce_Ranger.jpg/revision/latest?cb=20160109235727")
		console.log("Yellow Ranger In Contact!");
		block_x =350;
		// upload yellow ranger
	}
	if(keyPressed == "80")
	{
		new_image("https://www.morphinlegacy.com/wp-content/uploads/2014/08/Pink-Ranger-MMPR-Movie.jpg")
		console.log("Pink Ranger In Contact!");
		block_x = 600;
		// upload pink ranger
	}
	if(keyPressed == "66")
	{
		new_image("https://www.morphinlegacy.com/wp-content/uploads/2014/08/Blue-Ranger-MMPR-Movie.jpg")
		console.log("Blue Ranger In Contact!");
		block_x = 700;
	// upload blue ranger
	}
	
}

