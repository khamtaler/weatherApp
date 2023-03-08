<template>
	<div class="flex flex-col bg-darkGray text-green min-h-screen">
		<TheNavigation />

		<router-view></router-view>
	</div>
</template>

<script setup>
import TheNavigation from './components/TheNavigation.vue';
</script>

<style lang="scss" scoped></style>
