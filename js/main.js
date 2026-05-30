/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Search Js
03. menu js
04. scroll-up
05. Sticky Header Js
06. Sidebar Js
07. Magnific Js
08. PureCounter Js
09. magnificPopup image Js
10. Cart Quantity Js
11. Nice Select Js
12. smooth-wrapper
13. tp-btn-hover
14. Wow Js
15. tp-gsap-bg
16. tp-copyright__lang-toggle
17. custom tab here
18. tp-header-top-animation
19. bg-hero-gradient
20. tp-title-anim
21. Data CSS Js
22. tp-char-animation
23. tp-char-animation-2
24. data-accordion
25. tp-copyright__lang-toggle
26. hero-text-anim
27. mouseCursor
28. Mouse Custom Cursor
29. isotope
29. job-form-open-btn
30. pr-feature-box
31. isotope
32. social-box-pin
****************************************************/


(function ($) {
	"use strict";

	var windowOn = $(window);

	////////////////////////////////////////////////////
	// 01. preloader js
	windowOn.on('load',function() {
		$("#preloader").fadeOut(500);
	});

	////////////////////////////////////////////////////
	// 02. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search-popup").addClass("search-opened");
	});

	$(".search-close-btn").on("click", function () {
		$(".search-popup").removeClass("search-opened");
	});


	///////////////////////////////////////////////////
	// 03. menu js
	var tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
	var tpSideMenu = $('.tp-offcanvas-menu nav');
	tpSideMenu.append(tpMenuWrap);
	if ($(tpSideMenu).find('.tp-submenu').length != 0) {
		$(tpSideMenu).find('.tp-submenu').parent().append('<button class="tp-menu-close"><i class="fal fa-plus"></i></button>');
	}
	var sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a');
	$(sideMenuList).on('click', function (e) {
		e.preventDefault();
		if (!($(this).parent().hasClass('active'))) {
			$(this).parent().addClass('active');
			$(this).siblings('.tp-submenu').slideDown();
		} else {
			$(this).siblings('.tp-submenu').slideUp();
			$(this).parent().removeClass('active');
		}
	});

    ///////////////////////////////////////////////////
	// 04. scroll-up 
	function back_to_top() {
		var $btn = $('#back_to_top'),
			$btnWrapper = $('.back-to-top-wrapper'),
			$window = $(window);
		$window.on('scroll', function () {
			if ($window.scrollTop() > 300) {
				$btnWrapper.addClass('back-to-top-btn-show');
			} else {
				$btnWrapper.removeClass('back-to-top-btn-show');
			}
		});

		$btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 300);
		});
	}
	// Initialize
	back_to_top();

	function smoothSctollTop() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 150
				}, 1000);
			}
		});
	}
	smoothSctollTop();

	///////////////////////////////////////////////////
	// 05. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 400) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	////////////////////////////////////////////////////
	// 06. Sidebar Js
	$(".tp-menu-bar").on("click", function () {
		$(".tpoffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
	});
	$(".close-btn").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});
	$(".body-overlay").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});

	///////////////////////////////////////////////////
	// 07. Magnific Js
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 08. PureCounter Js
	if ($(".purecounter").length) {
		new PureCounter({
			filesizing: true,
			selector: ".filesizecount",
			pulse: 2,
		});
		new PureCounter();
	}


	////////////////////////////////////////////////////
	// 09. magnificPopup image Js
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});


	////////////////////////////////////////////////////
	// 10. Cart Quantity Js
	$('.cart-minus').on('click', function () {
		var $input = $(this).parent().find('input');
		var count = Number($input.val(), 10) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.cart-plus').on('click', function () {
		var $input = $(this).parent().find('input');
		$input.val(Number($input.val(),10) + 1);
		$input.change();
		return false;
	});

	////////////////////////////////////////////////////
	// 11. Nice Select Js
	$('.tp-select').niceSelect();

	////////////////////////////////////////////////////
	// 12. smooth-wrapper
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
	if($('#smooth-wrapper').length && $('#smooth-content').length){
		ScrollSmoother.create({
			smooth: 1.35,
			effects: true,
			smoothTouch: .1,
			ignoreMobileResize: false
		})
	}

	////////////////////////////////////////////////////
	// 13. tp-btn-hover
	$('.tp-btn-hover')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('b').css({ top: relY, left: relX })
		})
	$('.tp-btn-hover').on('mouseout', function (e) {

		var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
		$(this).find('b').css({ top: relY, left: relX })

	});

	////////////////////////////////////////////////////
	// 14. Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
	// 15. tp-gsap-bg
   if ($('.tp-gsap-bg').length > 0) {
		gsap.set(".tp-gsap-bg", {scaleX : 1} );
		let mm = gsap.matchMedia();
		mm.add("(min-width:1400px)", () => {
			gsap.to(".tp-gsap-bg", {
				scrollTrigger: {
					trigger: ".tp-gsap-bg",
					scrub: 0.02,
					start:"top bottom",
					end: "bottom bottom",
				},
				scaleX: .95,
				borderRadius: "30px",
				transformOrigin: "center center", 
				ease: "none",
			});
		})
    }

	////////////////////////////////////////////////////
	// 16. tp-copyright__lang-toggle
	if ($("#tp-copyright__lang-toggle").length > 0) {
		window.addEventListener('click', function(e){
		
			if (document.getElementById('tp-copyright__lang-toggle').contains(e.target)){
				$(".tp-copyright__lang-submenu").toggleClass("open");
			}
			else{
				$(".tp-copyright__lang-submenu").removeClass("open");
			}
		});
	}

	////////////////////////////////////////////////////
	// 17. custom tab here
	function initPriceTabs() {
		const tabButtons = document.querySelectorAll('.tab-btn');
		const tabContents = document.querySelectorAll('.tab-content');
		tabButtons.forEach((btn, index) => {
			btn.addEventListener('click', () => {
			// deactivate all buttons
			tabButtons.forEach(b => b.classList.remove('active'));
			tabContents.forEach(c => c.classList.add('hidden'));

			// activate clicked button & show content
			btn.classList.add('active');
			tabContents[index].classList.remove('hidden');
			});
		});
	}
	initPriceTabs();


	////////////////////////////////////////////////////
	// 18. tp-header-top-animation

	if ($('.tp-header-top-animation').length > 0) {
		gsap.set(".tp-header-top-animation", {
			opacity: 0,
			y: '20px'
		});
		gsap.to(".tp-header-top-animation", {
			opacity:1,
			y: '0px',
			delay: 1.05
		});
	}

	////////////////////////////////////////////////////
	// 19. bg-hero-gradient
	if ($('.bg-hero-gradient').length > 0) {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from(".bg-hero-gradient", {
			scale:1.2,
			duration:1.5
		});
	}

	////////////////////////////////////////////////////
	// 20. tp-title-anim

	if ($('.tp-title-anim').length > 0) {
		let splitTitleLines = gsap.utils.toArray(".tp-title-anim");
		splitTitleLines.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
			gsap.set(splitTextLine, { perspective: 300});
			itemSplitted.split({ type: "lines" })
			tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -60, force3D: true, transformOrigin: "top center -50", stagger: 0.2 });
		});	
	}

	////////////////////////////////////////////////////
	// 21. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});


	////////////////////////////////////////////////////
	// 22. tp-char-animation
	if ($('.tp-char-animation').length > 0) {
		// 25. Title Animation
		let char_come = gsap.utils.toArray(".tp-char-animation");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
			gsap.set(splitTextLine, { perspective: 300});
			itemSplitted.split({ type: "chars, words"})
			tl.from(itemSplitted.chars, 
			{
				duration: 1,
				x: 100,
				autoAlpha: 0,
				stagger: 0.05 
			});
		});	
	}

	////////////////////////////////////////////////////
	// 23. tp-char-animation-2

	if ($('.tp-char-animation-2').length > 0) {
		let char_come = gsap.utils.toArray(".tp-char-animation-2");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
			gsap.set(splitTextLine, { perspective: 300});
			itemSplitted.split({ type: "chars, words"})
			tl.from(itemSplitted.chars, 
				{
					duration: 1.2,
					opacity: 0,
					scale: 0,
					y: 60,
					rotationX: 180,
					transformOrigin: "0% 30% -30%",
					stagger: 0.02
				});
		});	
	}

	////////////////////////////////////////////////////
	// 24. data-accordion
	const buttons = document.querySelectorAll('[data-accordion-btn]');
	buttons.forEach(btn => {
		btn.addEventListener('click', () => {
		const item = btn.closest('.accordion-item');

		document.querySelectorAll('.accordion-item').forEach(el => {
			if (el !== item) {
			el.classList.remove('active');
			}
		});

		item.classList.toggle('active');
		});
	});

	////////////////////////////////////////////////////
	// 25. tp-copyright__lang-toggle
	if ($(".tp-copyright__lang-toggle").length) {
		$(".tp-copyright__lang-toggle").on("click", function (e) {

			if ($(e.target).closest(".tp-copyright__lang-toggle").length) {
				$(".tp-copyright__lang-submenu").toggleClass("active");
			} else {
				$(".tp-copyright__lang-submenu").removeClass("active");
			}

		});
	}

	////////////////////////////////////////////////////
	// 26. hero-text-anim
	if ($('.hero-text-anim').length > 0) {
		let tl = gsap.timeline({default:{ease:"SlowMo.easeOut"}});
		tl.to(".hero-text-anim i.child-1", {y: "0px", duration: 1, opacity:1, stagger:0.3, delay:.5});
	}

	if ($('.hero-text-anim-2').length > 0) {
		let tl = gsap.timeline({default:{ease:"SlowMo.easeOut"}});
		tl.to(".hero-text-anim-2 i.child-2", {y: "0px", duration: .9, opacity:1, stagger:0.3, delay:.3});
	}
	////////////////////////////////////////////////////
	// 26. hero-text-anim
	function mediaSize() { 
		/* Set the matchMedia */
		if (window.matchMedia('(min-width: 768px)').matches) {
			const panels = document.querySelectorAll('.col-custom')
			panels.forEach(panel => {
				panel.addEventListener('click', () => {
					removeActiveClasses()
					panel.classList.add('active')
				})
			})
		
			function removeActiveClasses() {
				panels.forEach(panel => {
					panel.classList.remove('active')
				})
			}

		} else {
		/* Reset for CSS changes – Still need a better way to do this! */
			$(".col-custom ").addClass("active");
		}
	};
	mediaSize();
	window.addEventListener('resize', mediaSize, false); 

	////////////////////////////////////////////////////
	// 27. mouseCursor

	$(".tp-cursor-point-area").on("mouseenter", function () {
		$(".mouseCursor").addClass("cursor-big");
	});

	$(".tp-cursor-point-area").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});
	$(".tp-cursor-point-area").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});

	////////////////////////////////////////////////////
	// 28. Mouse Custom Cursor
	function itCursor() {
		var myCursor = jQuery(".mouseCursor");
		if (myCursor.length) {
			if ($("body")) {
				const e = document.querySelector(".cursor-inner"),
					t = document.querySelector(".cursor-outer");
				let n,
					i = 0,
					o = !1;
				(window.onmousemove = function(s) {
					o ||
						(t.style.transform =
							"translate(" + s.clientX + "px, " + s.clientY + "px)"),
						(e.style.transform =
							"translate(" + s.clientX + "px, " + s.clientY + "px)"),
						(n = s.clientY),
						(i = s.clientX);
				}),
				$("body").on("mouseenter", "button, a, .cursor-pointer", function() {
						e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
					}),
					$("body").on("mouseleave", "button, a, .cursor-pointer", function() {
						($(this).is("a", "button") &&
							$(this).closest(".cursor-pointer").length) ||
						(e.classList.remove("cursor-hover"),
							t.classList.remove("cursor-hover"));
					}),
					(e.style.visibility = "visible"),
					(t.style.visibility = "visible");
			}
		}
	}
	itCursor();

	////////////////////////////////////////////////////
	// 29. job-form-open-btn
	$('#my-btn').on('click', function(){
		$(this).slideToggle(900);
		$('#show').slideDown(900);
	});

	////////////////////////////////////////////////////
	// 30. pr-feature-box

	if ($('.pr-feature-box').length > 0) {
		ScrollTrigger.create({
			trigger: ".pr-feature-box",
			start: "top 80px",
			end: "bottom 54%",
			pin: ".pr-feature-wrapper",
			pinSpacing: false,
		});
	}

	////////////////////////////////////////////////////
	// 31.isotope
	$('.masonary-grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.masonary-grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			layoutMode: 'fitRows',
			masonry: {
				columnWidth: 1,
			},
			
		});
		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ 
				filter: filterValue,
				animationOptions: {
					duration: 1000,
					easing: "linear",
					queue: false
				}
			});
			
		});
		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	////////////////////////////////////////////////////
	// 32.social-box-pin

	if ($('.social-box-pin').length > 0) {
	ScrollTrigger.create({
		trigger: ".social-box-pin",
		start: "top 10%",
		end: "bottom 60%",
		pin: ".social-box-pin",
		pinSpacing: false
	  });
	}

	
	////////////////////////////////////////////////////
	// 32.social-box-pin

	$('#click').on('click', function (){
		$(this).toggleClass('open');
		var x = document.getElementById("myInput");
			if (x.type === "password") {
			   x.type = "text";
			} else {
			   x.type = "password";
			}
	});

	if ($('#myInput').length > 0) {
		function myFunction() {
			var x = document.getElementById("myInput");
			if (x.type === "password") {
			   x.type = "text";
			} else {
			   x.type = "password";
			}
		}
	}

})(jQuery);