(function($) {
	$.fn.bootCarousel = function(options) {
		var bootcar = this;
		var settings = $.extend({
			easeIn: "fadeInUp",
			pause: "hover",
			interval: 4000
		}, options);
		bootcar.carousel({
			pause: settings.pause,
			interval: settings.interval
		});
		var b;
		var d;
		bootcar.find(".carousel-caption").children().each(function(index) {
			$(this).css("opacity", 0);
		});
		$(".carousel-caption", bootcar.find(".active")).children().each(function(index) {
			if ($(this).data("animate")) {
				d = $(this).data("animate");
			} else {
				d = settings.easeIn;
			}
			if ($.browser.msie && $.browser.version <= 9) {
				$(this).css("opacity", 0);
				$(this).show().animate({
					opacity: 1
				}, 200 + 200 * index);
			} else {
				$(this).removeClass(d).addClass("bcaritem" + index + " " + d);
			}
			b = $(this);

		});
		bootcar.on("slid.bs.carousel", function(index) {
			if (b) {
				b.find(".carousel-caption").children().each(function(h) {
					if ($(this).data("animate")) {
						d = $(this).data("animate");
					} else {
						d = settings.easeIn;
					}
					$(this).removeClass(d).css("opacity", 0);
				});
			}
			$(".carousel-caption", bootcar.find(".active")).children().each(function(h) {
				if ($(this).data("animate")) {
					d = $(this).data("animate");
				} else {
					d = settings.easeIn;
				} if ($.browser.msie && $.browser.version <= 9) {
					$(this).css("opacity", 0);
					$(this).show().animate({
						opacity: 1
					}, 200 + 200 * h);
					$(this).removeClass(d).css("opacity", 1);
				} else {
					$(this).css("opacity", 0).removeClass(d).addClass("bcaritem" + h + " " + d);
				}
			});
			b = $(this);
		});
		return this;
	};
})(jQuery);