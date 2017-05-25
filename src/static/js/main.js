jQuery(document).ready(function($) {

	$(".link_menu").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(".menu_block").addClass('menu_block--active')
		$(".link_menu").removeClass('link_menu--active')

		$(".overlay").addClass('overlay--active')
	});

	$(".menu_block .icon-close").click(function(event) {
		/* Act on the event */
		$(".menu_block").removeClass('menu_block--active')
		$(".link_menu").addClass('link_menu--active')
		$(".overlay").removeClass('overlay--active')

	});
	$( ".cnt-input input, .cnt-input textarea" ).focusin(function() {
			console.log("ndasda")
			$(this).parent().addClass('input-active');
	});

	$( ".cnt-input input, .cnt-input textarea" ).focusout(function() {
		if ($(this).val() === "") {
			$(this).parent().removeClass('input-active');
		};
	});
	$(".cnt_pop_up .pop_up .close").click(function(event) {
		/* Act on the event */
	   event.preventDefault();
	   $(".cnt_pop_up").addClass('cnt_pop_up_none')
	   $(".overlay").removeClass('overlay--active-pop')
	});
	$(".adopta_pop").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(".overlay").addClass('overlay--active-pop')
		$(".cnt_pop_up_adopta").removeClass('cnt_pop_up_none')
	});

	$(".apadrina_pop").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(".overlay").addClass('overlay--active-pop')
		$(".cnt_pop_up_apadrina").removeClass('cnt_pop_up_none')
	});
	$(".donar_pop").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(".overlay").addClass('overlay--active-pop')
		$(".cnt_pop_up_dona").removeClass('cnt_pop_up_none')
	});
	$(".btn-tab").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		var data_tab = $(this).data("id");
		$(".btn-tab").removeClass('btn--light-white-active')
		$(this).addClass('btn--light-white-active')
		$(".tab").addClass('tab_none')
		$(data_tab).removeClass('tab_none')
	});
	$(".acordeon .title").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		if(!$(this).closest("li").hasClass("active"))
		{
			$(".acordeon .text-content").stop(false).slideUp(300)

			$(".acordeon li").removeClass("active")

		}
		$(this).closest('li').find(".text-content").stop(false).slideDown(300);
		$(this).closest('li').addClass("active")
	});
});
