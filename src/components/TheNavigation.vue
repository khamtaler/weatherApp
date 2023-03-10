<template>
	<header class="sticky top-0 z-10 bg-darkerGray shadow-lg">
		<nav class="container relative flex max-w-7xl flex-row items-center justify-between py-4">
			<router-link to="/" class="flex gap-3 rounded-lg py-2 px-2 text-2xl font-bold"
				><CloudIcon class="h-8 w-8" />Weatherin</router-link
			>
			<button v-if="route.query.preview" type="button" @click="saveLocaly">
				<PlusIcon class="h-10 w-10 cursor-pointer duration-150 hover:opacity-60" />
			</button>

			<div
				class="absolute -bottom-9 right-8"
				@mouseenter="toggleTooltip"
				@mouseleave="toggleTooltip"
			>
				<QuestionMarkIcon class="h-6 w-6" />
			</div>
			<BaseTooltip class="instruction" :modalActive="tooltipActive">
				<h1 class="text-2xl">The instruction</h1>
				<h3 class="text-xl">Abilities</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a corporis ipsum quasi,
					repudiandae sunt
				</p>
				<h3 class="text-xl">Workflow</h3>
				<h3 class="text-xl">Notes</h3></BaseTooltip
			>
		</nav>
	</header>
</template>

<script setup>
import { ref } from 'vue';
import QuestionMarkIcon from './icons/QuestionMarkIcon.vue';
import PlusIcon from './icons/PlusIcon.vue';
import BaseTooltip from './BaseTooltip.vue';
import CloudIcon from './icons/CloudIcon.vue';
import { useRoute, useRouter } from 'vue-router';
import { uid } from 'uid';

const savedObjects = ref([]);
const route = useRoute();
const router = useRouter();

const saveLocaly = () => {
	if (localStorage.getItem('savedCities')) {
		savedObjects.value = JSON.parse(localStorage.getItem('savedCities'));
	}
	const cityToSave = {
		id: uid(),
		city: route.params.city,
		coords: {
			lat: route.query.lat,
			long: route.query.long,
		},
	};
	savedObjects.value.push(cityToSave);
	localStorage.setItem('savedCities', JSON.stringify(savedObjects.value));

	let currentquery = Object.assign({}, route.query);
	delete currentquery.preview;

	router.replace({ query: currentquery });
};

let tooltipActive = ref(null);
const toggleTooltip = () => {
	tooltipActive.value = !tooltipActive.value;
};
</script>

<style lang="scss" scoped></style>
