$(document).ready(function(){
	var banners = ["TopBanner.png","test.jpg"]


	var TIME = 5000;
	var F_TIME = 250;

	var timer = window.setInterval(img_ani, TIME);
	var fader = window.setInterval(fade, TIME-F_TIME);
	var ban_id = 0;
	
	var banner = document.getElementById("banner");

	var fade = function() {
		$("#banner").fadeOut(F_TIME);
		clearInterval(fader);
		fader = window.setInterval(fade, TIME-F_TIME);	
	}

	var img_ani = function() {
		ban_id += 1;
		if (ban_id >= banners.length) {
			ban_id = 0;
		}
		$("#banner").fadeIn(F_TIME);
		$("#banner").css("background", "url(../images/" + banners[ban_id] + ")");
		clearInterval(timer);
		clearInterval(fader);
		timer = window.setInterval(img_ani,TIME);
		fader = window.setInterval(fade, TIME-F_TIME);	
	}

	banner.onclick = img_ani;	
	
	timer = window.setInterval(img_ani, TIME);
	fader = window.setInterval(fade, TIME-F_TIME);
	
});
