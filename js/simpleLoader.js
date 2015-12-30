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
		this.init(element, options);
	}

	Simpleloader.DEFAULTS = {
		type: 1,
		background: "#FFFFFF",
		thrink: 1,
		template: ""
	}

	var divs = [
		{type: 1, css_class: "horizon-ball ball", num: 3},
		{type: 2, css_class: "grid-ball ball", num: 9},
		{type: 3, css_class: "rotate-circle circle", num: 1},
		{type: 4, css_class: "rotate-clip-ball circle", num: 2},
		{type: 5, css_class: "square-spin cube", num: 1},
		{type: 6, css_class: "rotate-clip-circle circle", num: 2},
		{type: 7, css_class: "rise-ball ball", num: 5},
		{type: 8, css_class: "rotate-ball ball", num: 3},
		{type: 9, css_class: "transition-cube cube", num: 2},
		{type: 10, css_class: "transition-ball ball", num: 2},
		{type: 11, css_class: "transition-ball-reflect ball", num: 2},
		{type: 12, css_class: "transition-ball-triangle ball", num: 3},
		{type: 13, css_class: "scale-ball ball", num: 1},
		{type: 14, css_class: "scale-ball-multiple ball", num: 3},
		{type: 15, css_class: "spin-ball ball", num: 8},
		{type: 16, css_class: "spin-line line", num: 8},
	]

	Simpleloader.prototype.init = function(element, options) {
		var $element = $(element);
		var that = this;

		$.each(divs, function(key, value) {
			if(options.type == this.type) {
				options.template = '<div class="'+this.css_class+'">';
				options.template += that.buildStructure(this, options) + '</div>';
				$element.append(options.template);
			}
		});
		that.addEffect(element, options);
	}

	Simpleloader.prototype.buildStructure = function(obj, options) {
		var template = "";
		for(var i=0; i<obj.num; i++) {
			template += '<div></div>';
		}
		return template;
	}

	Simpleloader.prototype.addEffect = function(element, options) {
		var $element = $(element);
		var targets = $element.find("div:not([class])");

		$element.css({
			"-webkit-transform": "scale("+options.thrink+")",
			"transform": "scale("+options.thrink+")",
		});

		if(options.type == 3) {
			targets.css({
				"border-color": options.background
			});
		} else if(options.type == 4) {
			$element.find("div:not([class]):nth-child(1)").css({
				"border-color": options.background
			});
			$element.find("div:not([class]):nth-child(2)").css({
				"background": options.background
			})
		} else if(options.type == 6) {
			targets.css({
				"border-color": options.background
			});
		} else {
			targets.css({
				"background": options.background
			});
		}
	}

	function Plugin(option) {
    return this.each(function () {
      var options = $.extend({}, Simpleloader.DEFAULTS, option);
      new Simpleloader(this, options);
    });
  }

	$.fn.simpleloader = Plugin;
	$.fn.simpleloader.Constructor = Simpleloader;
}(jQuery);