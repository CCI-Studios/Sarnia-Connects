(function($){

$(function(){

	$('.view-banner .view-content').slick(); 

	if (document.location.href.indexOf('submitted') > -1  )
	{
		$('#block-block-4').fadeIn();
		$('#block-block-4').addClass('overlay');	
	}


	$('a[href^="/#"]').on('click',function (e) 
	{
		    e.preventDefault();

		    var target = this.hash;
		    var $target = $(target);
		    console.log($target);
		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 400, 'swing', function () {
		        window.location.hash = target;
		    });
	});


	$(document).mouseup(function (e)
	{	
		var container =$('#block-block-4');
		if (!container.is(e.target)
		        && container.has(e.target).length === 0) 
			    {
			        container.fadeOut();
			    }
				 	
 	});

	$("#block-webform-client-block-4 .form-submit").click(function(event) {

		var email = $("#block-webform-client-block-4 .form-item-submitted-email-newsletter-email-address input").val();

		var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		var valid = emailReg.test(email);



		if ( !valid || agree==false || categories==false ) 
		{	
		 event.preventDefault();
		 var div="<div id=\"error\"><p>Please fill all required email field</p></div>"
		 $('#error').remove();
		 $("#block-webform-client-block-4").append(div);
		 return false;
		}
		else
		{	
			 console.log('true');
			return true;
		} 
	});


	$('#block-block-5 .content a').click(function(e){

		e.preventDefault();
		$('#block-system-main-menu').slideToggle('slow');

	});

});

})(jQuery);
