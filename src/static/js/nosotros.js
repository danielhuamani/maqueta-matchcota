jQuery(document).ready(function($) {

			$('.listado_aliados_nosotros').bxSlider({


				minSlides: 5,
			    maxSlides: 5,
			    adaptiveHeight: false,
			    slideWidth: 135,
			    slideMargin: 30,
				auto: true,
				moveSlides: 1,
				autoControls: false,
				pause: 1500,
				nextText: "",
				prevText: "",
				pager: false


			});

			$(window).scroll(function(){
                var window_top = $(window).scrollTop();

                if(window_top>200) {
		  			$(".nosotros_matchota_ideal .container figure").addClass('active-img')
		  		}
		  		console.log(window_top)
		  		if (window_top>920) {
		  			$(".bloque_1").addClass('b_1_active')
		  			$(".bloque_2").addClass('b_2_active')
		  			$(".bloque_3").addClass('b_3_active')
		  			$(".bloque_4").addClass('b_4_active')
		  			$(".bloque_5").addClass('b_5_active')
		  			$(".bloque_6").addClass('b_6_active')
		  			$(".bloque_7").addClass('b_7_active')
		  		}else{
					$(".bloque_1").removeClass('b_1_active')
					$(".bloque_2").removeClass('b_2_active')
					$(".bloque_3").removeClass('b_3_active')
					$(".bloque_4").removeClass('b_4_active')
					$(".bloque_5").removeClass('b_5_active')
					$(".bloque_6").removeClass('b_6_active')
					$(".bloque_7").removeClass('b_7_active')
		  		}
		  		if (window_top>2000) {
		  			$(".nosotros_socios_estrategicos .title_colores").addClass('title_colores_animate')
		  		}else{
		  			$(".nosotros_socios_estrategicos .title_colores").removeClass('title_colores_animate')
		  		}
            });
            if ($("body").height()>580) {
				setTimeout(function(){
				  $(".nosotros_matchota_ideal .container figure").addClass('active-img')
				}, 500);
            };
	});
