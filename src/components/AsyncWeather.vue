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
			<h3>{{ new Date().toJSON().slice(0, 10) }}</h3>
			<p>{{ Math.round(weatherData.main.temp - 272.15) }} &deg;C</p>
			<p>odczuwalne: {{ Math.round(weatherData.main.feels_like - 272.15) }} &deg;C</p>
			<img
				class="h-auto w-[150px]"
				:src="`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
			/>
		</div>
	</div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const getWeather = async () => {
	try {
		const weather =
			await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${route.query.lat}&lon=${route.query.long}&appid=f4a0ea94b0cef3995d4266f814856433
`);

		return weather.data;
	} catch (err) {
		console.log(err);
	}
};
const weatherData = await getWeather();
console.log(weatherData);
</script>
