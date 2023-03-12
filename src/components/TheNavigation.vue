<template>
	<header class="sticky top-0 z-10 bg-darkerGray shadow-lg">
		<nav class="align relative flex flex-col items-center justify-between py-2 md:flex-row">
			<router-link to="/" class="flex gap-3 rounded-lg py-2 px-2 text-2xl font-bold"
				><CloudIcon class="h-8 w-8" />Weatherin</router-link
			>

			<div
				class="absolute right-3 top-3 flex items-center gap-3 md:relative md:right-[unset] md:top-[unset] md:ml-auto"
			>
				<button v-if="route.query.preview" type="button" @click="saveLocaly">
					<PlusIcon class="h-10 w-10 cursor-pointer duration-150 hover:opacity-60" />
				</button>
				<div @mouseenter="toggleTooltip" @mouseleave="toggleTooltip">
					<QuestionMarkIcon class="h-8 w-8" />
				</div>
			</div>
			<TheSearchBar />
			<BaseTooltip :modalActive="tooltipActive">
				<h3 class="text-xl underline underline-offset-2">Pogodynka</h3>
				<p>
					Aplikacja pogodowa powstała w celu sprawdzenia i wykorzystania w praktyce nowych
					umiejętności. Aplikacja została zbudowana przy użyciu Vue.js i Tailwind.
				</p>
				<h3 class="text-xl underline underline-offset-2">Możliwości</h3>
				<p>
					Aplikacja służy do sprawdzania kilkudniowej pogody, po wpisaniu nazwy miasta w
					wyszukiwarce i wybraniu go z listy następuje przekierowanie do widoku pogody, miasto można
					dodac do obserwowanych za pomocą plusa znajdującego się po lewej stronie od wyszukiwarki.
					Zapisane miasta wyświetlają się na głównej stronie i umośliwiają szybkie przejście do
					pogody dla danego miasta. Lokacje zapisywane są w pamięci lokalnej przeglądarki i usuwane
					z tamtąd za pomocą X znajdujących się przy danym mieście.
				</p>
			</BaseTooltip>
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
import TheSearchBar from './TheSearchBar.vue';

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
	savedObjects.value.reverse().push(cityToSave);
	localStorage.setItem('savedCities', JSON.stringify(savedObjects.value.reverse()));

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
