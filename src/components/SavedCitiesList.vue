<template>
	<div v-for="city in savedCities" :key="city.id">
		<SavedCityTile :city="city" />
	</div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import SavedCityTile from './SavedCityTile.vue';
const savedCities = ref([]);

const getCities = async () => {
	if (localStorage.getItem('savedCities')) {
		savedCities.value = JSON.parse(localStorage.getItem('savedCities'));
	}

	const requests = [];
	savedCities.value.forEach((city) => {
		requests.push(
			axios.get(
				`https://api.open-meteo.com/v1/forecast?latitude=${city.coords.lat}&longitude=${city.coords.long}&current_weather=true&timezone=Europe%2FBerlin`
			)
		);
	});
	const cityData = await Promise.all(requests);

	cityData.forEach((item, index) => {
		savedCities.value[index].weather = item.data;
	});
};
await getCities();
</script>
