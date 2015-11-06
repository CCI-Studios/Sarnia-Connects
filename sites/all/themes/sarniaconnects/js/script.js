(function($){

	$(function(){

		$('.view-banner.view - content ').slick(); 
		var headerHeight = $("#header > div").outerHeight();

		/* Thank you box popup */
		$(".mailchimp-form").on("submit", function(){
			$('#block-block-4').addClass('overlay').fadeIn();
		});

		$(document).mouseup(function(e) {
			var container = $('#block-block-4');
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				container.fadeOut();
			}
		});

		/* Scroll page */
		$('a[href^="/#"]').on('click', function(e) {
			e.preventDefault();
			var target = this.hash;
			var $target = $(target);

			$('html, body').stop().animate({
					'scrollTop': $target.offset().top - headerHeight
				},
				400,
				'swing',
				function() {
					window.location.hash = target;
				}
			);
		});

		/* Mobile menu*/

		$('#block-block-5 .content a').click(function(e) {
			e.preventDefault();
			$('#block-system-main-menu').slideToggle();
		});

		if ($(window).width() < 560) {
			$('#block-system-main-menu a').click(function() {

				$('#block-system-main-menu').slideToggle();

			});
		}

	});

})(jQuery);
