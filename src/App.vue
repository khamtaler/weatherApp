<template>
	<div class="flex min-h-screen flex-col bg-darkGray text-green">
		<TheNavigation />

		<router-view></router-view>
	</div>
</template>

<script setup>
import TheNavigation from './components/TheNavigation.vue';
</script>

<style lang="scss" scoped></style>
