
/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/

// Подключение базового набора функционала
import lightGallery from 'lightgallery';

// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
import lgFullscreen from 'lightgallery/plugins/fullscreen/lg-fullscreen.min.js'
import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.min.js'
import lgVideo from 'lightgallery/plugins/video/lg-video.min.js'

// Базовые стили
import '@scss/libs/gallery/lightgallery.scss';
// Стили дополнений
// import '@scss/libs/gallery/lg-thumbnail.scss';
import '@scss/libs/gallery/lg-video.scss';
// import '@scss/libs/gallery/lg-autoplay.scss';
import '@scss/libs/gallery/lg-zoom.scss';
// import '@scss/libs/gallery/lg-pager.scss';
import '@scss/libs/gallery/lg-fullscreen.scss';
// import '@scss/libs/gallery/lg-share.scss';
// import '@scss/libs/gallery/lg-comments.scss';s
// import '@scss/libs/gallery/lg-rotate.scss';
// import '@scss/libs/gallery/lg-medium-zoom.scss';
// import '@scss/libs/gallery/lg-relative-caption.scss';

// Все стили
// import '@scss/libs/gallery/lightgallery-bundle.scss';

// Запуск
const galleries = document.querySelectorAll('[data-gallery]');
if (galleries.length) {
	galleries.forEach(gallery => {
		lightGallery(gallery, {
			plugins: [lgZoom, lgFullscreen],
			licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
			mode: 'lg-use-transition-for-zoom',
			speed: 500,
			escKey: true,
			download: 0,
		});


		gallery.addEventListener('keyup', event => {
			if (event.code === 'Enter' && event.target.closest('[tabindex]'))
				event.target.click();
		});
	});
}