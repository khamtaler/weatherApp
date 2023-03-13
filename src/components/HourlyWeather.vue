<template>
	<div
		class="my-6 flex w-[32%] flex-col flex-wrap rounded-xl bg-lightGray p-3 text-[0.8rem] sm:w-[15%] sm:text-sm xl:w-[8%]"
	>
		<p>{{ time.split('T')[1] }}</p>

		<img
			:src="getIcon(weatherItem[0].webp)"
			class="whiteSvg w-max-[80px] my-5 mx-auto h-[50px]"
			alt="weather"
		/>
		<div class="mt-auto flex flex-col gap-4">
			<h5 class="font-bold">{{ weatherItem[0].weather }}</h5>
			<p class="text-white">
				<span class="font-bold text-yellow">{{ Math.round(temp) }}</span> &deg;C
			</p>

			<p class="text-white">
				Wiatr: <span class="font-bold text-yellow">{{ wind }} km/h</span>
			</p>
			<p class="text-white">
				opady: <span class="font-bold text-green">{{ precipation }}% </span>
			</p>
		</div>
	</div>
</template>

<script setup>
import WEATHERCODES from '../constants/WeatherCodes.vue';
import { toRefs, ref } from 'vue';
const props = defineProps({
	weather: Number,
	temp: Number,
	time: String,
	wind: Number,
	precipation: Number,
});
let dayNumber = ref(null);
let dayNames = ref(null);

const weatherNumber = toRefs(props);
const weatherItem = WEATHERCODES.filter(
	(item) => item.from <= weatherNumber.weather.value && item.to >= weatherNumber.weather.value
);

const getIcon = (name) => {
	return new URL(`../assets/images/${name}.webp`, import.meta.url).href;
};
</script>

<style lang="scss" scoped></style>
