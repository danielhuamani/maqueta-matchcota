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
});
