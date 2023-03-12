<template>
	<div>
		<Suspense>
			<AsyncWeather />
			<template #fallback>
				<h3 class="mt-[50%] text-center">Ładowanie...</h3>
			</template>
		</Suspense>
	</div>
</template>

<script setup>
import AsyncWeather from '../components/AsyncWeather.vue';
</script>

<style lang="scss" scoped></style>
