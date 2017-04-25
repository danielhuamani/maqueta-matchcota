

			$(window).scroll(function(){
                var window_top = $(window).scrollTop();
                if (window_top >= 220) {
	            	$(".logo_celeste").removeClass('logo_none')
	            	$(".logo_blanco").addClass('logo_none')
	        	}else{

                	$(".logo_celeste").addClass('logo_none')
	            	$(".logo_blanco").removeClass('logo_none')
	        	}
            });



