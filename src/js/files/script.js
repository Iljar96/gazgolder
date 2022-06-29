// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";

//Form navigation
const clickHandler = e => {
	if (e.target.closest('.form-block__nav-link')) {
		const form = e.target.closest('.form-block').querySelector('form'),
			navBlock = e.target.closest('.form-block__nav'),
			navItems = navBlock.querySelectorAll('.form-block__nav-link'),
			button = e.target.closest('.form-block__nav-link'),
			input = form.querySelector('.form__input .input');

		navItems.forEach(item => item.classList.remove('_tab-active'));
		button.classList.add('_tab-active');
		input.placeholder = button.dataset.placeholder;
		input.dataset.type = button.dataset.type;
	}

	if (e.target.closest('.equipment__btn')) {
		const btn = e.target.closest('.equipment__btn');
		btn.remove();
	}
}

document.body.addEventListener('click', clickHandler);

const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach(item => item.addEventListener('keyup', e => {
	const spollerTitle = item.querySelector('[data-spoller]');
	if (spollerTitle && e.code === 'Enter') spollerTitle.click();
}));