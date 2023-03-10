<template>
	<div class="my-6 w-full rounded-xl bg-lightGray p-5 sm:w-[30%] xl:w-[16%]">
		<p class="font-bold">{{ dayNames[dayNumber] }}</p>
		<p>{{ time }}</p>

		<img
			:src="getIcon(weatherItem[0].webp)"
			class="whiteSvg w-max-[80px] my-5 mx-auto h-[50px]"
			alt="weather"
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
				wschód: <span class="font-bold text-green">{{ sunrise.split('T')[1] }}</span>
			</p>
			<p class="text-white">
				zachód: <span class="font-bold text-green">{{ sunset.split('T')[1] }} </span>
			</p>
		</div>
	</div>
</template>

<script setup>
import WEATHERCODES from '../constants/WeatherCodes.vue';
import { toRefs, ref } from 'vue';
const props = defineProps({
	weather: Number,
	tempMax: Number,
	tempMin: Number,
	time: String,
	sunset: String,
	sunrise: String,
});
let dayNumber = ref(null);
let dayNames = ref(null);

const weatherNumber = toRefs(props);
const weatherItem = WEATHERCODES.filter(
	(item) => item.from <= weatherNumber.weather.value && item.to >= weatherNumber.weather.value
);
dayNumber = new Date(weatherNumber.time.value).getDay();
dayNames = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];

const getIcon = (name) => {
	return new URL(`../assets/images/${name}.webp`, import.meta.url).href;
};
</script>

<style lang="scss" scoped></style>
