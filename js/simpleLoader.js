/*
	loader types: 
		1. horizon-ball
		2. grid-ball
		3. rotate-circle
		4. rotate-clip-ball
		5. square-spin
		6. rotate-clip-circle
		7. rise-ball
		8. rotate-ball
		9. transition-cube
		10. transition-ball
		11. transition-ball-reflect
		12. transition-ball-triangle
		13. scale-ball
		14. scale-ball-multiple
		15. spin-ball
		16. spin-line
*/
+function($) {
	'use strict';

	var Simpleloader = function(element, options) {
		this.buildStructure(element, options);
	}

	Simpleloader.DEFAULTS = {
		type: 1
	}

	Simpleloader.prototype.buildStructure = function(element, options) {
		var $element = $(element);

		if(options.type == 1) {
			var css_class = "horizon-ball ball";
			$element.append(this.horizonBall(css_class));
		} else if(options.type == 2) {
			var css_class = "grid-ball ball";
			$element.append(this.gridBall(css_class));
		} else if(options.type == 3) {
			var css_class = "rotate-circle circle";
			$element.append(this.rotateCircle(css_class));
		} else if(options.type == 4) {
			var css_class = "rotate-clip-ball circle";
			$element.append(this.rotateClipBall(css_class));
		} else if(options.type == 5) {
			var css_class = "square-spin cube";
			$element.append(this.squareSpin(css_class));
		} else if(options.type == 6) {
			var css_class = "rotate-clip-circle circle";
			$element.append(this.rotateClipCircle(css_class));
		} else if(options.type == 7) {
			var css_class = "rise-ball ball";
			$element.append(this.riseBall(css_class));
		} else if(options.type == 8) {
			var css_class = "rotate-ball ball";
			$element.append(this.rotateBall(css_class));
		} else if(options.type == 9) {
			var css_class = "transition-cube cube";
			$element.append(this.transitionCube(css_class));
		} else if(options.type == 10) {
			var css_class = "transition-ball ball";
			$element.append(this.transitionBall(css_class));
		} else if(options.type == 11) {
			var css_class = "transition-ball-reflect ball";
			$element.append(this.transitionBallReflect(css_class));
		} else if(options.type == 12) {
			var css_class = "transition-ball-triangle ball";
			$element.append(this.transitionBallTriangle(css_class));
		} else if(options.type == 13) {
			var css_class = "scale-ball ball";
			$element.append(this.scaleBall(css_class));
		} else if(options.type == 14) {
			var css_class = "scale-ball-multiple ball";
			$element.append(this.scaleBallMultiple(css_class));
		} else if(options.type == 15) {
			var css_class = "spin-ball ball";
			$element.append(this.spinBall(css_class));
		} else if(options.type == 16) {
			var css_class = "spin-line line";
			$element.append(this.spinLine(css_class));
		}
	}

	Simpleloader.prototype.horizonBall = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div><div></div><div></div>' +
									 '</div>';
		return template;
	}

	Simpleloader.prototype.gridBall = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div><div></div><div></div>' +
									 '<div></div><div></div><div></div>' +
				           '<div></div><div></div><div></div>' +
				           '</div>';
		return template;
	}

	Simpleloader.prototype.rotateCircle = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div>' +
				           '</div>';
		return template;
	}

	Simpleloader.prototype.rotateClipBall = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div><div></div>' +
				           '</div>';
		return template;
	}

	Simpleloader.prototype.squareSpin = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div>' +
				           '</div>';
		return template;
	}

	Simpleloader.prototype.rotateClipCircle = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div><div></div>' +
				           '</div>';
		return template;
	}

	Simpleloader.prototype.riseBall = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div><div></div><div></div><div></div><div></div>' +
				           '</div>';
		return template;
	}

	Simpleloader.prototype.rotateBall = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div>' +
				           '</div>';
		return template;
	}

	Simpleloader.prototype.transitionCube = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div><div></div>' +
				           '</div>';
		return template;
	}

	Simpleloader.prototype.transitionBall = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div><div></div>' +
				           '</div>';
		return template;
	}

	Simpleloader.prototype.transitionBallReflect = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div><div></div>' +
				           '</div>';
		return template;
	}

	Simpleloader.prototype.transitionBallTriangle = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div><div></div><div></div>' +
				           '</div>';
		return template;
	}

	Simpleloader.prototype.scaleBall = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div>' +
				           '</div>';
		return template;
	}

	Simpleloader.prototype.scaleBallMultiple = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div><div></div><div></div>' +
				           '</div>';
		return template;
	}

	Simpleloader.prototype.spinBall = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div><div></div><div></div><div></div>' +
				           '<div></div><div></div><div></div><div></div>' +
				           '</div>';
		return template;
	}

	Simpleloader.prototype.spinLine = function(css_class) {
		var template = '<div class="' + css_class + '">' +
									 '<div></div><div></div><div></div><div></div>' +
				           '<div></div><div></div><div></div><div></div>' +
				           '</div>';
		return template;
	}

	function Plugin(option) {
    return this.each(function () {
      var options = $.extend({}, Simpleloader.DEFAULTS, option);
      console.info(options);
      new Simpleloader(this, options);
    });
  }

	$.fn.simpleloader = Plugin;
	$.fn.simpleloader.Constructor = Simpleloader;
}(jQuery);