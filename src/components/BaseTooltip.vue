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
.tooltip-enter-from {
	opacity: 0%;
	transform: rotate(-90deg);
}
.tooltip-leave-to {
	opacity: 0%;
	transform: rotate(90deg);
}
.tooltip-enter-to,
.tooltip-leave-from {
	opacity: 100%;
	transform: rotate(0deg);
}
.tooltip-enter-active,
.tooltip-leave-active {
	transition: 0.4s ease-in-out;
}
</style>
