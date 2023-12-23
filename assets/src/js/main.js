const userProfile = document.querySelector('#user-profile');
const shareSection = document.querySelector('#share-section');
const shareImageButtonDesktop = document.querySelector(
	'#share-image-button-desktop'
);
const shareImageButtonMobile = document.querySelector(
	'#share-image-button-mobile'
);
const mainSection = document.querySelector('#main-section');

(() => {
	const monthArray = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const dateMobile = document.querySelector('#dateMobile');
	const dateDesktop = document.querySelector('#dateDesktop');
	const day = new Date().getDate();
	const monthValue = new Date().getMonth();
	const monthString = monthArray[monthValue];
	const year = new Date().getFullYear();

	dateMobile.textContent = `${day} ${monthString} ${year}`;
	dateDesktop.textContent = `${day} ${monthString} ${year}`;
})();

// function that manipulates the DOM on click
const clickFunction = () => {
	shareSection.style.display = 'block';
	userProfile.style.display = 'none';
	if (shareSection.style.display === 'block') {
		mainSection.style.borderBottomLeftRadius = 0;
		mainSection.style.borderBottomRightRadius = 0;
	}
};

// desktop image button listening for clicks
(() => {
	shareImageButtonDesktop.addEventListener('click', () => clickFunction());
})();

// mobile image button listening for clicks
(() => {
	shareImageButtonMobile.addEventListener('click', () => clickFunction());
})();
