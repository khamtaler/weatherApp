<template>
	<main class="container mt-5">
		<div class="m-auto flex max-w-3xl flex-col gap-5">
			<Suspense>
				<SavedCitiesList :key="reloadList" @reload="reload" />
				<template #fallback><p>Ładowanie...</p></template>
			</Suspense>
		</div>
	</main>
</template>

<script setup>
import { ref } from 'vue';

import { useRouter } from 'vue-router';
import SavedCitiesList from '../components/SavedCitiesList.vue';

const reloadList = ref(0);
const reload = () => {
	reloadList.value += 1;
};
const router = useRouter();
</script>
