$(document).ready(function() {

	xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET","./test.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;

	/*document.getElementById("res_title1").innerHTML=
	xmlDoc.getElementsByTagName("research")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	document.getElementById("res_descrip1").innerHTML=
	xmlDoc.getElementsByTagName("research")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
	*/

	document.getElementById("res_title2").innerHTML=
	xmlDoc.getElementsByTagName("research")[1].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	document.getElementById("res_descrip2").innerHTML=
	xmlDoc.getElementsByTagName("research")[1].getElementsByTagName("description")[0].childNodes[0].nodeValue;

	document.getElementById("res_title3").innerHTML=
	xmlDoc.getElementsByTagName("research")[2].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	document.getElementById("res_descrip3").innerHTML=
	xmlDoc.getElementsByTagName("research")[2].getElementsByTagName("description")[0].childNodes[0].nodeValue;

	document.getElementById("news_title1").innerHTML=
	xmlDoc.getElementsByTagName("news")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	document.getElementById("news_descrip1").innerHTML=
	xmlDoc.getElementsByTagName("news")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;

	document.getElementById("news_title2").innerHTML=
	xmlDoc.getElementsByTagName("news")[1].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	document.getElementById("news_descrip2").innerHTML=
	xmlDoc.getElementsByTagName("news")[1].getElementsByTagName("description")[0].childNodes[0].nodeValue;

	$('.last > a').click(function() {
		return false;
	});


	$('.last').hover(function() {
		$(this).find('.div-sub_nav').stop(true,true).slideDown(200).delay(500);
	}, function() {
		$(this).find('.div-sub_nav').slideUp(200);
	});

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

	/*$(window).scroll(function() {
		var pos = parseFloat($('body').css('margin-left'));
		/*console.log(pos);*/
	/*	pos = pos - $(window).scrollLeft();
	/*console.log($(window).scrollLeft());*/
	/*	console.log($(window).scrollLeft());
		$('#access.fixed').css('left', pos + 'px' );
		
	});*/

}); 