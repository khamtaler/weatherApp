<template>
	<button v-if="savedCities.length !== 0" type="button" @click="clearLocalStorage">
		Wyczyść wszystkie
	</button>
	<div
		v-for="city in savedCities"
		:key="city.id"
		class="w-max-1xl relative m-auto flex w-full items-center gap-6"
	>
		<SavedCityTile :city="city" @click="() => goToCity(city)" />
		<button
			type="button"
			class="absolute top-0 right-8 rounded-md bg-darkerGray p-1 md:-right-[25px]"
		>
			<DeleteIcon class="deleteIcon h-6 w-6" @click="deleteItem(city.id)" />
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

const emit = defineEmits(['reload']);

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

const clearLocalStorage = () => {
	if (localStorage.getItem('savedCities')) {
		localStorage.removeItem('savedCities');
		savedCities.length = 0;
		emit('reload');
	}
};

const deleteItem = (id) => {
	const citiesList = JSON.parse(localStorage.getItem('savedCities'));
	const updatedList = citiesList.filter((city) => city.id !== id);
	localStorage.setItem('savedCities', JSON.stringify(updatedList));
	emit('reload');
};
</script>
