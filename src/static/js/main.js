jQuery(document).ready(function($) {

	$(".btn_menu").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(".menu_block").addClass('menu_block--active')
		$(".link_menu").removeClass('link_menu--active')
		$("body").addClass('body-active')

		$(".overlay").addClass('overlay--active')
	});

	$(".menu_block .icon-close").click(function(event) {
		/* Act on the event */
		$(".menu_block").removeClass('menu_block--active')
		$(".link_menu").addClass('link_menu--active')
		$("body").removeClass('body-active')
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
	   $("body").removeClass('body-active')
	});
	$(".adopta_pop").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(".overlay").addClass('overlay--active-pop')
		$(".cnt_pop_up_adopta").removeClass('cnt_pop_up_none')
		$("body").addClass('body-active')
	});

	$(".apadrina_pop").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(".overlay").addClass('overlay--active-pop')
		$(".cnt_pop_up_apadrina").removeClass('cnt_pop_up_none')
		$("body").addClass('body-active')
	});
	$(".donar_pop").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(".overlay").addClass('overlay--active-pop')
		$(".cnt_pop_up_dona").removeClass('cnt_pop_up_none')
		$("body").addClass('body-active')
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
	$("#form_dona").validationEngine('attach', {
			promptPosition: "topLeft",
			autoHidePrompt: true,
			autoHideDelay: 400000,
			binded: false,
			scroll: false
		});
	$("#form_dona button").click(function(e) {
		e.preventDefault();
		var valid = $('#form_dona').validationEngine('validate');
		console.log(valid)
		if (!valid) {

		}else{
			$('#form_dona').fadeOut('slow');

		}

	});
	$("#form_apadrina").validationEngine('attach', {
			promptPosition: "topLeft",
			autoHidePrompt: true,
			autoHideDelay: 400000,
			binded: false,
			scroll: false
		});
	$("#form_apadrina button").click(function(e) {
		e.preventDefault();
		var valid = $('#form_apadrina').validationEngine('validate');
		console.log(valid)
		if (!valid) {

		}else{
			$('#form_apadrina').fadeOut('slow');

		}

	});
	$("#form_adopta").validationEngine('attach', {
			promptPosition: "topLeft",
			autoHidePrompt: true,
			autoHideDelay: 400000,
			binded: false,
			scroll: false
		});
	$("#form_adopta button").click(function(e) {
		e.preventDefault();
		var valid = $('#form_adopta').validationEngine('validate');
		console.log(valid)
		if (!valid) {

		}else{
			$('#form_adopta').fadeOut('slow');

		}

	});
});
