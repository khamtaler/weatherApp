<template>
	<div class="container flex flex-col items-center">
		<div class="mt-9 text-center" v-if="route.query.preview">
			<h3>
				Sprawdzasz pogodę w mieście: {{ route.params.city }}, uzyj ikony + aby dodać miasto do
				obserwowanych
			</h3>
		</div>
		<div
			class="mt-5 flex w-full max-w-fit flex-col items-center rounded-xl bg-lightGray py-5 px-10"
		>
			<h1 class="text-2xl font-bold">{{ route.params.city }}</h1>
			<h3 class="font-bold">
				{{ weatherData.current_weather.time.split('T')[0] }}
				{{ weatherData.current_weather.time.split('T')[1] }}
			</h3>
			<div class="mx-auto mt-5 flex w-full max-w-xl flex-col items-center">
				<h4 class="underline">Aktualna pogoda</h4>
				<div class="mt-5 flex w-full items-center justify-center gap-5">
					<img
						:src="`../src/components/icons/${currentWeather[0].svg}.svg`"
						class="whiteSvg h-auto w-[80px]"
						alt="weather"
					/>
					<div>
						<h5>{{ currentWeather[0].weather }}</h5>
						<p>temperatura: {{ Math.round(weatherData.current_weather.temperature) }}&deg;C</p>
						<p>wiatr: {{ Math.round(weatherData.current_weather.windspeed) }} Km/h</p>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-5 w-full text-center">
			<h3 class="my-5 text-xl font-bold">Prognoza na kolejne dni</h3>
			<hr />
			<div class="mt-7 flex flex-col justify-around sm:flex-row sm:flex-wrap xl:w-full">
				<DailyWeather
					v-for="i in 6"
					:weather="weatherData.daily.weathercode[i]"
					:tempMax="weatherData.daily.temperature_2m_max[i]"
					:tempMin="weatherData.daily.temperature_2m_min[i]"
					:time="weatherData.daily.time[i]"
					:sunset="weatherData.daily.sunset[i]"
					:sunrise="weatherData.daily.sunrise[i]"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
import WEATHERCODES from '../constants/WeatherCodes.vue';
import DailyWeather from './DailyWeather.vue';

const route = useRoute();
const getWeather = async () => {
	try {
		const weather = await axios.get(
			`https://api.open-meteo.com/v1/forecast?latitude=${route.query.lat}&longitude=${route.query.long}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum&current_weather=true&timezone=Europe%2FBerlin`
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
</script>
