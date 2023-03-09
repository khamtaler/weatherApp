<script>
const WEATHERCODES = [
	{ from: 0, to: 0, weather: 'Czyste niebo', svg: 'Circle' },
	{ from: 1, to: 3, weather: 'Lekkie zachmurzenie', svg: 'Cloud' },
	{ from: 45, to: 48, weather: 'Mgła', svg: 'Fog' },
	{ from: 51, to: 55, weather: 'Mrzawka', svg: 'Umbrella' },
	{ from: 56, to: 57, weather: 'Zimny deszcz', svg: 'HeavyRain' },
	{ from: 61, to: 65, weather: 'Lekki deszcz', svg: 'Rain' },
	{ from: 66, to: 67, weather: 'Marznący deszcz', svg: 'HeavyRain' },
	{ from: 71, to: 75, weather: 'Opady śniegu', svg: 'Snow' },
	{ from: 77, to: 77, weather: 'Intensywne opady śniegu', svg: 'Snow' },
	{ from: 80, to: 82, weather: 'Przelotne opady', svg: 'Umbrella' },
	{ from: 85, to: 86, weather: 'Małe opady śniegu', svg: 'Snow' },
	{ from: 95, to: 95, weather: 'Słabe burze', svg: 'Storm' },
	{ from: 96, to: 99, weather: 'Silne burze', svg: 'HeavyStorm' },
];

export default WEATHERCODES;
</script>
