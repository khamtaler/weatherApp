<template>
	<div class="m-auto grid max-w-4xl grid-cols-3 items-start rounded-xl bg-darkerGray p-5">
		<div class="justify-self-start">
			<h1 class="text-2xl font-bold text-white">{{ cityData.city.value.city }}</h1>
			<p class="font-bold">
				{{ cityData.city.value.weather.current_weather.time.split('T')[0] }}
				{{ cityData.city.value.weather.current_weather.time.split('T')[1] }}
			</p>
		</div>
		<img :src="getIcon(currentWeather[0].webp)" class="max-h-[60px] justify-self-center" />
		<div class="justify-self-end text-right">
			<p>
				<span class="text-white">Współrzędne:</span> {{ cityData.city.value.coords.long }} &deg;E
				{{ cityData.city.value.coords.lat }} &deg;N
			</p>

			<p>
				<span class="text-white">Temperatura:</span>
				{{ cityData.city.value.weather.current_weather.temperature }} &deg;C
			</p>
			<p>
				<span class="text-white">Wiatr:</span>
				{{ cityData.city.value.weather.current_weather.windspeed }} Km/h
			</p>
		</div>
	</div>
</template>

<script setup>
import WEATHERCODES from '../constants/WeatherCodes.vue';
import { toRefs } from 'vue';
const props = defineProps({
	city: {
		type: Object,
		default: () => {},
	},
});
const cityData = toRefs(props);

const currentWeather = WEATHERCODES.filter(
	(item) =>
		item.from <= cityData.city.value.weather.current_weather.weathercode &&
		item.to >= cityData.city.value.weather.current_weather.weathercode
);
const getIcon = (name) => {
	return new URL(`../assets/images/${name}.webp`, import.meta.url).href;
};
console.log();
</script>
