/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Thumbs, EffectFade, Lazy, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';


const initAllSliders = () => {

	let textSlider;

	if (document.querySelector('.text-slider')) {
		textSlider = new Swiper('.text-slider', {
			modules: [Navigation, Pagination, Thumbs, EffectFade, Autoplay],
			effect: 'fade',
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
			watchSlidesProgress: true,
			loop: true,
		});
	}

	if (document.querySelector('.img-slider')) {
		new Swiper('.img-slider', {
			modules: [Navigation, Pagination, Thumbs, Lazy, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
			lazy: true,
			loop: true,
			pagination: {
				el: ".intro__pagination",
				type: "custom",
				renderCustom: function (swiper, current, total) {
					return ('0' + current).slice(-2);
				}
			},
			autoplay: {
				delay: 5000,
			},
			// Arrows
			navigation: {
				nextEl: '.intro__button-next',
				prevEl: '.intro__button-prev',
			},
			thumbs: {
				swiper: textSlider ? textSlider : null,
			},
		});
	}

	if (document.querySelector('.slider-about')) {
		new Swiper('.slider-about', {
			modules: [Navigation, Lazy],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 15,
			speed: 800,
			loop: true,
			lazy: true,
			// Arrows
			navigation: {
				nextEl: '.slider-about__btn-next',
				prevEl: '.slider-about__btn-prev',
			},
			breakpoints: {
				320: {
					spaceBetween: 15,
				},
				575: {
					spaceBetween: 30,
				},
			},
		});
	}

	let casesSlider;
	if (document.querySelector('.cases__slider')) {
		casesSlider = new Swiper('.cases__slider', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,
			pagination: {
				el: ".cases__pagination",
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.cases__button-next',
				prevEl: '.cases__button-prev',
			},
			// loop: true,
		});
	}

	const initGallerySliders = (id) => {
		let singleImageSlider;

		if (document.querySelector(`[data-slide-id="${id}"] .gallery-slider`)) {
			singleImageSlider = new Swiper(`[data-slide-id="${id}"] .gallery-slider`, {
				modules: [Navigation, Pagination, Lazy],
				observer: true,
				observeParents: true,
				slidesPerView: 3,
				spaceBetween: 0,
				speed: 800,
				lazy: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				breakpoints: {
					375: {
						slidesPerView: 4,
					},
					768: {
						slidesPerView: 5,
					},
					992: {
						slidesPerView: 7,
					},
				},
			});
		}

		if (document.querySelector(`[data-slide-id="${id}"] .single-slider`)) {
			new Swiper(`[data-slide-id="${id}"] .single-slider`, {
				modules: [Navigation, Lazy, Thumbs],
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 0,
				speed: 800,
				lazy: true,
				// Arrows
				navigation: {
					nextEl: `[data-slide-id="${id}"] .gallery-slider__button-next`,
					prevEl: `[data-slide-id="${id}"] .gallery-slider__button-prev`,
				},
				thumbs: {
					swiper: singleImageSlider
				},
			});
		}
	}

	const casesSlides = document.querySelectorAll('.cases__slide');

	if (casesSlides.length > 0) {
		casesSlides.forEach((slide, i) => slide.dataset.slideId = i);
	}

	const onSlideChange = e => {
		const targetSlide = e.el.querySelector(`[data-slide-id="${e.activeIndex}"]`);
		const isInitialized = targetSlide.querySelector('.swiper-initialized');
		if (!isInitialized) {
			targetSlide.removeAttribute('aria-hidden');
			initGallerySliders(e.activeIndex);
		}
	}

	initGallerySliders('0');
	casesSlider.on('slideChange', onSlideChange);
}

window.addEventListener("load", function (e) {
	initAllSliders();
});
