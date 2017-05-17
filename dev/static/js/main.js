;
// Начинать писать отсюда!!!!

var heightHeader = $('.header').height(),
	paddingTopHeader = parseFloat( $('.header').css('padding-top') ),
	paddingBottomHeader = parseFloat( $('.header').css('padding-bottom') );
heightHeader += paddingTopHeader + paddingBottomHeader;

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
	
	$('.scroll-link').click(function() {
		
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		$('html, body').animate({
		  scrollTop: target.offset().top - heightHeader + 1
		}, 1000);
		return false;
		}
	  }
	});
	
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
	
	var menu_selector = ".header__nav"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
 
	function onScroll(){
		var scroll_top = $(document).scrollTop();
		$(menu_selector + " a").each(function(){
			var hash = $(this).attr("href");
			if (hash.charAt(0) !== '#') {
				return true;
			} else {
				var target = $(hash);
				if (target.position().top <= scroll_top + heightHeader && target.position().top + target.outerHeight() > scroll_top + heightHeader) {
					$(menu_selector + " a.active").removeClass("active");
					$(this).addClass("active");
				} else {
					$(this).removeClass("active");
				}
			}
		});
	}

	$(document).ready(function () {

		$(document).on("scroll", onScroll);

		$("a[href^=#]").click(function(e){
			e.preventDefault();

			$(document).off("scroll");
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
			var hash = $(this).attr("href");
			var target = $(hash);

			$("html, body").animate({
				scrollTop: target.offset().top
			}, 500, function(){
				window.location.hash = hash;
				$(document).on("scroll", onScroll);
			});
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
	
	
	$('.js-slick__about').slick({
		dots: false,
		prevArrow: '.about__arrow_prev',
		nextArrow: '.about__arrow_next',
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 830,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
    	}]
	});
});


function range(rangeId, inputId, value, min, max, step, firstText, lastText) {
	$( function() {
		$(rangeId).slider({
			range: "min",
			value: value,
			min: min,
			max: max,
			step: step,
			slide: function( event, ui ) {
				$( inputId ).val(firstText + ui.value + lastText);
			}
		});
		
		$( inputId ).val(firstText + $(rangeId).slider( "value" ) + lastText);
	} );
}

range('#range-price', '#price', 5, 1, 42, 1, '$', ',000');
range('#range-time', '#time', 2, 1, 10, 1, '', ' weeks');