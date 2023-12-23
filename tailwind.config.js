/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './assets/src/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				manrope: ['Manrope', 'sans-serif'],
			},
			colors: {
				bodyColor: 'hsl(214, 17%, 51%)',
				shareSectionColor: 'hsl(217, 19%, 35%)',
				mainSectionColor: 'hsl(210, 46%, 95%)',
				textColor: 'hsl(212, 23%, 69%)',
			},
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
}
  