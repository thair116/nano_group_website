$(document).ready(function() {

	$('.last > a').click(function() {
		return false;
	});

	$('.last').hover(function() {
		$(this).find('#div-sub_nav').slideDown(150);
	}, function() {
		$(this).find('#div-sub_nav').slideUp(150);
	});

	var top = $('#access').offset().top;
		$(window).scroll(function(event) {
			var y = $(this).scrollTop();
			if (y >= top) {
				$('#access').addClass('fixed')
			} else {
				$('#access').removeClass('fixed')
			}
		});

	$(".fancybox").fancybox();

	/*$(window).scroll(function() {
		var pos = parseFloat($('body').css('margin-left'));
		/*console.log(pos);*/
	/*	pos = pos - $(window).scrollLeft();
		/*console.log($(window).scrollLeft());*/
	/*	console.log($(window).scrollLeft());
		$('#access.fixed').css('left', pos + 'px' );
		
	});*/

}); 