<template>
	<Transition name="tooltip">
		<div
			v-if="modalActive"
			class="absolute border-solid border rounded-md bg-darkGray border-green max-w-xs py-3 px-3"
		>
			<slot />
		</div>
	</Transition>
</template>

<script setup>
defineProps({
	modalActive: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped>
.tooltip-enter-from,
.tooltip-leave-to {
	opacity: 0%;
	transform: rotate(180deg);
}
.tooltip-enter-to,
.tooltip-leave-from {
	opacity: 100%;
	transform: rotate(360deg);
}
.tooltip-enter-active,
.tooltip-leave-active {
	transition: 0.7s ease-in-out;
}
</style>
