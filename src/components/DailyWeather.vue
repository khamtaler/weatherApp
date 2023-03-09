<template>
	<div class="my-6 w-full rounded-xl bg-lightGray p-5 sm:w-[30%] xl:w-[16%]">
		<p class="font-bold">{{ time }}</p>
		<img
			:src="`../src/components/icons/${weatherItem[0].svg}.svg`"
			class="whiteSvg w-max-[80px] my-5 mx-auto h-[50px]"
		/>
		<div class="flex flex-col gap-4">
			<h5 class="font-bold">{{ weatherItem[0].weather }}</h5>
			<p class="text-white">
				temp max: <span class="font-bold text-green">{{ Math.round(tempMax) }}</span> &deg;C
			</p>
			<p class="text-white">
				temp min: <span class="font-bold text-green">{{ Math.round(tempMin) }}</span
				>&deg;C
			</p>
			<p class="text-white">
				wschód: <span class="font-bold text-green">{{ sunrise.split('T')[1] }}</span> Km/h
			</p>
			<p class="text-white">
				zachód: <span class="font-bold text-green">{{ sunset.split('T')[1] }} </span> Km/h
			</p>
		</div>
	</div>
</template>

<script setup>
import WEATHERCODES from '../constants/WeatherCodes.vue';
import { toRefs } from 'vue';
const props = defineProps({
	weather: Number,
	tempMax: Number,
	tempMin: Number,
	time: String,
	sunset: String,
	sunrise: String,
});
const weatherNumber = toRefs(props);
const weatherItem = WEATHERCODES.filter(
	(item) => item.from <= weatherNumber.weather.value && item.to >= weatherNumber.weather.value
);
console.log(weatherItem);
</script>

<style lang="scss" scoped></style>
