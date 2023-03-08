<template>
	<main class="container mt-5">
		<div class="flex flex-col justify-center items-center center py-3 mx-4">
			<input
				type="text"
				v-model="locationQuery"
				placeholder="Wpisz nazwę miasta..."
				class="bg-darkerGray max-w-xl w-full py-3 px-3 mb-2 placeholder:text-white rounded-lg focus:text-green focus:outline-green focus-visible:outline-none placeholder:focus:text-green text-center capitalize"
				@input="getResults"
			/>
			<ul
				v-if="searchReasults && locationQuery"
				class="max-h-[150px] max-w-xl w-full overflow-auto overflow-x-hidden pl-4 customScroll"
			>
				<p v-if="searchReasults.length === 0" class="text-center">Nie znaleziono podanej frazy</p>
				<li
					v-if="searchReasults"
					v-for="result in searchReasults"
					:key="result.name"
					class="cursor-pointer hover:opacity-80"
					@click="
						() => {
							locationQuery = result.name;
							searchReasults = null;
						}
					"
				>
					{{ result.name[0].toUpperCase() + result.name.slice(1) }}
				</li>
			</ul>
		</div>
	</main>
</template>
<script setup>
import { ref } from 'vue';
import CITIES from '../constants/Cities.vue';
const locationQuery = ref('');
let searchReasults = ref(null);

const getResults = () => {
	if (locationQuery.value !== null && locationQuery.value !== '') {
		searchReasults.value = CITIES.filter((item) =>
			item.name.toLowerCase().includes(locationQuery.value.toLowerCase())
		);
	}
};
</script>
