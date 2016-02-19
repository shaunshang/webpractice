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

	var Simpletooltip = function(element, options) {
		this.buildStructure(element, options);
	}

	Simpletooltip.DEFAULTS = {}

	Simpletooltip.prototype.buildStructure = function(element, options) {
		var $element = $(element);
	}


	function Plugin(option) {
    return this.each(function () {
      var options = $.extend({}, Simpletooltip.DEFAULTS, option);
      new Simpletooltip(this, options);
    });
  }

	$.fn.simpletooltip = Plugin;
	$.fn.simpletooltip.Constructor = Simpletooltip;
}(jQuery);