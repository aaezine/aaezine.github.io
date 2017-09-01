head.js("//code.jquery.com/jquery-1.12.4.min.js'", function() {
    $.get('myfile.php');
    var CANVAS_WIDTH = 480;
    var CANVAS_HEIGHT = 320;

    var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
			  "' height='" + CANVAS_HEIGHT + "'></canvas>");
    var canvas = canvasElement.get(0).getContext("2d");
    canvasElement.appendTo('#middle');

    var FPS = 30;
    setInterval(function() {
	update();
	draw();
    }, 1000/FPS);
    function draw() {
	canvas.fillStyle = "#000"; // Set color to black
	canvas.fillText("Sup Bro!", 50, 50);
    }
    var textX = 50;
    var textY = 50;

    function update() {
	textX += 1;
	textY += 1;
    }

    function draw() {
	canvas.fillStyle = "#000";
	canvas.fillText("Sup Bro!", textX, textY);
    }
});
