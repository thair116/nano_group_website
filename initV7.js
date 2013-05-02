$(document).ready(function() {

	var top = $('.access').offset().top;
	$(window).scroll(function(event) {
		var y = $(this).scrollTop();
		if (y >= top) {
			$('.access').addClass('fixed')
		} else {
			$('.access').removeClass('fixed')
		}
	});

	$(".fancybox").fancybox();

	$(".fancybox").fancybox({
			helpers : {
				title: {
					type: 'outside'
				}
			}
		});


}); 