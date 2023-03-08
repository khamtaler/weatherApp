module.exports = {
	content: ['./index.html', './src/**/*.{vue,js}', './src/**/**/*.{vue,js}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			white: '#ffffff',
			darkGray: '#272727',
			green: '#4ade80',
			red: '#dc2626',
		},
		fontFamily: {
			Lato: ['PT Sans, sans-serif'],
		},
		container: {
			padding: '1.5rem',
			center: true,
		},
	},
	plugins: [],
};
