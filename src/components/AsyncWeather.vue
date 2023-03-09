<template>
	<div class="container flex flex-col items-center">
		<div class="mt-9 text-center" v-if="route.query.preview">
			<h3>
				Sprawdzasz pogodę w mieście: {{ route.params.city }}, uzyj ikony + aby dodać miasto do
				obserwowanych
			</h3>
		</div>
		<div class="mt-5 flex w-full flex-col items-center">
			<h1 class="text-2xl">{{ route.params.city }}</h1>
			<h3>
				{{ weatherData.current_weather.time.split('T')[0] }}
			</h3>
			<h3>
				{{ weatherData.current_weather.time.split('T')[1] }}
			</h3>
			<div class="mx-auto mt-5 flex w-full max-w-xl flex-col items-center">
				<h4>Aktualna pogoda</h4>
				<div class="mt-5 flex w-full items-center justify-center gap-5">
					<img
						:src="`../src/components/icons/${currentWeather[0].svg}.svg`"
						class="h-auto w-[80px]"
					/>
					<div>
						<h5>{{ currentWeather[0].weather }}</h5>
						<p>temperatura: {{ Math.round(weatherData.current_weather.temperature) }}&deg;C</p>
						<p>wiatr: {{ Math.round(weatherData.current_weather.windspeed) }} Km/h</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
import WEATHERCODES from '../constants/WeatherCodes.vue';

const route = useRoute();
const getWeather = async () => {
	try {
		const weather = await axios.get(
			`https://api.open-meteo.com/v1/forecast?latitude=${route.query.lat}&longitude=${route.query.long}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,rain_sum&current_weather=true&timezone=Europe%2FBerlin`
		);

		return weather.data;
	} catch (err) {
		console.log(err);
	}
};
const weatherData = await getWeather();

const currentWeather = WEATHERCODES.filter(
	(item) =>
		item.from <= weatherData.current_weather.weathercode &&
		item.to >= weatherData.current_weather.weathercode
);

console.log(weatherData);
</script>
