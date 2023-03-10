<template>
	<main class="container mt-5">
		<div class="center mx-4 flex flex-col items-center justify-center py-3">
			<input
				type="text"
				v-model="locationQuery"
				placeholder="Wpisz nazwę miasta..."
				class="mb-2 w-full max-w-xl rounded-lg bg-darkerGray py-3 px-3 text-center capitalize placeholder:text-white focus:text-green focus:outline-green placeholder:focus:text-green focus-visible:outline-none"
				@input="getResults"
			/>
			<ul
				v-if="searchReasults && locationQuery"
				class="customScroll max-h-[150px] w-full max-w-xl overflow-auto overflow-x-hidden pl-4"
			>
				<p v-if="searchReasults.length === 0" class="text-center">Nie znaleziono podanej frazy</p>
				<li
					v-if="searchReasults"
					v-for="result in searchReasults"
					:key="result.name"
					class="cursor-pointer hover:opacity-80"
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
		<div class="flex flex-col gap-5">
			<Suspense>
				<SavedCitiesList :key="reloadList" @reload="reload" />
				<template #fallback><p>Ładowanie...</p></template>
			</Suspense>
		</div>
	</main>
</template>
<script setup>
import { ref } from 'vue';
import CITIES from '../constants/Cities.vue';
import { useRouter } from 'vue-router';
import SavedCitiesList from '../components/SavedCitiesList.vue';
const locationQuery = ref('');
let searchReasults = ref(null);

const reloadList = ref(0);
const reload = () => {
	reloadList.value += 1;
};
const router = useRouter();
const getResults = () => {
	if (locationQuery.value !== null && locationQuery.value !== '') {
		searchReasults.value = CITIES.filter((item) =>
			item.name.toLowerCase().includes(locationQuery.value.toLowerCase())
		);
	}
};

const showWeather = (searchResult) => {
	router.push({
		name: 'weather',
		params: { city: searchResult.name.replaceAll(' ', '') },
		query: {
			long: searchResult.long,
			lat: searchResult.lat,
			preview: true,
		},
	});
};
</script>
