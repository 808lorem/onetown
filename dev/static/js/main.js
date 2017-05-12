;
// Начинать писать отсюда!!!!
$(document).ready(function(){
	// установим обработчик события resize
	$(window).resize(function(){
		var h_w = $(window).height();
		$('.top-banner__slider-block').css('height', h_w);
	});

	// вызовем событие resize
	$(window).resize();
	
	
	jQuery(function($) {
		$(window).scroll(function(){
			if($(this).scrollTop() > 1){
				$('.header').addClass('fixed');
			}
			else if ($(this).scrollTop() < 1){
				$('.header').removeClass('fixed');
			}
		});
	});
	
	
	$('.js-slick__featuredwork').slick({
		dots: true,
		arrows: false,
		asNavFor: '.js-slick__featuredwork',
//		autoplay: true,
//		autoplaySpeed: 2000,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	
	$('.js-slick__top-banner').slick({
		dots: false,
		prevArrow: '.top-banner__arrow_prev',
		nextArrow: '.top-banner__arrow_next',
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});