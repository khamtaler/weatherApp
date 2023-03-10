module.exports = {
	content: ['./index.html', './src/**/*.{vue,js}', './src/**/**/*.{vue,js}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			white: '#ffffff',
			lightGray: '#303030',
			darkGray: '#272727',
			darkerGray: '#1f1f1f',
			yellow: '#E98F1B',
			green: '#4ab5de',
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
