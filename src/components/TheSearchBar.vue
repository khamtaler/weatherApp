<template>
	<div
		class="center relative mx-4 mt-5 flex w-[90%] flex-col items-center justify-center md:mt-0 md:w-[400px]"
	>
		<input
			type="text"
			v-model="locationQuery"
			placeholder="Wpisz nazwę miasta..."
			class="w-full rounded-lg bg-lightGray py-3 text-center capitalize placeholder:text-white focus:text-green focus:outline-green placeholder:focus:text-green focus:placeholder:text-opacity-0 focus-visible:outline-none md:w-full md:max-w-xl"
			@input="getResults"
			@click="() => (locationQuery = '')"
		/>
		<ul
			v-if="searchReasults && locationQuery"
			class="customScroll absolute top-[45px] right-0 max-h-[300px] w-full overflow-auto overflow-x-hidden rounded-b-lg border-t-2 border-b-2 bg-lightGray pl-4 pt-3 md:max-h-[250px] md:max-w-xl"
		>
			<p v-if="searchReasults.length === 0" class="text-center">Nie znaleziono podanej frazy</p>
			<li
				v-if="searchReasults"
				v-for="result in searchReasults"
				:key="result.name"
				class="cursor-pointer px-5 py-1 text-center hover:opacity-80"
				@click="
					() => {
						showWeather(result);
						locationQuery = result.name;
						searchReasults = null;
					}
				"
			>
				{{ result.name[0].toUpperCase() + result.name.slice(1) }}
			</li>
		</ul>
	</div>
</template>

<script setup>
import CITIES from '../constants/Cities.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const locationQuery = ref('');
let searchReasults = ref(null);

const router = useRouter();
const getResults = () => {
	if (locationQuery.value !== null && locationQuery.value !== '') {
		searchReasults.value = CITIES.filter((item) =>
			item.name.toLowerCase().includes(locationQuery.value.toLowerCase())
		);
	}
};

const showWeather = (searchResult) => {
	const savedCities = JSON.parse(localStorage.getItem('savedCities'));
	let isSaved = null;
	if (savedCities) {
		isSaved = savedCities.filter((save) => save.name === searchResult.name);
	}
	isSaved
		? router.push({
				name: 'weather',
				params: { city: searchResult.name },
				query: {
					long: searchResult.long,
					lat: searchResult.lat,
				},
		  })
		: router.push({
				name: 'weather',
				params: { city: searchResult.name },
				query: {
					long: searchResult.long,
					lat: searchResult.lat,
					preview: true,
				},
		  });
};
</script>
