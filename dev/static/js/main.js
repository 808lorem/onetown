;
// Начинать писать отсюда!!!!
$(document).ready(function(){
	// установим обработчик события resize
	$(window).resize(function(){
		var h_w = $(window).height(),
			pb_header = parseFloat( $('.header').css('padding-bottom') );
			h_header = $('.header').height() + pb_header,
			h_toBannerFlexbox = $('.top-banner__slider_flexbox').height();
  console.log(pb_header);
  
		if(h_w < (h_header + h_toBannerFlexbox)) {
			h_w = h_header + h_toBannerFlexbox
		}
		$('.top-banner__slider_bg').css('height', h_w);
		$('.top-banner__arrow').css('top', h_w/2);
		$('.top-banner__slider_absolute').css('top', h_w/2);
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

	$('.js-slick__top-banner').slick({
		dots: false,
		arrows: true,
		prevArrow: '.top-banner__arrow_prev',
		nextArrow: '.top-banner__arrow_next',
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
//		responsive: [{
//			breakpoint: 1500,
//			settings: {
//				
//    		}
//    	}]
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
	
});