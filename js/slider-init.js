/***************************************************
==================== JS INDEX ======================
****************************************************
01. tp-project-slider-active
02. tp-testimonial-slider-active
03. tp-testimonial-2-slider-active
04. tp-testimonial-3-slider-active
05. tp-integration-slider-active
06. footer-slide-active
07. tp-barnd-slider-active
08. tp-security-slider-active
09. testimonial-five-slider-active
10. journey-slider-active
11. blog-grid-slider-active
12. blog-slider-active
****************************************************/


(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// 01. tp-project-slider-active
	var swiper = new Swiper('.tp-project-slider-active', {
		loop: true,
		slidesPerView: 3,
        spaceBetween: 30,
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// scrollbar
		scrollbar: {
			el: ".tp-scrollbar",
			clickable: true,
		},
	});


	////////////////////////////////////////////////////
	// 02. tp-testimonial-slider-active
    var swiper = new Swiper(".tp-testimonial-brand-slider-active", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 2,
		freeMode: true,
		watchSlidesProgress: true,
	  	breakpoints: {
			576: { slidesPerView: 3 },
			768: { slidesPerView: 3 },
			992: { slidesPerView: 4 },
			1200: { slidesPerView: 5 },
		},
    });
    var swiper2 = new Swiper(".tp-testimonial-slider-active", {
		loop: true,
		spaceBetween: 10,
		thumbs: {
			swiper: swiper,
		},
	});

	////////////////////////////////////////////////////
	//03. tp-testimonial-2-slider-active
	var swiper = new Swiper(".tp-testimonial-2-slider-active", {
		slidesPerView: 3,
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: ".tp-testimonial-2-pagination",
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			}
		},
	});

	////////////////////////////////////////////////////
	//04. tp-testimonial-3-slider-active
	var swiper = new Swiper(".tp-testimonial-3-slider-active", {
		slidesPerView: 3,
		spaceBetween: 0,
		loop: true,
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			}
		},
		navigation: {
			nextEl: ".tp-testimonial-3-next",
			prevEl: ".tp-testimonial-3-prev",
		},
	});

	////////////////////////////////////////////////////
	// 05. tp-integration-slider-active
	var tp_integration_slider= new Swiper(".tp-integration-slider-active", {
		loop: true,
		freemode: true,
		spaceBetween: 30,
		slidesPerView: 'auto',
		centeredSlides: true,
		allowTouchMove: false,
		speed: 8000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////////////////////////////////////////////////////
	// 06. footer-slide-active
	var tp_footer_slider= new Swiper(".footer-slide-active", {
		loop: true,
		freemode: true,
		spaceBetween: 0,
		slidesPerView: 'auto',
		centeredSlides: true,
		allowTouchMove: false,
		speed: 8000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////////////////////////////////////////////////////
	// 07. tp-barnd-slider-active
	var tp_barnd_slider_active = new Swiper('.tp-barnd-slider-active', {
		loop: true,
		slidesPerView: 5,
		spaceBetween: 10,
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 3,
			},
			576: {
				slidesPerView: 2,
			},
			0: {
				slidesPerView: 1,
			}
		},
		navigation: {
			nextEl: ".tp-barnd-3-next",
			prevEl: ".tp-barnd-3-prev",
		},
	});

	////////////////////////////////////////////////////
	// 08. tp-security-slider-active
	var tp_footer_slider= new Swiper(".tp-security-slider-active", {
		loop: true,
		freemode: true,
		spaceBetween: 0,
		slidesPerView: 'auto',
		centeredSlides: true,
		allowTouchMove: false,
		speed: 8000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});

	////////////////////////////////////////////////////
	// 09. testimonial-five-slider-active
	const testiswiper = new Swiper('.testimonial-five-slider-active', {
		loop: true,
		slidesPerView: 4,
        spaceBetween: 30,
		arrows:true,
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		scrollbar: {
			el: ".tp-scrollbar",
			clickable: true,
		},
		navigation: {
			nextEl: '.test-prev',
			prevEl: '.test-next',
		},
	});

	////////////////////////////////////////////////////
	// 10. journey-slider-active
	const journeyswiper = new Swiper('.journey-slider-active', {
		loop: true,
		slidesPerView: 5,
        spaceBetween: 30,
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		scrollbar: {
			el: ".tp-scrollbar",
			clickable: true,
		},
	});

	////////////////////////////////////////////////////
	// 11. blog-grid-slider-active
	const gridswiper = new Swiper('.blog-grid-slider-active', {
		loop: true,
		slidesPerView: 1,
		arrows:true,
		navigation: {
			nextEl: '.grid-next',
			prevEl: '.grid-prev',
		},
	});

	////////////////////////////////////////////////////
	// 12. blog-slider-active
	const blogdetailswiper = new Swiper('.blog-slider-active', {
		loop: true,
		slidesPerView: 3,
        spaceBetween: 30,
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

	});


})(jQuery);    

