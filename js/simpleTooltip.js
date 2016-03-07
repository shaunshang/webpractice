+function($) {
	'use strict';

	var Simpletooltip = function(element, options) {
		this.init(element, options);
	}

	Simpletooltip.DEFAULTS = {
		template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		viewport: '.container',
		theme: {
			background: '#000000', 
			color: '#FFFFFF'
		}
	}

	Simpletooltip.prototype.init = function(element, options) {
		this.$element = $(element);
		this.options = options;

		this.$element.on('mouseenter', $.proxy(this.enter, this));
		this.$element.on('mouseout', $.proxy(this.leave, this));
	}

	Simpletooltip.prototype.enter = function(obj) {
		var $tip = this.tip();
		var el = this.$element;
		var viewport = this.options.viewport;

		this.setContent($tip);

		$tip.detach();
		$(viewport).css("position", "relative");
		$tip.appendTo(viewport);

		var placement = el.data("placement");
		var pos = this.getPosition(el);
    var calculatedOffset = this.getCalculatedOffset(placement, pos);
    this.placeArrow(placement);

		this.setCalculatedOffset(calculatedOffset);
	}

	Simpletooltip.prototype.leave = function(obj) {
		var $tip = this.tip();
		$tip.detach();
	}

	Simpletooltip.prototype.tip = function() {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip;
  }

  Simpletooltip.prototype.setContent = function(tip) {
  	var $tip = this.tip();
  	var $background = this.options.theme.background;
  	var $color = this.options.theme.color;
  	var $title = this.getTitle();

  	$tip.css({
  		'background': $background,
  		'color': $color
  	});
  	$tip.find('.tooltip-inner').empty().append($title);
  }

  Simpletooltip.prototype.getTitle = function() {
    var $e = this.$element;

    return $e.attr('title');
  }

  Simpletooltip.prototype.getPosition = function(element) {
  	var pos = element.offset();
		
  	return pos;
  }

  Simpletooltip.prototype.getCalculatedOffset = function(placement, pos) {
  	var $tip = this.tip();
  	var el = this.$element;
  	var tipWidth  = $tip[0].offsetWidth;
    var tipHeight = $tip[0].offsetHeight;
    var elWidth = el[0].offsetWidth;
    var elHeight = el[0].offsetHeight;
    var top, left, calculatedOffset;
    
  	if(placement == 'top') {
  		top = pos.top - tipHeight - 5;
  		left = pos.left - (tipWidth - elWidth) / 2;
  	} else if(placement == 'bottom') {
  		top = pos.top + elHeight + 5;
  		left = pos.left - (tipWidth - elWidth) / 2;
  	} else if(placement == 'left') {
  		top = pos.top + (elHeight - tipHeight) / 2;
  		left = pos.left - tipWidth - 5;
  	} else {
  		top = pos.top + (elHeight - tipHeight) / 2;
  		left = pos.left + elWidth + 5;
  	}

  	calculatedOffset = {'top': top, 'left': left};
  	
  	return calculatedOffset;
  }

  Simpletooltip.prototype.placeArrow = function(placement) {
  	var $tip = this.tip();
  	var $arrow = $tip.find(".tooltip-arrow");
  	var $background = this.options.theme.background;

  	if(placement == 'top') {
  		$arrow.addClass('to_top');
  		$arrow.css("border-top-color", $background);
  	} else if(placement == 'bottom') {
  		$arrow.addClass('to_bottom');
  		$arrow.css("border-bottom-color", $background);
  	} else if(placement == 'left') {
  		$arrow.addClass('to_left');
  		$arrow.css("border-left-color", $background);
  	} else {
  		$arrow.addClass('to_right');
  		$arrow.css("border-right-color", $background);
  	}
  }

  Simpletooltip.prototype.setCalculatedOffset = function(calculatedOffset) {
  	var $tip = this.tip();
  	$($tip[0]).css({
  		'top': calculatedOffset.top,
  		'left': calculatedOffset.left
  	});
  }

	function Plugin(option) {
    return this.each(function() {
    	var $this   = $(this);
      var options = $.extend({}, Simpletooltip.DEFAULTS, option);
      new Simpletooltip(this, options);
    });
  }

  var old = $.fn.simpletooltip;

	$.fn.simpletooltip = Plugin;
	$.fn.simpletooltip.Constructor = Simpletooltip;

	$.fn.simpletooltip.noConflict = function() {
    $.fn.simpletooltip = old;
    return this;
  }
}(jQuery);