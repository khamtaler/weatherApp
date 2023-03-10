<template>
	<div v-for="city in savedCities" :key="city.id" class="relative m-auto flex items-center gap-6">
		<SavedCityTile :city="city" @click="() => goToCity(city)" />
		<button
			type="button"
			class="absolute bottom-2 left-[50%] translate-x-[-50%] rounded-md bg-darkerGray p-1 lg:left-[unset] lg:-right-[20px] lg:bottom-[unset] lg:translate-x-[0]"
		>
			<DeleteIcon class="deleteIcon h-6 w-6" />
		</button>
	</div>
	<p v-if="savedCities.length === 0" class="text-center">
		Brak zapisanych miast. Zapisz swoje pierwsze miasto aby wyświetlić tutaj skrót
	</p>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SavedCityTile from './SavedCityTile.vue';
import DeleteIcon from './icons/DeleteIcon.vue';

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

const router = useRouter();

const goToCity = (city) => {
	router.push({
		name: 'weather',
		params: { city: city.city.replaceAll(' ', '') },
		query: { lat: city.coords.lat, long: city.coords.long },
	});
};
</script>
