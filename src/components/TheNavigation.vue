<template>
	<header class="sticky top-0 shadow-lg">
		<nav class="container relative flex flex-row items-center justify-between max-w-7xl py-4">
			<router-link to="/" class="flex rounded-lg gap-3 text-2xl py-2 px-2 font-bold"
				><CloudIcon class="w-8 h-8" />Weatherin</router-link
			>
			<PlusIcon class="w-10 h-10 hover:opacity-60 duration-150 cursor-pointer" />
			<div
				class="absolute -bottom-9 right-8"
				@mouseenter="toggleTooltip"
				@mouseleave="toggleTooltip"
			>
				<QuestionMarkIcon class="w-6 h-6" />
			</div>
			<BaseTooltip class="instruction" :modalActive="tooltipActive">
				<h1 class="text-2xl">The instruction</h1>
				<h3 class="text-xl">Abilities</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a corporis ipsum quasi,
					repudiandae sunt
				</p>
				<h3 class="text-xl">Workflow</h3>
				<h3 class="text-xl">Notes</h3></BaseTooltip
			>
		</nav>
	</header>
</template>

<script setup>
import { ref } from 'vue';
import QuestionMarkIcon from './icons/QuestionMarkIcon.vue';
import PlusIcon from './icons/PlusIcon.vue';
import BaseTooltip from './BaseTooltip.vue';
import CloudIcon from './icons/CloudIcon.vue';

let tooltipActive = ref(null);
const toggleTooltip = () => {
	tooltipActive.value = !tooltipActive.value;
};
</script>

<style lang="scss" scoped></style>
