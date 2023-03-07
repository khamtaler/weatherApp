/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue}'],
	theme: {
		extend: {},
		fontFamily: {
			Lato: ['Lato, sans-serif'],
		},
		container: {
			padding: '1.5rem',
			center: true,
		},
	},
	plugins: [],
};
