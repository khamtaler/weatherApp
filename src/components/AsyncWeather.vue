<template>
	<div class="container flex flex-col items-center">
		<div class="mt-8 text-center" v-if="route.query.preview">
			<h3>
				Sprawdzasz pogodę w mieście: {{ route.params.city }}, uzyj ikony + aby dodać miasto do
				obserwowanych
			</h3>
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
		return weather;
	} catch (err) {
		console.log(err);
	}
};
const weatherData = await getWeather();
console.log(weatherData);
</script>
