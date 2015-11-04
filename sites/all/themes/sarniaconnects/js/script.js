(function($){

	$(function(){

		$('.view-banner .view-content').slick(); 
		var headerHeight = $("#header > div").outerHeight();


		
		$('input#edit-submitted-email-newsletter-selection-1').attr('checked', true);
	/* Thank you box popup */
		if (document.location.href.indexOf('submitted') > -1  )
		{
			$('#block-block-4').fadeIn();
			$('#block-block-4').addClass('overlay');	
		}


		$(document).mouseup(function (e)
		{	
			var container =$('#block-block-4');
			if (!container.is(e.target)
			        && container.has(e.target).length === 0) 
				    {
				        container.fadeOut();
				    }
					 	
	 	});

	/* Scroll page */
		$('a[href^="/#"]').on('click',function (e) 
		{
			e.preventDefault();
			var target = this.hash;
			var $target = $(target);

			$('html, body').stop().animate(
				{'scrollTop': $target.offset().top - headerHeight},
				400,
				'swing',
				function () {
					window.location.hash = target;
				}
			);
		});


	/* Email validation */

		$("#block-webform-client-block-4 .form-submit").click(function(event) {

			var email = $("#block-webform-client-block-4 .form-item-submitted-email-newsletter-email-address input").val();

			var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			var valid = emailReg.test(email);



			if ( !valid) 
			{	
			 event.preventDefault();
			 var div="<div id=\"error\"><p>Please fill all required email field</p></div>"
			 $('#error').remove();
			 $("#block-webform-client-block-4").append(div);
			 return false;
			}
			else
			{
				return true;
			} 
		});





	/* Mobile menu*/

		$('#block-block-5 .content a').click(function(e){

			e.preventDefault();
			$('#block-system-main-menu').slideToggle();

		});

		if($(window).width()<560)
		{
			$('#block-system-main-menu a').click(function(){

				$('#block-system-main-menu').slideToggle();

			});
		}


		/*Temporary fix logo links*/

		$('.views-field-field-hosted-by .field-content img:first-child').wrap('<a href="http://www.ccistudios.com" target="_blank"></a>');
		$('.views-field-field-hosted-by .field-content img:last-child').wrap('<a href="http://www.stokesbaysarnia.com/" target="_blank"></a>');

	});

})(jQuery);
