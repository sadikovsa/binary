$(function () {
	new WOW().init();

	$('.owl-carousel.slider-banner').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: true,
		dotsContainer: ".slider-banner-controls",
		navText: '',
		smartSpeed: 1500,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		animateOut: 'slideOutDown',
    	animateIn: 'flipInX',
	});

	
	var burger = $('#burgerBtn');
	var mobileContent = $('.main-nav');

	burger.on('change', function () {
		mobileContent.toggleClass('show');
	});

	$(document).on('click', function (e) {
		var target = e.target;
		if (!target.closest('.burger') && !$(target).closest(".main-nav").length) {
			burger.prop('checked', false);
			mobileContent.removeClass('show');
		}
	});
	var btn = $('.back-to-top');
	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '500');
	});

	$(".phone").mask("+99(999) 999-99-99");

	
	// YouTube 
	$(".youtube").each(function () {
		// Based on the YouTube ID, we can easily find the thumbnail image
		//$(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');
		//var videoModal = $('#videoModal');

		// Overlay the Play icon to make it look like a video player
		$(this).append($('<div/>', {
			'class': 'play'
		}));

		$(document).delegate('#' + this.id, 'click', function () {
			//videoModal.find('.youtube').attr('id', this.id);
			// Create an iFrame with autoplay set to true
			var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=0&autohide=1";
			if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

			// The height and width of the iFrame should be the same as parent
			var iframe = $('<iframe/>', {
				'frameborder': '0',
				'src': iframe_url,
				'width': $(this).width(),
				'height': $(this).height(),
				'allowfullscreen': true,
				'autoplay': true,
			})

			$(this).replaceWith(iframe);
		});
	});

	$('.counter-input').on('input change paste', function () {
		$(this).val(this.value.replace(/[^0-9\-]/, '')); // запрещаем ввод любых символов, кроме цифр и знака минуса
	});

	$('.counter-btn').on('click', function (e) {
		e.preventDefault();
		var input = $(this).closest('.counter-wrap').find('input'); // инпут
		var value = parseInt(input.val()) || 0; // получаем value инпута или 0
		if ($(this).hasClass('btn-minus')) {
			if (value > 0) {
				value = value - 1; // вычитаем из value 1
			}
		}
		if ($(this).hasClass('btn-plus')) {
			value = value + 1; // прибавляем к value 1
		}
		input.val(value).change(); // выводим полученное value в инпут; триггер .change() - на случай, если на изменение этого инпута у вас уже объявлен еще какой-то обработчик
	});


});