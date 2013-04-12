$(document).ready(function() {

	$('.last > a').click(function() {
		return false;
	});

	$('.last').hover(function() {
		$(this).find('#div-sub_nav').slideDown(150);
	}, function() {
		$(this).find('#div-sub_nav').slideUp(150);
	});

	/*$(window).scroll(function() {
		var pos = parseFloat($('body').css('margin-left'));
		/*console.log(pos);*/
	/*	pos = pos - $(window).scrollLeft();
		/*console.log($(window).scrollLeft());*/
	/*	console.log($(window).scrollLeft());
		$('#access.fixed').css('left', pos + 'px' );
		
	});*/
	$('.mygallery').tn3({
		skinDir: "http://www.bezosexpeditions.com/js/tn3/skins",
		autoplay:false,
		skin:"tn3e",
		responsive: "100%",
		imageClick: "url",
		shaderColor: "#FFFFFF",
		imageClick:"url",
		image: {
			crop: true,
			transition: (function(){
			
			$(".mygallery img").click(function(e) {
                     var url = $(this).attr('src');
                     var rel = $(this).attr('rel');
                     var content = '<img src="' + url + '" rel="'+ rel + '" />';
                       $.fancybox({
						   'width' : "1080",
						   'height' : "721",
							'autoDimensions' : false,
                          'content' : content
                     });
                });

			}),
			transitions:[{
				type:"blinds",
				duration: 300
			}]
		},
		thumbnailer: {
			overMove: false
		}		
		   
	});
	
	$('.fancybox').fancybox();

}); 