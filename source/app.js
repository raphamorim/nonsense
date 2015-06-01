// Original Code using Pure Canvas (http://cssdeck.com/labs/gzvniepw)
// Now using Sketch.js:

(function() {
	'use strict';
	document.querySelector('body').style.backgroundColor = '#222';

	var ctx = Sketch.create({
		container: document.getElementById('rain-sketch')
	});

	var drops = [],
		COLORS = ['#2F4F4F', '#5F9F9F', '#96CDCD', '#66CCCC', '#E0FFFF'],
		spacing = 5,
		xSpacing = 0,
		n = innerWidth / spacing;

	for (var i = 0; i < n; i++){
		xSpacing += spacing;
		drops.push({
			x: xSpacing,
			y: (Math.round(Math.random()* ctx.height)),
			width: 2,
			height: (Math.round(Math.random()*(innerHeight/10))),
			speed: ((Math.random() * 10) + 1),
			color: COLORS[(Math.floor(Math.random() * COLORS.length) + 1)]
		});
	}

	ctx.draw = function() {
		ctx.clearRect(0,0,ctx.width,ctx.height);
		for (var i = 0; i < n; i++){
			ctx.fillStyle = drops[i].color;
			ctx.fillRect(drops[i].x, drops[i].y, drops[i].width, drops[i].height);
			drops[i].y += drops[i].speed;
			
			if (drops[i].y > ctx.height)
				drops[i].y = 0 - drops[i].height;
		}
	}
}());