;
// Начинать писать отсюда!!!!
$(document).ready(function(){
	
	$('.header__btn-menu').click(function() {
		var w_w = $(window).width();
		$('.header__nav').toggleClass('active');
	});
	
	// установим обработчик события resize
	$(window).resize(function(){
		var w_w = $(window).width();
		
		if(w_w > 768) {
			$('.header__nav').removeClass('active');
		}
		
		
		var h_w = $(window).height();
		if (h_w < 720) {
			h_w = 720;
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
	
	
	$('.services__block').click(function() {
		var className = 'active'
		
		var arr = $(this).attr('class').split(' ');
		
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === className) {
				$('.services__block.'+className).removeClass(className);
			} else {
				$('.services__block.'+className).removeClass(className);
				$(this).addClass(className);
			}
		}
	});
});