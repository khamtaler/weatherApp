<script>
const WEATHERCODES = [
	{ from: 0, to: 0, weather: 'Czyste niebo', webp: 'sun' },
	{ from: 1, to: 3, weather: 'Lekkie zachmurzenie', webp: 'cloudy' },
	{ from: 45, to: 48, weather: 'Mgła', webp: 'fog' },
	{ from: 51, to: 55, weather: 'Mrzawka', webp: 'rain' },
	{ from: 56, to: 57, weather: 'Zimny deszcz', webp: 'hail' },
	{ from: 61, to: 65, weather: 'Lekki deszcz', webp: 'heavy-rain' },
	{ from: 66, to: 67, weather: 'Marznący deszcz', webp: 'hail' },
	{ from: 71, to: 75, weather: 'Opady śniegu', webp: 'snow' },
	{ from: 77, to: 77, weather: 'Intensywne opady śniegu', webp: 'snow' },
	{ from: 80, to: 82, weather: 'Przelotne opady', webp: 'rain' },
	{ from: 85, to: 86, weather: 'Małe opady śniegu', webp: 'snow' },
	{ from: 95, to: 95, weather: 'Słabe burze', webp: 'storm' },
	{ from: 96, to: 99, weather: 'Silne burze', webp: 'storm' },
];

export default WEATHERCODES;
</script>
